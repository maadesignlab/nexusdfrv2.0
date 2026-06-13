import { formatDate, formatTime } from "@/lib/intl";

export default function ReservationItem({
  reservation, t, locale,
}) {
  const statusStyles = {
    ACTIVE:
      "bg-green-100 text-green-700",

    COMPLETED:
      "bg-blue-100 text-blue-700",

    CANCELLED:
      "bg-red-100 text-red-700",
  };
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

        <span
          className={`
            px-3 py-1
            rounded-full
            text-xs
            font-semibold
            ${
              statusStyles[
                reservation.status
              ] ||
              "bg-slate-100 text-slate-700"
            }
          `}
        >
          {
            t.reservations.status?.[
              reservation.status
            ] ??
            reservation.status
          }
        </span>
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-sm text-slate-600">
          {t.reservations.date}
        </p>

        <p className="font-medium">
          {formatDate(
            reservation.start_at,
            locale
          )}
        </p>

        <p className="text-sm text-slate-600 mt-2">
          {t.reservations.schedule}
        </p>

        <p className="font-medium">
          {formatTime(
            reservation.start_at,
            locale
          )}
          {" - "}
          {formatTime(
            reservation.end_at,
            locale
          )}
        </p>
      </div>
    </div>
  );
}