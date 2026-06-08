import { sql } from "@/lib/db";

export async function getUserByAuth0Sub(
  auth0Sub
) {
  const result = await sql`
    SELECT *
    FROM users
    WHERE auth0_sub = ${auth0Sub}
    LIMIT 1
  `;

  return result[0] ?? null;
}