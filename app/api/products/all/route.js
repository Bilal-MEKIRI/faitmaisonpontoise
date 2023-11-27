import { connectToDB } from "../../../../utils/connectToDataBase.js";
import Product from "../../../../models/products.js";

export const GET = async () => {
  try {
    await connectToDB();

    const products = await Product.find();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch products data", { status: 500 });
  }
};
