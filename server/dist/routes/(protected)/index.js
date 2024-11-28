"use strict";
const express_1 = require("express");
const ProtectedRoutes = (0, express_1.Router)();
const routes = [
    require("./AdressData"),
];
for (const route of routes) {
    ProtectedRoutes.use(route);
}
module.exports = ProtectedRoutes;
