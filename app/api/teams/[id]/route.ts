import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const teams = await fetch(
    `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/${id}`
  ).then((res) => res.json());
  return NextResponse.json(teams);
}
