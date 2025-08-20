import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/404", request.url));
}

export const config = {
  matcher: "/api/v1/:path*",
};
