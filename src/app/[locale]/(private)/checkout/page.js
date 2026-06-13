import { getTranslations } from "@/lib/translations";

import CheckoutClient from "@/components/section/checkout/CheckoutClient";

export default async function CheckoutPage({
  params,
}) {
  const { locale } = await params;

  const translations =
    getTranslations(locale);

  return (
    <CheckoutClient
      locale={locale}
      t={translations.checkout}
    />
  );
}