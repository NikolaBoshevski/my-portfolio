// eslint-disable-next-line
import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // redirects
  // if (pathname === "/about") {
  //   return NextResponse.redirect(new URL("/menu", request.url));
  // } else if (pathname === "/blog/12-05-2020/new-blog-post") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // rewrites
  // if (pathname === "/za-nas") {
  //   return NextResponse.rewrite(new URL("/about", request.url));
  // }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|images|favicon.ico).*)"],
};
