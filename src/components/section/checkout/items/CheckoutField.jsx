export default function CheckoutField({
  label,
  error,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        {...props}
        className="
          w-full
          rounded-xl
          border border-slate-300
          bg-white
          px-4 py-3
          outline-none
          transition
          focus:border-slate-950
        "
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}