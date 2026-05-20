import type {Metadata} from "next";
import AnalyticsScripts from "./analytics-scripts";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_SITE_VERIFICATION,
  NAVER_ANALYTICS_ID,
  NAVER_SITE_VERIFICATION,
  SITE_URL_OBJECT,
} from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: SITE_URL_OBJECT,
  icons: {
    icon: [{url: "/favicon.png"}],
  },
  verification: {
    google: GOOGLE_SITE_VERIFICATION || undefined,
    other: NAVER_SITE_VERIFICATION
      ? {
          "naver-site-verification": NAVER_SITE_VERIFICATION,
        }
      : undefined,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <AnalyticsScripts
        googleAnalyticsId={GOOGLE_ANALYTICS_ID}
        naverAnalyticsId={NAVER_ANALYTICS_ID}
      />
      <body>{children}</body>
    </html>
  );
}
