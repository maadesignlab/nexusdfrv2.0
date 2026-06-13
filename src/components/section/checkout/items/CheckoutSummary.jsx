import CartItemMini from "./CartItemMini";

export default function CheckoutSummary({
  cart,
  total,
  t,
  locale
}) {
  return (
    <aside
      className="
        sticky top-24
        bg-white
        border border-slate-200
        rounded-3xl
        p-6
        shadow-sm
      "
    >
      <h2 className="font-bold text-lg mb-6">
        {t.summary.title}
      </h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <CartItemMini
            key={item.bookId}
            item={item}
            locale={locale}
          />
        ))}
      </div>

      <div className="border-t mt-6 pt-6">
        <div className="flex justify-between text-sm">
          <span>
            {t.summary.subtotal}
          </span>

          <span>
            ${total.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-sm mt-2">
          <span>
            {t.summary.service}
          </span>

          <span>$0</span>
        </div>

        <div className="flex justify-between font-bold text-lg mt-4">
          <span>
            {t.summary.total}
          </span>

          <span>
            ${total.toLocaleString()}
          </span>
        </div>
      </div>

      <div
        className="
          mt-6
          rounded-xl
          bg-green-50
          border border-green-200
          px-4 py-3
          text-sm
          text-green-700
        "
      >
        🔒 {t.summary.protected}
      </div>
    </aside>
  );
}