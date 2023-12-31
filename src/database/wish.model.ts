import { Document, Model, Schema, model, models } from "mongoose";

export interface IWish extends Document {
  sender: string;
  recipient: string;
  wish: string;
  type: "private" | "public";
}

const wishSchema = new Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  wish: { type: String, required: true },
  type: { type: String, required: true },
});

const Wish: Model<IWish> = models.Wish
  ? models.Wish
  : model<IWish>("Wish", wishSchema);

export default Wish;
