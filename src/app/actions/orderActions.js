"use server";

import { getOrdersByUser }
  from "@/lib/data/orders";

export async function
getUserOrdersAction(userId) {
  return getOrdersByUser(userId);
}