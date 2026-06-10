import { sql } from "@/lib/db";

export async function getPublications(
  filters = {},
  locale = "es"
) {
  const { category, year } = filters;

  if (category && year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        c.slug = ${category}
        AND p.published_year = ${Number(
          year
        )}

      ORDER BY p.title
    `;
  }

  if (category) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE c.slug = ${category}

      ORDER BY p.title
    `;
  }

  if (year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE p.published_year = ${Number(
        year
      )}

      ORDER BY p.title
    `;
  }

  return await sql`
    SELECT
      p.*,

      pt.title AS translated_title,
      pt.description AS translated_description,

      c.name AS category_name,
      c.slug AS category_slug,

      a.name AS author_name

    FROM publications p

    LEFT JOIN publication_translations pt
      ON p.id = pt.publication_id
      AND pt.locale = ${locale}

    LEFT JOIN categories c
      ON p.category_id = c.id

    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id

    LEFT JOIN authors a
      ON pa.author_id = a.id

    ORDER BY p.title
  `;
}

export async function getPublicationById(
  id,
  locale = "es"
) {
  console.log("LOCALE:", locale);

  const result = await sql`
    SELECT
      p.*,

      pt.title AS translated_title,
      pt.description AS translated_description,

      c.name AS category_name,
      c.slug AS category_slug,

      a.name AS author_name

    FROM publications p

    LEFT JOIN publication_translations pt
      ON p.id = pt.publication_id
      AND pt.locale = ${locale}

    LEFT JOIN categories c
      ON p.category_id = c.id

    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id

    LEFT JOIN authors a
      ON pa.author_id = a.id

    WHERE p.id = ${id}
  `;

  console.log(
    "QUERY RESULT:",
    result[0]
  );

  return result[0];
}

export async function getTop10Books(
  filters = {},
  locale = "es"
) {
  const { category, year } = filters;

  if (category && year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.id IN (
          SELECT id
          FROM publications
          ORDER BY sold DESC
          LIMIT 10
        )
        AND c.slug = ${category}
        AND p.published_year = ${Number(year)}

      ORDER BY p.sold DESC
    `;
  }

  if (category) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.id IN (
          SELECT id
          FROM publications
          ORDER BY sold DESC
          LIMIT 10
        )
        AND c.slug = ${category}

      ORDER BY p.sold DESC
    `;
  }

  if (year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.id IN (
          SELECT id
          FROM publications
          ORDER BY sold DESC
          LIMIT 10
        )
        AND p.published_year = ${Number(year)}

      ORDER BY p.sold DESC
    `;
  }

  return await sql`
    SELECT
      p.*,

      pt.title AS translated_title,
      pt.description AS translated_description,

      c.name AS category_name,
      c.slug AS category_slug,

      a.name AS author_name

    FROM publications p

    LEFT JOIN publication_translations pt
      ON p.id = pt.publication_id
      AND pt.locale = ${locale}

    LEFT JOIN categories c
      ON p.category_id = c.id

    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id

    LEFT JOIN authors a
      ON pa.author_id = a.id

    WHERE
      p.id IN (
        SELECT id
        FROM publications
        ORDER BY sold DESC
        LIMIT 10
      )

    ORDER BY p.sold DESC
  `;
}

export async function getFeaturedBooks(
  filters = {},
  locale = "es"
) {
  const { category, year } =
    filters;

  if (category && year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.featured = true
        AND c.slug = ${category}
        AND p.published_year = ${Number(
          year
        )}

      ORDER BY p.title
    `;
  }

  if (category) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.featured = true
        AND c.slug = ${category}

      ORDER BY p.title
    `;
  }

  if (year) {
    return await sql`
      SELECT
        p.*,

        pt.title AS translated_title,
        pt.description AS translated_description,

        c.name AS category_name,
        c.slug AS category_slug,

        a.name AS author_name

      FROM publications p

      LEFT JOIN publication_translations pt
        ON p.id = pt.publication_id
        AND pt.locale = ${locale}

      LEFT JOIN categories c
        ON p.category_id = c.id

      LEFT JOIN publication_authors pa
        ON p.id = pa.publication_id

      LEFT JOIN authors a
        ON pa.author_id = a.id

      WHERE
        p.featured = true
        AND p.published_year = ${Number(
          year
        )}

      ORDER BY p.title
    `;
  }

  return await sql`
    SELECT
      p.*,

      pt.title AS translated_title,
      pt.description AS translated_description,

      c.name AS category_name,
      c.slug AS category_slug,

      a.name AS author_name

    FROM publications p

    LEFT JOIN publication_translations pt
      ON p.id = pt.publication_id
      AND pt.locale = ${locale}

    LEFT JOIN categories c
      ON p.category_id = c.id

    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id

    LEFT JOIN authors a
      ON pa.author_id = a.id

    WHERE p.featured = true

    ORDER BY p.title
  `;
}

export async function getTop10Ids() {
  const result = await sql`
    SELECT id
    FROM publications
    ORDER BY sold DESC
    LIMIT 10
  `;

  return result.map((row) => row.id);
}

export async function getPublicationYears() {
  return await sql`
    SELECT DISTINCT published_year
    FROM publications
    WHERE published_year IS NOT NULL
    ORDER BY published_year DESC
  `;
}