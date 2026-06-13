import { formatDate, formatTime } from "@/lib/intl";

export default function BookingStepSuccess({
  space,
  bookingData,
  onFinish,
  t,
  locale,
}) {
  return (
    <div className="flex flex-col items-center text-center py-6 space-y-4">

      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        ✓
      </div>

      <h2 className="text-[28px] font-bold">
        {t.booking.success.title}
      </h2>

      <p className="text-slate-600">
        {t.booking.success.message
          .replace("{space}", space.nombre)
          .replace(
            "{date}",
            formatDate(
              bookingData.fecha,
              locale
            )
          )
          .replace(
            "{time}",
            formatTime(
              `${bookingData.fecha}T${bookingData.hora}`,
              locale
            )
          )}
      </p>

      <button
        onClick={onFinish}
        className="bg-[#0f172a] text-white px-12 py-3.5 rounded-2xl"
      >
        {t.booking.success.backHome}
      </button>

    </div>
  );
}