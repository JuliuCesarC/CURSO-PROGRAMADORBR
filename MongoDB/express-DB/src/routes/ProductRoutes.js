import express from "express";
import ProductController from "../controllers/ProductController.js";

const router = express.Router();

router
  .get("/produto/", ProductController.getProducts)
  .get("/produto/:id", ProductController.getProductById)
  .post("/produto/", ProductController.postProduct)
  .put("/produto/:id", ProductController.updateProduct)
  .delete("/produto/:id", ProductController.deleteProduct);

export default router;
