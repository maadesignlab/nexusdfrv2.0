import {
  locales,
} from "@/lib/i18n";

import {
  notFound,
} from "next/navigation";

export function generateStaticParams() {
  return locales.map(
    (locale) => ({
      locale,
    })
  );
}

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale } =
    await params;

  if (
    !locales.includes(locale)
  ) {
    notFound();
  }

  return children;
}