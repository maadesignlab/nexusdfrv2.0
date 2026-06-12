export default function ReservationItem({
  reservation, t,
}) {
  const start = new Date(
    reservation.start_at
  );

  const end = new Date(
    reservation.end_at
  );

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">
            {reservation.space_name}
          </h3>

          <p className="text-sm text-slate-500">
            {t.locations?.[
                reservation.space_location
              ] ??
                reservation.space_location}
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          {
            t.reservations.status?.ACTIVE ??
            "Active"
          }
        </span>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm text-slate-600">
          {t.reservations.date}
        </p>

        <p className="font-medium">
          {start.toLocaleDateString()}
        </p>

        <p className="text-sm text-slate-600 mt-2">
          {t.reservations.schedule}
        </p>

        <p className="font-medium">
          {start.toLocaleTimeString([],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
          {" - "}
          {end.toLocaleTimeString([],
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
        </p>
      </div>
    </div>
  );
}