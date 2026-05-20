"use client";

import Script from "next/script";

declare global {
  interface Window {
    dataLayer?: unknown[];
    wcs?: {
      do?: () => void;
    };
    wcs_add?: {
      wa?: string;
    };
    wcs_do?: () => void;
  }
}

type Props = {
  googleAnalyticsId: string;
  naverAnalyticsId: string;
};

export default function AnalyticsScripts({
  googleAnalyticsId,
  naverAnalyticsId,
}: Props) {
  return (
    <>
      {googleAnalyticsId ? (
        <>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `}
          </Script>
        </>
      ) : null}
      {naverAnalyticsId ? (
        <Script
          id="naver-analytics"
          src="https://wcs.pstatic.net/wcslog.js"
          strategy="afterInteractive"
          onLoad={() => {
            window.wcs_add = window.wcs_add || {};
            window.wcs_add.wa = naverAnalyticsId;

            if (window.wcs && window.wcs_do) {
              window.wcs_do();
            }
          }}
        />
      ) : null}
    </>
  );
}
