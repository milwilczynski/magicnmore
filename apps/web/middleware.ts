import createMiddleware from "next-intl/middleware";
import { routing } from "@/lib/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request);

  if (intlResponse && intlResponse.status !== 200) {
    return intlResponse;
  }

  const response = intlResponse || NextResponse.next();

  //Do any other logic

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`,`/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
