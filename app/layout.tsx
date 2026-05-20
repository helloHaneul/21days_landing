import type {Metadata} from "next";
import Script from "next/script";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_SITE_VERIFICATION,
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
      {GOOGLE_ANALYTICS_ID ? (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `}
          </Script>
        </>
      ) : null}
      <body>{children}</body>
    </html>
  );
}
