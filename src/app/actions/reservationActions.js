"use server";

import {
  createReservation,
  hasReservationConflict,
  getReservationsByUser,
} from "@/lib/data/reservations";

export async function createReservationAction({
  userId,
  coworkingSpaceId,
  startAt,
  endAt,
}) {
  const conflict =
    await hasReservationConflict({
      coworkingSpaceId,
      startAt,
      endAt,
    });

  if (conflict) {
    throw new Error(
      "Ya existe una reserva para ese horario."
    );
  }

  return createReservation({
    userId,
    coworkingSpaceId,
    startAt,
    endAt,
  });
}

export async function getUserReservationsAction(
  userId
) {
  return getReservationsByUser(userId);
}