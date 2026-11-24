import createMiddleware from "next-intl/middleware";
import {NextResponse, type NextRequest} from "next/server";

const locales = ["ko", "en"];
const defaultLocale = "ko";

const handleLocalizedRoutes = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
});

const handleLocalizedFaq = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  alternateLinks: false,
});

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl;

  if (pathname === "/faq") {
    return NextResponse.next();
  }
  if (pathname === "/ko/faq" || pathname === "/en/faq") {
    return handleLocalizedFaq(request);
  }
  return handleLocalizedRoutes(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|download|terms|privacy|account-deletion|auth/callback|og).*)",
  ],
};
