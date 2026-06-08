import OrderItem from "../items/OrderItem";

export default function PurchasesTab({
  orders,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">
        Mis Compras
      </h2>

      {orders?.length > 0 ? (
        orders.map((order) => (
          <OrderItem
            key={order.id}
            order={order}
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
            Aún no tienes compras registradas.
          </p>
        </div>
      )}
    </div>
  );
}