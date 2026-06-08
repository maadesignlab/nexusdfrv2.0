export default function BookingStepSuccess({
  space,
  bookingData,
  onFinish,
}) {
  return (
    <div className="flex flex-col items-center text-center py-6 space-y-4">

      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        ✓
      </div>

      <h2 className="text-[28px] font-bold">
        ¡Reserva Confirmada!
      </h2>

      <p className="text-slate-600">
        Tu reserva para {space.nombre}
        el {bookingData.fecha} a las
        {" "}
        {bookingData.hora}
        {" "}
        ha sido creada.
      </p>

      <button
        onClick={onFinish}
        className="bg-[#0f172a] text-white px-12 py-3.5 rounded-2xl"
      >
        Volver al inicio
      </button>

    </div>
  );
}