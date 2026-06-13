import { storeService } from "@/services/storeService";
import { getTranslations } from "@/lib/translations";

import BookDetailClient from "@/components/section/library/BookDetailClient";

export default async function BookDetailPage({
  params,
}) {
  const { locale, id } =
    await params;

  const [book, translations] =
    await Promise.all([
      storeService.getLibroById(
        id,
        locale
      ),
      getTranslations(locale),
    ]);

console.log(book);

  return (
    <BookDetailClient
      book={book}
      t={
        translations.library
          .detail
      }
      categories={
        translations.library
          .categories
      }
      locale={locale}
    />
  );
}