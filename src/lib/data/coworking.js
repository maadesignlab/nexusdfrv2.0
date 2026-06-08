import { sql } from "@/lib/db";

export async function getCoworkingSpaces() {
  return await sql`
    SELECT *
    FROM coworking_spaces
    ORDER BY name;
  `;
}