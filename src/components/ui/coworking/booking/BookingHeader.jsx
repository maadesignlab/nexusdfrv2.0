import Stepper from "@/components/ui/Stepper";

export default function BookingHeader({
  title,
  step,
  onClose,
}) {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-2xl font-bold opacity-70 hover:opacity-100 text-slate-800"
      >
        ×
      </button>

      <h2 className="text-[28px] font-bold text-slate-900 tracking-tight">
        {title}
      </h2>

      <Stepper step={step} clickable={false} />
    </>
  );
}