import { NextResponse, type NextRequest } from "next/server";

/**
 * The Sanity Studio is mounted at /studio for local content editing only.
 * In any non-development environment the route is rewritten to a path that
 * does not exist, so visitors and crawlers get a normal 404 instead of the
 * Studio shell.
 */
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.rewrite(new URL("/studio-not-available", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio", "/studio/:path*"],
};
