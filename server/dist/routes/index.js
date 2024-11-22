"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const _protected_1 = __importDefault(require("./(protected)"));
const express_1 = __importDefault(require("express"));
const route = (0, express_1.default)();
route.use(_protected_1.default);
module.exports = route;
