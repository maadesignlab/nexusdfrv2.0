export default function BookingStepReview({
  space,
  bookingData,
  onBack,
  onConfirm,
}) {
  return (
    <div className="space-y-6 mt-6">

      <div className="border border-slate-400 rounded-xl p-5 space-y-3">
        <p><strong>Espacio:</strong> {space.nombre}</p>
        <p><strong>Fecha:</strong> {bookingData.fecha}</p>
        <p><strong>Hora:</strong> {bookingData.hora}</p>
        <p>
            <strong>Duración:</strong>{" "}
            {bookingData.duracion} hora
            {bookingData.duracion > 1 ? "s" : ""}
        </p>
        <p><strong>Celular:</strong> {bookingData.celular}</p>
        <p><strong>Notas:</strong> {bookingData.notas || "—"}</p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 border border-slate-400 py-3.5 rounded-2xl"
        >
          Atrás
        </button>

        <button
          onClick={onConfirm}
          className="flex-1 bg-[#0f172a] text-white py-3.5 rounded-2xl"
        >
          Confirmar Reserva
        </button>
      </div>

    </div>
  );
}