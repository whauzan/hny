"use server";

import Wish from "@/database/wish.model";
import { connect } from "../db";

export async function getHome() {
  try {
    connect();

    const wish = await Wish.find({ recipient: "Whauzan", sender: "Whauzan" });

    // Convert the Mongoose document to a plain JavaScript object
    const wishObject = wish.map((w) => {
      const obj = w.toObject();
      delete obj.__v; // remove the __v property
      return obj;
    });

    return wishObject;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
