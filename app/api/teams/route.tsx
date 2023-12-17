import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const teams = await fetch(
    `https://655c87bc25b76d9884fd79b6.mockapi.io/Team/`
  ).then((res) => res.json());
  return NextResponse.json(teams);
}