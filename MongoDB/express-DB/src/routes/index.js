import express from "express";
import GpuCardRoutes from "./GpuCardRoutes.js";

const routes = (app) => {
  app.use(express.json(), GpuCardRoutes);
};

export default routes