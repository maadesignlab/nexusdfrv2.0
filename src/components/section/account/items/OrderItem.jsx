import { formatDate } from "@/lib/intl";
import { formatPrice } from "@/lib/intl";

export default function OrderItem({
  order, t, locale
}) {
  console.log("locale", locale);
console.log(
  formatPrice(
    order.total,
    locale
  )
);
  return (
    <div
      className="
        bg-white
        border border-slate-200
        rounded-xl
        p-5
        shadow-sm
      "
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">
            {t.orders.order} #
            {order.id.slice(0, 8)}
          </h3>

          <p className="text-sm text-slate-500">
            {formatDate(
              order.created_at,
              locale
            )}
          </p>
        </div>

        <span
          className="
            px-3 py-1
            rounded-full
            text-xs
            font-semibold
            bg-amber-100
            text-amber-700
          "
        >
          {t.orders.status?.[order.status] ??
            order.status}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-sm text-slate-500">
          {t.orders.total}
        </p>

        <p className="text-xl font-bold">
          {
            formatPrice(
              order.total,
              locale
            )
          }
        </p>
      </div>
    </div>
  );
}