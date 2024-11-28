"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const KeysData = (0, express_1.default)();
// Endpoint GET que retorna a chave da API
KeysData.get('/api', (req, res) => {
    const googleApiKey = process.env.GOOGLE_API_KEY;
    if (googleApiKey) {
        res.status(200).send(googleApiKey);
    }
    else {
        res.status(500).json({
            message: 'API Key not found in environment variables',
        });
    }
});
module.exports = KeysData;
