import cors from "cors";
import express from "express";
import route from "@routes";

const app = express();

app.use(express.json());
//Conexão do FrontEnd
app.use(cors());
//rotas API
app.use(route);
//Bloco c/ a porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });