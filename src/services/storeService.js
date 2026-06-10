import {
  getPublications,
  getPublicationById,
  getTop10Books,
  getTop10Ids,
  getFeaturedBooks,
  getPublicationYears,
} from "@/lib/data/publications";

import { getCategories } from "@/lib/data/categories";

import { getCoworkingSpaces } from "@/lib/data/coworking";

function buildCategoryMap(categories = []) {
  return Object.fromEntries(
    categories.map((category) => [
      category.id,
      {
        name: category.name,
        slug: category.slug,
      },
    ])
  );
}

function mapPublication(
  book,
  categoryMap = {},
  top10Ids = []
) {
  return {
    ...book,

    titulo:
      book.translated_title ||
      book.title,
    imagen: book.cover_url,
    precio: Number(book.price),

    sinopsis:
      book.translated_description ||
      book.description,

    categoria: {
      name:
        book.category_name ||
        categoryMap[book.category_id]?.name ||
        "",

      slug:
        book.category_slug ||
        categoryMap[book.category_id]?.slug ||
        "",
    },

    autor: book.author_name || "",

    anio: book.published_year,

    destacado: book.featured,
    ventas: book.sold,

    masVendido:
      top10Ids.includes(book.id),
  };
}

function mapCoworkingSpace(space) {
  return {
    ...space,

    nombre: space.name,
    ubicacion: space.location,
    capacidad: space.capacity,
    tipo: space.space_type,

    ocupado: !space.available,
  };
}

async function getCategoryMap() {
  const categories =
    await getCategories();

  return {
    categories,
    categoryMap:
      buildCategoryMap(categories),
  };
}

export const storeService = {
  async getInitialData() {
    const [
      libros,
      top10,
      coworking,
      top10Ids,
      { categoryMap },
    ] = await Promise.all([
      getPublications(),
      getTop10Books(),
      getCoworkingSpaces(),
      getTop10Ids(),
      getCategoryMap(),
    ]);

    return {
      libros: libros.map((book) =>
        mapPublication(
          book,
          categoryMap,
          top10Ids
        )
      ),

      top10: top10.map((book) =>
        mapPublication(
          book,
          categoryMap,
          top10Ids
        )
      ),

      coworking:
        coworking.map(
          mapCoworkingSpace
        ),

      purchases: [],
    };
  },

  async getLibros(
    filters = {},
    locale = "es"
  ) {
    const [
      books,
      top10Ids,
      { categoryMap },
    ] = await Promise.all([
      filters.featured ===
      "bestSeller"
        ? getTop10Books(
            filters,
            locale
          )
        : filters.featured ===
            "featured"
          ? getFeaturedBooks(
              filters,
              locale
            )
          : getPublications(
              filters,
              locale
            ),

      getTop10Ids(),

      getCategoryMap(),
    ]);

    return books.map((book) =>
      mapPublication(
        book,
        categoryMap,
        top10Ids
      )
    );
  },

  async getLibroById(
    id,
    locale = "es"
  ) {
    const [
      book,
      { categoryMap },
    ] = await Promise.all([
      getPublicationById(
        id,
        locale
      ),
      getCategoryMap(),
    ]);

    if (!book) {
      return null;
    }

    return mapPublication(
      book,
      categoryMap
    );
  },

  async getPurchases() {
    return [];
  },

  async getCategories() {
    return await getCategories();
  },

  async getPublicationYears() {
    const years =
      await getPublicationYears();

    return years.map(
      (row) =>
        String(row.published_year)
    );
  },
};