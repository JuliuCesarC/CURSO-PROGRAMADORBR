import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  imgList: { type: [String], required: true },
  textList: {
    type: {
      title: { type: String, required: true },
      subtitleList: { type: [String], required: true },
      price: { type: Number, required: true },
    },
    required: true,
  },
  description: {
    type: [
      {
        class: { type: String, required: true },
        infoTitle: String,
        infoSubtitle: String,
        text: String,
        imgUrl: String,
      },
    ],
    required: true,
  },
  info_table: {
    type: [
      {
        th: { type: [String], required: true },
        td: { type: [String], required: true },
      },
    ],
    required: true,
  },
  package_content: { type: [String], required: true },
  rating: { type: Number, required: true },
});

const Product = mongoose.model("products", ProductSchema);
export default Product;
