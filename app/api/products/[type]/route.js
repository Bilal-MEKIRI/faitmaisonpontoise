import { connectToDB } from "../../../../utils/connectToDataBase.js";
import Product from "../../../../models/products.js";

export const GET = async (request, { params }) => {
  const type = params.type;

  console.log("Type: ", type);

  try {
    await connectToDB();

    const products = await Product.find({ type: type });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch products by type", { status: 500 });
  }
};
