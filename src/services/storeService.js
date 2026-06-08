import {
  getPublications,
  getPublicationById,
  getTop10Books,
  getTop10Ids,
} from "@/lib/data/publications";

import { getCategories } from "@/lib/data/categories";

import { getCoworkingSpaces } from "@/lib/data/coworking";

function mapPublication(
  book,
  categoryMap = {},
  top10Ids = []
) {
  return {
    ...book,

    titulo: book.title,
    imagen: book.cover_url,
    precio: Number(book.price),

    sinopsis: book.description,

    categoria: book.category_name || categoryMap[book.category_id] || "",
    autor: book.author_name || "",

    anio: book.published_year,

    destacado: book.featured,
    ventas: book.sold,

    masVendido: top10Ids.includes(book.id),
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

export const storeService = {
  async getInitialData() {
    const [libros, top10, coworking, categories, top10Ids] =
      await Promise.all([
        getPublications(),
        getTop10Books(),
        getCoworkingSpaces(),
        getCategories(),
        getTop10Ids(),
      ]);

    const categoryMap = Object.fromEntries(
      categories.map((c) => [c.id, c.name])
    );

    return {
      libros: libros.map((b) =>
        mapPublication(b, categoryMap, top10Ids)
      ),

      top10: top10.map((b) =>
        mapPublication(b, categoryMap, top10Ids)
      ),

      coworking: coworking.map(mapCoworkingSpace),

      purchases: [],
    };
  },

  async getLibros(filters = {}) {
    const [books, top10Ids] = await Promise.all([
      filters.top === "top10"
        ? getTop10Books()
        : getPublications(),
      getTop10Ids(),
    ]);

    return books.map((book) =>
      mapPublication(book, {}, top10Ids)
    );
  },

  async getLibroById(id) {
    const [book, categories] = await Promise.all([
      getPublicationById(id),
      getCategories(),
    ]);

    if (!book) return null;

    const categoryMap = Object.fromEntries(
      categories.map((c) => [c.id, c.name])
    );

    return mapPublication(book, categoryMap);
  },

  async getPurchases() {
    return [];
  },
};