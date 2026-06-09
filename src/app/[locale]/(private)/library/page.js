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

  const libros =
    await storeService.getLibros(query);

  const translations =
    await getTranslations(locale);

  return (
    <LibraryClient
      libros={libros}
      t={translations.library}
      locale={locale}
    />
  );
}