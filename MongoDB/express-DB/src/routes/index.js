import express from "express";
import GpuCardRoutes from "./GpuCardRoutes.js";
import ProductRoutes from "./ProductRoutes.js";

const routes = (app) => {
  app.use(express.json(), GpuCardRoutes, ProductRoutes);
};

export default routes;
