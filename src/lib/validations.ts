import * as z from "zod";

export const WishSchema = z.object({
  sender: z.string().min(1).max(255),
  recipient: z.string().min(1).max(255),
  wish: z.string().min(1).max(255),
  type: z.enum(["private", "public"]),
});
