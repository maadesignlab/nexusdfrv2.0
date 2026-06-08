import { sql } from "@/lib/db";

export async function getPublications() {
  return await sql`
    SELECT
      p.*,
      c.name AS category_name,
      a.name AS author_name
    FROM publications p
    LEFT JOIN categories c
      ON p.category_id = c.id
    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id
    LEFT JOIN authors a
      ON pa.author_id = a.id
    ORDER BY p.title;
  `;
}

export async function getPublicationById(id) {
  const result = await sql`
    SELECT
      p.*,
      c.name AS category_name,
      a.name AS author_name
    FROM publications p
    LEFT JOIN categories c
      ON p.category_id = c.id
    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id
    LEFT JOIN authors a
      ON pa.author_id = a.id
    WHERE p.id = ${id}
  `;

  return result[0];
}

export async function getTop10Books() {
  return await sql`
    SELECT
      p.*,
      c.name AS category_name,
      a.name AS author_name
    FROM publications p
    LEFT JOIN categories c
      ON p.category_id = c.id
    LEFT JOIN publication_authors pa
      ON p.id = pa.publication_id
    LEFT JOIN authors a
      ON pa.author_id = a.id
    ORDER BY p.sold DESC
    LIMIT 10;
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