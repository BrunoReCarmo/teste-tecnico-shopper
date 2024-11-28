import axios from "axios";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import InputMask from "./ui/inputMask";
import { Label } from "./ui/label";

interface  UserDataProps{
    CPF: string,
    origin: string,
    destination: string,
    distance: number,
    duration: string,
    idDriver: number,
    nameDriver: string,
    value: number
}

export function UserData(/* {CPF, origin, destination, distance, duration, idDriver, nameDriver, value} : UserDataProps */) {
/*     const HandleCallTravel = async () => {
    try {
      const response = await axios.post("http://localhost:8080/ride/estimate", {
        idUser: CPF,
        origin: origin,
        destination: destination,
        distance: distance,
        duration: duration,
        idDriver: idDriver,
        nameDriver: nameDriver,
        value: value
      });
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  }; */
  
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Aceitar viagem</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Informações necessárias</DialogTitle>
            <DialogDescription>
              Para solicitação de viagem precisamos de uma forma de
              identificação sua
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="cpf" className="text-right">
                CPF
              </Label>
              <InputMask
                maskType="cpf"
                id="cpf"
                placeholder="000.000.000-00"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Confirmar viagem</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
