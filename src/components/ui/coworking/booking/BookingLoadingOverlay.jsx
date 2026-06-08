export default function BookingLoadingOverlay() {
  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50 rounded-[20px]">
      <p className="text-white font-bold">
        Procesando reserva...
      </p>
    </div>
  );
}