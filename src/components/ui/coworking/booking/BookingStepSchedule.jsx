

const CLOSE_HOUR = 20;

const HORARIOS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

export default function BookingStepSchedule({
  bookingData,
  ocupados,
  onChange,
  onCancel,
  onNext,
  t,
}) {
  
  const startHour = bookingData.hora
    ? Number(bookingData.hora.split(":")[0])
    : null;

  const maxDuration = startHour
    ? Math.min(8, CLOSE_HOUR - startHour)
    : 8;

  const durationValid =
    startHour !== null &&
    startHour + bookingData.duracion <= CLOSE_HOUR;

  const handleHourSelect = (hour) => {
    const selectedHour = Number(hour.split(":")[0]);

    const allowedDuration = Math.min(
      8,
      CLOSE_HOUR - selectedHour
    );

    onChange("hora", hour);

    if (bookingData.duracion > allowedDuration) {
      onChange("duracion", allowedDuration);
    }
  };

  return (
    <div className="space-y-6">
      {/* FECHA */}
      <div className="space-y-2">
        <label className="text-sm font-semibold">
          {t.booking.schedule.date}
        </label>
        <input
          type="date"
          value={bookingData.fecha}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) =>
            onChange("fecha", e.target.value)
          }
          className="
            w-full
            border border-slate-300
            rounded-xl
            px-4 py-3
            bg-white
          "
        />
      </div>

      {/* HORA */}
      <div className="space-y-3">
        <label className="text-sm font-semibold">
          {t.booking.schedule.startTime}
        </label>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
          {HORARIOS.map((h) => {
            const ocupado =
              ocupados.includes(h);

            const active =
              bookingData.hora === h;

            return (
              <button
                key={h}
                type="button"
                disabled={ocupado}
                onClick={() =>
                  handleHourSelect(h)
                }
                className={`
                  py-3
                  rounded-xl
                  text-sm
                  font-bold
                  border
                  transition-all

                  ${
                    active
                      ? `
                        bg-[#0f172a]
                        text-white
                        border-transparent
                      `
                      : ocupado
                      ? `
                        bg-slate-200
                        text-slate-400
                        border-slate-200
                        cursor-not-allowed
                      `
                      : `
                        bg-white
                        border-slate-300
                        hover:border-slate-900
                      `
                  }
                `}
              >
                {h}
              </button>
            );
          })}
        </div>
      </div>

      {/* DURACIÓN */}
      <div className="space-y-3">
        <label className="text-sm font-semibold">
          {t.booking.schedule.duration}
        </label>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() =>
              onChange(
                "duracion",
                Math.max(
                  1,
                  bookingData.duracion - 1
                )
              )
            }
            className="
              w-12 h-12
              rounded-xl
              border border-slate-300
              text-xl font-bold
            "
          >
            −
          </button>

          <div
            className="
              flex-1
              text-center
              border border-slate-300
              rounded-xl
              py-3
              bg-white
            "
          >
            <span className="text-lg font-bold">
              {bookingData.duracion}
            </span>

            <span className="ml-2 text-slate-500">
              {bookingData.duracion > 1
                ? t.booking.schedule.hours
                : t.booking.schedule.hour}
            </span>
          </div>

          <button
            type="button"
            disabled={
              bookingData.duracion >=
              maxDuration
            }
            onClick={() =>
              onChange(
                "duracion",
                Math.min(
                  maxDuration,
                  bookingData.duracion + 1
                )
              )
            }
            className="
              w-12 h-12
              rounded-xl
              border border-slate-300
              text-xl font-bold
              disabled:opacity-40
              disabled:cursor-not-allowed
            "
          >
            +
          </button>
        </div>

        <p className="text-xs text-slate-500">
          {t.booking.schedule.durationHint}
        </p>

        {bookingData.hora &&
          maxDuration < 8 && (
            <div
              className="
                rounded-xl
                border border-amber-200
                bg-amber-50
                px-4 py-3
                text-sm text-amber-700
              "
            >
              {t.booking.schedule.maxDurationMessage
              .replace(
                "{hours}",
                maxDuration
              )}
            </div>
          )}

        {!durationValid &&
          bookingData.hora && (
            <div
              className="
                rounded-xl
                border border-red-200
                bg-red-50
                px-4 py-3
                text-sm text-red-600
              "
            >
              {t.booking.schedule.scheduleExceeded}
            </div>
          )}
      </div>

      {/* ACCIONES */}
      <div className="flex gap-4">
        <button
          onClick={onCancel}
          className="
            flex-1
            border border-slate-300
            py-3.5
            rounded-2xl
          "
        >
          {t.booking.schedule.cancel}
        </button>

        <button
          disabled={
            !bookingData.hora ||
            !durationValid
          }
          onClick={onNext}
          className="
            flex-1
            bg-[#0f172a]
            text-white
            py-3.5
            rounded-2xl
            disabled:opacity-50
          "
        >
          {t.booking.schedule.next}
        </button>
      </div>
    </div>
  );
}