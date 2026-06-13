import OrderItem from "../items/OrderItem";

export default function PurchasesTab({
  orders, t, locale,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        {t.orders.title}
      </h2>

      {orders?.length > 0 ? (
        orders.map((order) => (
          <OrderItem
            key={order.id}
            order={order}
            t={t}
            locale={locale}
          />
        ))
      ) : (
        <div
          className="
            text-center
            py-12
            border border-dashed
            border-slate-300
            rounded-xl
          "
        >
          <p className="text-slate-500">
            {t.orders.empty}
          </p>
        </div>
      )}
    </div>
  );
}