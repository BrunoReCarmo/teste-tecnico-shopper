"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const AdressData = (0, express_1.default)();
AdressData.use(express_1.default.json());
AdressData.post('/receive-adress', (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        mensagem: 'Data receive with sucess!',
        dataReceived: data
    });
});
module.exports = AdressData;
