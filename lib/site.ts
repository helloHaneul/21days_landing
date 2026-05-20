export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_ENV === "production"
    ? "https://www.21days-routine.com"
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const SITE_URL_OBJECT = new URL(SITE_URL);

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const NAVER_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "";

export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export function getLocaleAlternates(pathname: string) {
  return {
    canonical: pathname,
    languages: {
      ko: pathname.replace(/^\/en/, "/ko"),
      en: pathname.replace(/^\/ko/, "/en"),
      "x-default": pathname.replace(/^\/en/, "/ko"),
    },
  };
}
