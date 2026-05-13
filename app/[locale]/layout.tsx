import type {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: "ko" | "en"}>;
};

export async function generateMetadata({params}: Omit<Props, "children">): Promise<Metadata> {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: "meta"});

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: [{url: "/favicon.png"}],
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages({locale});

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
