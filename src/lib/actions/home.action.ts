"use server";

import Wish from "@/database/wish.model";
import { connect } from "../db";

export async function getHome() {
  try {
    connect();

    const wish = await Wish.find({ recipient: "Whauzan", sender: "Whauzan" });

    return wish;
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
