import express from "express";
import GpuCardController from "../controllers/GpuCardController.js";

const router = express.Router();

router
  .get("/", GpuCardController.getCards)
  .get("/:id", GpuCardController.getById)
  .post("/", GpuCardController.postCard)
  .put("/:id", GpuCardController.updateCard)
  .delete("/:id", GpuCardController.deleteCard)

export default router;
