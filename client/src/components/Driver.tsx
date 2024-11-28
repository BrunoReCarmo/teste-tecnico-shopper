import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { UserData } from "./User-Data";

interface DriverProps {
  state: string;
  distance: string;
  drivers: any;
}

export const Driver = ({ state, distance, drivers }: DriverProps) => {
  const driversData = drivers;

  return (
    <div className={`max-w-4/5 flex justify-center state ${state}`}>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4/5 px-4 overflow-hidden">
        {driversData.map((data: any) => (
          <Card key={data.id} className="w-full max-w-md mx-auto">
            <CardHeader>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={data.profilePic} />
                  <AvatarFallback>{data.name}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <CardTitle>{data.name}</CardTitle>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 text-yellow-300 me-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <p>{data.avaliacao}</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <Dialog>
                      <DialogTrigger className="text-xs">
                        Ver a avaliação
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>
                            {" "}
                            <div className="flex items-center my-4">
                              <Avatar>
                                <AvatarImage src="https://th.bing.com/th/id/R.fd8f636bdf10a2ed30530bd89b18880e?rik=oqNjYitMxEvDqw&pid=ImgRaw&r=0" />
                                <AvatarFallback>Anônimo</AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <CardTitle>Anônimo</CardTitle>
                              </div>
                            </div>
                          </DialogTitle>
                          <DialogDescription className="mb-4">
                            <p>{data.comment}</p>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{data.description}</p>
              <div className="flex my-4 gap-2">
                <p>
                  <Badge>R${data.ratePerKm} por Km</Badge>
                </p>
                <p>
                  <Badge variant={"secondary"}>
                    viagens a partir de {data.minKm}km
                  </Badge>
                </p>
              </div>
              <div className="grid grid-cols-2">
                <img
                  src="https://img.freepik.com/premium-vector/car-isolated-vector-illustration-automobile-city-background_175838-1484.jpg"
                  alt="car"
                />
                <div className="p-4 text-xs flex items-center">{data.car}</div>
              </div>
            </CardContent>
            <CardFooter className="gap-2 text-2xl font-bold">
              {data.minKm > distance ? <Badge variant="custom">Indisponível</Badge> : <>R${data.rideCost}<UserData/></>}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
