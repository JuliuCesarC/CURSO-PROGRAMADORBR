import mongoose from "mongoose";

const GpuCardSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, ref: "products", require: true },
  title: { type: String, require: true },
  img: { type: String, require: true },
  brand: { type: String, require: true },
  memory: { type: Number, require: true },
  ray: { type: Boolean, require: true },
  price: { type: Number, require: true },
  rating: { type: Number, require: true },
  relevance: { type: Number, require: true },
  amount: { type: Number },
});

const GpuCard = mongoose.model("gpu-cards", GpuCardSchema);

export default GpuCard;
