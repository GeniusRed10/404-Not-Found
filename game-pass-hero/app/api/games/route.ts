import { NextResponse } from "next/server"
import { getGames } from "@/lib/utils"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  const games = await getGames(category || undefined)

  return NextResponse.json({ games })
}

