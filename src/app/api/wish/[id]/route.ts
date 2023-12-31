import Wish from "@/database/wish.model";
import { connect } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    connect();
    const { id } = params;
    const wish = await Wish.findById(id);
    return Response.json(wish);
  } catch (err: any) {
    console.log(err);
    throw err;
  }
}
