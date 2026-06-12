export default function BookingStepContact({
  bookingData,
  onChange,
  onBack,
  onNext,
  t,
}) {
  return (
    <div className="space-y-6 mt-6">

      <input
        type="tel"
        placeholder={t.booking.contact.phonePlaceholder}
        value={bookingData.celular}
        onChange={(e) =>
          onChange("celular", e.target.value)
        }
        className="w-full border border-slate-400 rounded-xl px-4 py-3.5"
      />

      <textarea
        placeholder="Notas"
        value={bookingData.notas}
        onChange={(e) =>
          onChange("notas", e.target.value)
        }
        className="w-full border border-slate-400 rounded-xl px-4 py-3.5 min-h-[120px]"
      />

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 border border-slate-400 py-3.5 rounded-2xl"
        >
          {t.booking.contact.back}
        </button>

        <button
          disabled={!bookingData.celular}
          onClick={onNext}
          className="flex-1 bg-[#0f172a] text-white py-3.5 rounded-2xl"
        >
          {t.booking.contact.review}
        </button>
      </div>

    </div>
  );
}