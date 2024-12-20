"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const _routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
//Conexão do FrontEnd
app.use((0, cors_1.default)());
//rotas API
app.use(_routes_1.default);
//Bloco c/ a porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => { console.log(`Server running on port ${PORT}`); });
