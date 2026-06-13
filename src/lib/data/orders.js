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

export async function createOrder({
  userId,
  total,
}) {
  const [order] = await sql`
    INSERT INTO orders (
      user_id,
      total,
      status
    )
    VALUES (
      ${userId},
      ${total},
      'PENDING'
    )
    RETURNING *
  `;

  return order;
}

export async function createOrderItems(
  orderId,
  cart
) {
  for (const item of cart) {
    const unitPrice =
      Number(item.precio || 0);

    const quantity =
      Number(item.cantidad || 0);

    const subtotal =
      unitPrice * quantity;

    await sql`
      INSERT INTO order_items (
        order_id,
        publication_id,
        quantity,
        unit_price,
        subtotal
      )
      VALUES (
        ${orderId},
        ${item.bookId},
        ${quantity},
        ${unitPrice},
        ${subtotal}
      )
    `;
  }
}