export const revalidate = 300;

import { getTranslations } from "@/lib/translations";
import { storeService } from "@/services/storeService";

import CatalogClient from "@/components/section/catalog/CatalogClient";

export default async function CatalogPage({
  params,
}) {
  const { locale } = await params;

  const translations =
    await getTranslations(locale);

  const data =
    await storeService.getCatalogLanding(
      locale
    );

  return (
    <CatalogClient
      data={data}
      t={translations.catalog}
      card={translations.library.card}
      categories={translations.library.categories}
      locale={locale}
    />
  );
}