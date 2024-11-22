import ProtectedRoutes from "./(protected)";
import express from "express";

const route = express();

route.use(ProtectedRoutes);

export = route;