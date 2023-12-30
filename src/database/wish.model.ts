import { Document, Schema, model, models } from "mongoose";

export interface IWish extends Document {
  sender: string;
  recipient: string;
  wish: string;
  wishForAuthor: string;
}

const wishSchema = new Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  wish: { type: String, required: true },
  wishForAuthor: { type: String },
});

const Wish = model<IWish>("Wish", wishSchema) || models.Wish;

export default Wish;
