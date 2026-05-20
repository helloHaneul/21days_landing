import type {Metadata} from "next";
import LandingClient from "./landing-client";
import {getLocaleAlternates} from "@/lib/site";

type Props = {
  params: Promise<{locale: "ko" | "en"}>;
};

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {locale} = await params;

  return {
    alternates: getLocaleAlternates(`/${locale}`),
  };
}

export default function Page() {
  return <LandingClient />;
}
