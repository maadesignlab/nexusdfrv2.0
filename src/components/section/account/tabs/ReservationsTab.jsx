import ReservationItem from "../items/ReservationItem";

export default function ReservationsTab({
  reservations,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        Mis Reservas
      </h2>

      {reservations?.length > 0 ? (
        reservations.map(
          (reservation) => (
            <ReservationItem
              key={reservation.id}
              reservation={reservation}
            />
          )
        )
      ) : (
        <div
          className="
            text-center
            py-12
            border border-dashed
            border-slate-300
            rounded-xl
          "
        >
          <p className="text-slate-500">
            No tienes reservas registradas.
          </p>
        </div>
      )}
    </div>
  );
}