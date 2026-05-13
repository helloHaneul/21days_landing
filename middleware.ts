import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  localePrefix: "as-needed",
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|download|terms|privacy|auth/callback|og).*)",
  ],
};
