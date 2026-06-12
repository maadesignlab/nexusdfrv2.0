export default function BookingStepReview({
  space,
  bookingData,
  onBack,
  onConfirm,
  t,
}) {
  return (
    <div className="space-y-6 mt-6">

      <div className="border border-slate-400 rounded-xl p-5 space-y-3">
        <p>
          <strong>
            {t.booking.review.space}:
          </strong>{" "}
          {space.nombre}
        </p>
        <p>
          <strong>
            {t.booking.review.date}:
          </strong>{" "}
          {bookingData.fecha}
        </p>
        <p>
          <strong>
            {t.booking.review.time}:
          </strong>{" "}
          {bookingData.hora}
        </p>
        <p>
          <strong>
            {t.booking.review.duration}:
          </strong>{" "}
          {bookingData.duracion}{" "}
          {bookingData.duracion > 1
            ? t.booking.review.hours
            : t.booking.review.hour}
        </p>
        <p>
          <strong>
            {t.booking.review.phone}:
          </strong>{" "}
          {bookingData.celular}
        </p>
        <p>
          <strong>
            {t.booking.review.notes}:
          </strong>{" "}
          {bookingData.notas ||
            t.booking.review.emptyNotes}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 border border-slate-400 py-3.5 rounded-2xl"
        >
          {t.booking.review.back}
        </button>

        <button
          onClick={onConfirm}
          className="flex-1 bg-[#0f172a] text-white py-3.5 rounded-2xl"
        >
          {t.booking.review.confirm}
        </button>
      </div>

    </div>
  );
}