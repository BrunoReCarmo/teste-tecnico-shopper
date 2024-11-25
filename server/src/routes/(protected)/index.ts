import { Router } from "express";

const ProtectedRoutes = Router();

const routes = [
    require("./AdressData"),
];

for (const route of routes) {
    ProtectedRoutes.use("/api", route);
}
  
export = ProtectedRoutes;