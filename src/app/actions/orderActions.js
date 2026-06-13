"use server";

import { auth0 } from "@/lib/auth0";

import {
  getUserByAuth0Sub,
} from "@/lib/data/users";

import {
  getOrdersByUser,
  createOrder,
  createOrderItems,
} from "@/lib/data/orders";

export async function
getUserOrdersAction(userId) {
  return getOrdersByUser(userId);
}

export async function submitOrder(
  data
) {
  const session =
    await auth0.getSession();

  const dbUser =
    await getUserByAuth0Sub(
      session.user.sub
    );

  const order =
    await createOrder({
      userId: dbUser.id,
      total: data.total,
    });

  await createOrderItems(
    order.id,
    data.cart
  );

  return order;
}