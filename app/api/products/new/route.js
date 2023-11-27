import { connectToDB } from "../../../../utils/connectToDataBase.js";
import Product from "../../../../models/products.js";

export const POST = async (req) => {
  const { type, name, description, price, image } = await req.json();

  try {
    await connectToDB();

    const newProduct = new Product({ type, name, description, price, image });

    await newProduct.save();

    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new Response("Failed to create new product", { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();

    const products = await Product.find();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch products data", { status: 500 });
  }
};
