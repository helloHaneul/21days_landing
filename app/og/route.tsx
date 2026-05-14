import {ImageResponse} from "next/og";

export const runtime = "edge";

function getLocale(request: Request) {
  const url = new URL(request.url);
  const locale = (url.searchParams.get("locale") || "ko").toLowerCase();
  return locale.startsWith("en") ? "en" : "ko";
}

export function GET(request: Request) {
  const locale = getLocale(request);

  const title =
    locale === "en" ? "21days: Grow together" : "21days: 아이 습관을 함께 키우는 앱";
  const subtitle =
    locale === "en"
      ? "Warm encouragement for daily routines"
      : "따뜻한 칭찬으로 만드는 21일의 변화";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, rgba(255,237,213,1) 0%, rgba(255,255,255,1) 45%, rgba(255,247,237,1) 100%)",
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial',
        }}
      >
        <div style={{display: "flex", gap: "18px", alignItems: "center"}}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "rgba(34,197,94,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20V12"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
              <path
                d="M12 12c-4.2 0-7-2.2-8-6.5 4.8-.6 8 1.4 9 4.7"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 12c4.2 0 7-2.2 8-6.5-4.8-.6-8 1.4-9 4.7"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "#f97316",
              letterSpacing: "-0.04em",
            }}
          >
            21days
          </div>
        </div>

        <div style={{maxWidth: 980, display: "flex", flexDirection: "column"}}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.06,
              fontWeight: 900,
              color: "#111827",
              letterSpacing: "-0.05em",
              marginBottom: 18,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              fontWeight: 600,
              color: "#374151",
              letterSpacing: "-0.02em",
            }}
          >
            {subtitle}
          </div>
        </div>

        <div style={{display: "flex", alignItems: "center", gap: 10}}>
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              background: "rgba(249,115,22,0.12)",
              color: "#c2410c",
              fontWeight: 800,
              fontSize: 18,
            }}
          >
            {locale === "en" ? "Routines · Timer · Praise" : "루틴 · 타이머 · 칭찬"}
          </div>
          <div style={{color: "#9ca3af", fontSize: 18, fontWeight: 600}}>
            parenting-now
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
