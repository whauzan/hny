export interface CreateWishParams {
  sender: string;
  recipient: string;
  wish: string;
  type: "private" | "public";
}
