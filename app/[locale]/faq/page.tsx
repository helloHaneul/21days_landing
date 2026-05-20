import type {Metadata} from "next";
import FaqClient from "./faq-client";
import {getLocaleAlternates} from "@/lib/site";

type Props = {
  params: Promise<{locale: "ko" | "en"}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;

  return {
    alternates: getLocaleAlternates(`/${locale}/faq`),
  };
}

export default function Page() {
  return <FaqClient />;
}
