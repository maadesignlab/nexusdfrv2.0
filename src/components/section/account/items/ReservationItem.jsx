export default function ReservationItem({
  reservation,
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
            {
              reservation.space_location
            }
          </p>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          Activa
        </span>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm text-slate-600">
          Fecha
        </p>

        <p className="font-medium">
          {start.toLocaleDateString(
            "es-CO"
          )}
        </p>

        <p className="text-sm text-slate-600 mt-2">
          Horario
        </p>

        <p className="font-medium">
          {start.toLocaleTimeString(
            "es-CO",
            {
              hour: "2-digit",
              minute: "2-digit",
            }
          )}
          {" - "}
          {end.toLocaleTimeString(
            "es-CO",
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