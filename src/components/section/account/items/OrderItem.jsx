export default function OrderItem({
  order,
}) {
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
            Orden #
            {order.id.slice(0, 8)}
          </h3>

          <p className="text-sm text-slate-500">
            {new Date(
              order.created_at
            ).toLocaleDateString(
              "es-CO"
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
          {order.status}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-sm text-slate-500">
          Total
        </p>

        <p className="text-xl font-bold">
          $
          {Number(
            order.total
          ).toLocaleString(
            "es-CO"
          )}
        </p>
      </div>
    </div>
  );
}