import React from "react";
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

const motoristas = [
  {
    id: 1,
    profilePic:
      "https://www.bing.com/th?id=OIP.Tt78xKbjLk2dbxi9VuyLkwHaHJ&w=150&h=145&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    nome: "Homer Simpson",
    descricao:
      "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
    carro: "Plymouth Valiant 1973 rosa e enferrujado",
    avaliacao: "2/5",
    comentario:
      "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
    taxaKm: "R$2,50",
    kmMinimo: 1,
  },
  {
    id: 2,
    profilePic:
      "https://th.bing.com/th/id/OIP.W4jFjh6yKuBbY-s7u5Z2lgHaNG?rs=1&pid=ImgDetMain",
    nome: "Dominic Toretto",
    descricao:
      "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
    carro: "Dodge Charger R/T 1970 modificado",
    avaliacao: "4/5",
    comentario:
      "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
    taxaKm: "R$5,00",
    kmMinimo: 5,
  },
  {
    id: 3,
    profilePic:
      "https://th.bing.com/th/id/OIP.pHAGKuR19HYJlSe3QjdtQQHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7",
    nome: "James Bond",
    descricao:
      "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
    carro: "Aston Martin DB5 clássico",
    avaliacao: "5/5",
    comentario:
      "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
    taxaKm: "R$10,00",
    kmMinimo: 10,
  },
];

interface DriverProps {
  state: string;
  distance: string;
}

export const Driver = ({ state, distance }: DriverProps) => {
  return (
    <div className={`max-w-2/3 flex justify-center state ${state}`}>
      <div className="grid md:grid-cols-3 gap-4 w-full max-w-2/3 px-4 overflow-hidden">
        {motoristas.map((data: any) => (
          <Card key={data.id} className="w-full max-w-xs mx-auto">
            <CardHeader>
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src={data.profilePic} />
                  <AvatarFallback>{data.nome}</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <CardTitle>{data.nome}</CardTitle>
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
                            <p>{data.comentario}</p>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p>{data.descricao}</p>
              <div className="flex my-4">
                <p>
                  <Badge>{data.taxaKm} por Km</Badge>
                </p>
                <p>
                  <Badge variant={"outline"}>
                    viagens a partir de {data.kmMinimo}km
                  </Badge>
                </p>
              </div>
              <div className="grid grid-cols-2">
                <img
                  src="https://img.freepik.com/premium-vector/car-isolated-vector-illustration-automobile-city-background_175838-1484.jpg"
                  alt="car"
                />
                <div className="p-4 text-xs flex items-center">
                  {data.carro}
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-2">
              a distancia é de {distance}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
