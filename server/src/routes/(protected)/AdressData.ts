import express, { Request, Response } from 'express';

const AdressData = express();

AdressData.use(express.json());

AdressData.post('/receive-adress', (req: Request, res: Response) => {
    const data = req.body;

    console.log(data);

    res.json({
        mensagem: 'Data receive with sucess!',
        dataReceived: data
    });
});

export = AdressData;

