"use server";

import { getReservationsByUser }
  from "@/lib/data/reservations";

export async function getUserReservationsAction(
  userId
) {
  return await getReservationsByUser(
    userId
  );
}