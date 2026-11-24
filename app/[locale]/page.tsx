import type {Metadata, ResolvingMetadata} from "next";
import {getTranslations} from "next-intl/server";
import LandingClient from "./landing-client";
import {getLocaleAlternates} from "@/lib/site";

type Props = {
  params: Promise<{locale: "ko" | "en"}>;
};

export async function generateMetadata({params}: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const {locale} = await params;
  const [t, inherited] = await Promise.all([
    getTranslations({locale, namespace: "homeMeta"}),
    parent,
  ]);
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    openGraph: {...inherited.openGraph, title, description},
    twitter: {...inherited.twitter, title, description},
    alternates: getLocaleAlternates(`/${locale}`),
  };
}

export default function Page() {
  return <LandingClient />;
}
