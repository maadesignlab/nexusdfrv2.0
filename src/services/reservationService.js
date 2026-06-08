import {
  createReservation,
  hasReservationConflict,
} from "@/lib/data/reservations";

export const reservationService = {
  async create(data) {
    return createReservation(data);
  },

  async hasConflict(data) {
    return hasReservationConflict(data);
  },
};