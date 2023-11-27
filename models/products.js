import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  type: String,
  name: String,
  description: String,
  price: String,
  image: String,
});

const Product = models.Product || model("Product", productSchema);

export default Product;
