import { sql } from "@/lib/db";

export async function getOrdersByUser(
  userId
) {
  return sql`
    SELECT *
    FROM orders
    WHERE user_id = ${userId}
    ORDER BY created_at DESC
  `;
}