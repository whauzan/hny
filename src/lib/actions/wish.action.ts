"use server";

import Wish from "@/database/wish.model";
import { connect } from "../db";
import { CreateWishParams } from "./shared.types";

export async function createWish(params: CreateWishParams) {
  try {
    connect();

    const { recipient, sender, type, wish } = params;
    console.log(params);

    const newWish = await Wish.create({
      recipient,
      sender,
      type,
      wish,
    });

    return newWish;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
