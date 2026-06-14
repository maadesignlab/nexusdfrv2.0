import PricingClient from "@/components/section/pricing/PricingClient";
import { getTranslations } from "@/lib/translations";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function PricingPage({
  params,
}) {
  const { locale } = await params;

  const translations =
    getTranslations(locale);

  return (
    <PricingClient
      locale={locale}
      t={translations.pricing}
    />
  );
}