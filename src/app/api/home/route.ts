// API for getting Wish data from MongoDB

import Wish from "@/database/wish.model";
import { connect } from "@/lib/db";

export async function GET() {
  try {
    connect();

    const wish = await Wish.find({ type: "public" });

    return Response.json(wish);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
