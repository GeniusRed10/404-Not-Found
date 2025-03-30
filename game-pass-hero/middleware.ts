import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Redirect old paths to new paths
  if (request.nextUrl.pathname === "/gamepass") {
    return NextResponse.redirect(new URL("/pc-game-pass", request.url))
  }

  if (request.nextUrl.pathname === "/store") {
    return NextResponse.redirect(new URL("/games", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/gamepass", "/store"],
}

