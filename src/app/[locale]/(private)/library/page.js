import { storeService } from "@/services/storeService";
import LibraryClient from "@/components/section/library/LibraryClient";
import { getTranslations } from "@/lib/translations";

export default async function LibraryPage({
  params,
  searchParams,
}) {
  const { locale } = await params;

  const query =
    await searchParams;

  const [
    libros,
    categories,
    years,
  ] = await Promise.all([
    storeService.getLibros(query),
    storeService.getCategories(),
    storeService.getPublicationYears(),
  ]);

  const translations =
    await getTranslations(locale);

  return (
    <LibraryClient
      libros={libros}
      categories={categories}
      years={years}
      t={translations.library}
      locale={locale}
    />
  );
}