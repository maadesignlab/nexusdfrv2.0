export default function CheckoutPaymentCard({
  nombre,
  tarjeta,
  t,
}) {
  return (
    <div
      className="
        rounded-3xl
        bg-slate-950
        text-white
        p-6
        shadow-xl
      "
    >
      <div className="flex justify-between items-center">
        <span className="text-sm opacity-70">
          {t.payment.securePayment}
        </span>

        <span className="font-bold">
          VISA
        </span>
      </div>

      <div className="mt-8 text-xl tracking-[0.25em]">
        {tarjeta ||
          "•••• •••• •••• ••••"}
      </div>

      <div className="mt-8">
        <p className="text-xs opacity-70">
          {t.payment.cardHolder}
        </p>

        <p className="font-medium">
          {nombre ||
            t.form.fullName}
        </p>
      </div>
    </div>
  );
}