import CheckoutField from "./CheckoutField";
import CheckoutPaymentCard from "./CheckoutPaymentCard";

export default function CheckoutForm({
  form,
  errors,
  loading,
  total,
  t,
  onChange,
  onSubmit,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-8"
    >
      <CheckoutPaymentCard
        nombre={form.nombre}
        tarjeta={form.tarjeta}
        t={t}
      />

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

        <h2 className="text-lg font-bold mb-6">
          {t.form.customerInfo}
        </h2>

        <div className="space-y-5">
          <CheckoutField
            label={t.form.fullName}
            name="nombre"
            value={form.nombre}
            error={errors.nombre}
            onChange={onChange}
            placeholder={t.form.fullName}
          />

          <CheckoutField
            label={t.form.email}
            name="email"
            type="email"
            value={form.email}
            error={errors.email}
            onChange={onChange}
            placeholder={t.form.email}
          />
        </div>

      </div>

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">

        <h2 className="text-lg font-bold mb-6">
          {t.form.paymentInfo}
        </h2>

        <CheckoutField
          label={t.form.cardNumber}
          name="tarjeta"
          value={form.tarjeta}
          error={errors.tarjeta}
          onChange={onChange}
          placeholder="1234 5678 9012 3456"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-2xl
          bg-slate-950
          text-white
          py-4
          font-semibold
          transition
          hover:opacity-90
          disabled:opacity-50
        "
      >
        {loading
          ? t.form.processing
          : `${t.form.pay} $${total.toLocaleString()}`}
      </button>
    </form>
  );
}