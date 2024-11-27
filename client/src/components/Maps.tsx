import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
  DistanceMatrixService
} from "@react-google-maps/api";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Driver } from "./Driver";

export interface MapsProps {}

const Maps = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const [searchBoxA, setSearchBoxA] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] = useState<google.maps.places.SearchBox>();
  const [targetA, settargetA] = useState<google.maps.LatLngLiteral>();
  const [targetB, settargetB] = useState<google.maps.LatLngLiteral>();

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>(null);

  const [response, setResponse] =
    useState<google.maps.DistanceMatrixResponse | null>(null);

  const [distance, setDistance] = useState<string>("");
  const [duration, setDuration] = useState('');
  const [driverReqState, setDriverReqState] = useState<string>("hidden");
  const [trackReqState, setTrackReqState] = useState<string>("block");

  //Posição inicial do mapa estação barra funda
  const position = {
    lat: -23.525505,
    lng: -46.667358,
  };

  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onLoadA = (ref: google.maps.places.SearchBox) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };

  // Local de embarque, pegando valores do input
  const onPlacesChangedA = () => {
    const places = searchBoxA!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    settargetA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  // Local de desembarque, pegando valores do input
  const onPlacesChangedB = () => {
    const places = searchBoxB!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    settargetB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  // Traçando rota && definindo momento com exibição de valores
  const traceRoute = () => {
    if (targetA && targetB) {
      setOrigin(targetA);
      setDestination(targetB);
      setDriverReqState("flex");
      setTrackReqState("hidden");
    }
  };

  //Retornar do Tab drivers para campos com input de valore
  const newReq = () => {
    setDriverReqState("hidden");
    setTrackReqState("block");
  }

  const directionsServiceOptions =
    // @ts-ignore
    useMemo<google.maps.DirectionsRequest>(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res: any) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = useMemo<any>(() => {
    return {
      directions: response,
    };
  }, [response]);

  const calculateDistance = () => {
    //targetA e targetB são definidos antes de calcular a distância
    if (targetA && targetB) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [targetA],  // targetA como origem
          destinations: [targetB],  // targetB como destino
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (response && status === "OK" && response.rows && response.rows[0] && response.rows[0].elements) {
            const result = response.rows[0].elements[0];
  
            if (result && result.distance && result.duration) {
              setDistance(result.distance.text);
              setDuration(result.duration.text);
            } else {
              console.error("Distance or duration not available in the response.");
            }
          } else {
            console.error("Error with DistanceMatrixService or invalid response structure.");
          }
        }
      );
    } else {
      console.error("Points not definied.");
    }
  };  

  return (
    <div className="w-full h-full">
      <LoadScript
        googleMapsApiKey={"AIzaSyDmyOn9q7XLenV8V4onkqT2tXlpYuadgjw"}
        libraries={["places"]}
      >
        {/*Responsividade PC e Mobile*/}
        <div className="grid md:grid-cols-2 h-full">
          <div
            className={`${trackReqState} flex items-center justify-center p-4`}
          >
            <Card className="p-4">
              <CardTitle className="my-4 text-6xl title">
                Solicite agora mesmo sua viagem
              </CardTitle>
              <CardContent>
                <div className="grid w-full items-center gap-4 border-l border-dashed border-black ">
                  <StandaloneSearchBox
                    onLoad={onLoadA}
                    onPlacesChanged={onPlacesChangedA}
                  >
                    <Input placeholder="Local de embarque" />
                  </StandaloneSearchBox>
                  <StandaloneSearchBox
                    onLoad={onLoadB}
                    onPlacesChanged={onPlacesChangedB}
                  >
                    <Input placeholder="Local de desembarque" />
                  </StandaloneSearchBox>
                </div>
                <CardFooter className="justify-end mt-4">
                  <Button
                    onClick={() => {
                      traceRoute();
                      calculateDistance()
                    }}
                  >
                    Ver rota →
                  </Button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
          <div className={`${driverReqState} items-center`}>
            <div className="grid">
            <Button className="w-fit my-4" onClick={newReq}>← Mudar rota</Button>
            <Driver state={driverReqState} distance={distance} />
            </div>
          </div>
          <div className="flex align-center justify-center">
            <div className="aspect-square flex justify-center items-center">
              <GoogleMap
                onLoad={onMapLoad}
                options={{ streetViewControl: false }}
                mapContainerStyle={{ width: "70%", height: "70%" }}
                center={position}
                zoom={15}
              >
                {!response && targetA && <Marker position={targetA} />}
                {!response && targetB && <Marker position={targetB} />}

                {origin && destination && (
                  <DirectionsService
                    options={directionsServiceOptions}
                    callback={directionsCallback}
                  />
                )}

                {response && directionsRendererOptions && (
                  <DirectionsRenderer options={directionsRendererOptions} />
                )}
              </GoogleMap>
            </div>
          </div>
        </div>
      </LoadScript>
    </div>
  );
};

export default Maps;
