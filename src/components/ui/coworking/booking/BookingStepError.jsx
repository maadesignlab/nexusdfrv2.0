export default function BookingStepError({
  message,
  onRetry,
  onClose,
  t,
}) {
  return (
    <div className="flex flex-col items-center text-center py-6 space-y-4">

      <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
        ✕
      </div>

      <h2 className="text-[28px] font-bold">
        {t.booking.error.title}
      </h2>

      <p className="text-slate-600 max-w-md">
        {message}
      </p>

      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="
            px-8 py-3.5
            rounded-2xl
            border border-slate-300
          "
        >
          {t.booking.error.retry}
        </button>

        <button
          onClick={onClose}
          className="
            px-8 py-3.5
            rounded-2xl
            bg-[#0f172a]
            text-white
          "
        >
          {t.booking.error.close}
        </button>
      </div>

    </div>
  );
}