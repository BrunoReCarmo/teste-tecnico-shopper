import express, { Request, Response } from "express";

const AddressData = express();

AddressData.use(express.json());

AddressData.post("/ride/estimate", (req: Request, res: Response) => {
  const kmTravel = req.body.km;

  const drivers = [
    {
      id: 1,
      profilePic:
        "https://www.bing.com/th?id=OIP.Tt78xKbjLk2dbxi9VuyLkwHaHJ&w=150&h=145&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      name: "Homer Simpson",
      description:
        "Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).",
      car: "Plymouth Valiant 1973 rosa e enferrujado",
      rating: "2/5",
      comment:
        "Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.",
      ratePerKm: 2.5,
      minKm: 1,
    },
    {
      id: 2,
      profilePic:
        "https://th.bing.com/th/id/OIP.W4jFjh6yKuBbY-s7u5Z2lgHaNG?rs=1&pid=ImgDetMain",
      name: "Dominic Toretto",
      description:
        "Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.",
      car: "Dodge Charger R/T 1970 modificado",
      rating: "4/5",
      comment:
        "Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!",
      ratePerKm: 5.0,
      minKm: 5,
    },
    {
      id: 3,
      profilePic:
        "https://th.bing.com/th/id/OIP.pHAGKuR19HYJlSe3QjdtQQHaE7?w=257&h=180&c=7&r=0&o=5&pid=1.7",
      name: "James Bond",
      description:
        "Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.",
      car: "Aston Martin DB5 clássico",
      rating: "5/5",
      comment:
        "Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.",
      ratePerKm: 10.0,
      minKm: 10,
    },
  ];

  // Cálculo para custo estimado da viagem após requisição
  const driversWithCost = drivers.map((driver) => {
    const kmFinal = kmTravel >= driver.minKm ? kmTravel : driver.minKm;
    
    const rideCost = kmFinal * driver.ratePerKm;

    return {
      ...driver,
      rideCost,
    };
  });

  res.json({
    message: "Data received successfully!",
    drivers: driversWithCost,
  });
});

export = AddressData;
