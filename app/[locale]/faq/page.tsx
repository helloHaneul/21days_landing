import type {Metadata} from "next";
import FaqClient from "./faq-client";
import {FREE_LIMITS} from "@/lib/plans";

type Props = {
  params: Promise<{locale: "ko" | "en"}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;
  const isEnglish = locale === "en";

  return {
    title: isEnglish ? "21days FAQ | Free, Pro & Family Board" : "21days 자주 묻는 질문 | Free·Pro·Family Board",
    description: isEnglish
      ? `21days Free supports up to ${FREE_LIMITS.children} children and ${FREE_LIMITS.routinesPerChild} routines per child. Learn about Pro subscriptions, Family Board, and family sharing.`
      : `21days 무료 플랜은 자녀 최대 ${FREE_LIMITS.children}명, 자녀당 루틴 최대 ${FREE_LIMITS.routinesPerChild}개까지 지원합니다. Pro 구독, Family Board, 가족 공유 이용 방법을 확인하세요.`,
    alternates: {
      canonical: `/${locale}/faq`,
      languages: {
        ko: "/ko/faq",
        en: "/en/faq",
        "x-default": "/ko/faq",
      },
    },
  };
}

export default function Page() {
  return <FaqClient />;
}
