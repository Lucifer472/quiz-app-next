import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  const { nextUrl } = request;

  const cookie = request.cookies.get("isFirst");

  if (cookie && nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", nextUrl));
  }

  if (!cookie && nextUrl.pathname === "/home") {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  return null;
};

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
