import { getImageSrc } from "@/lib/getImageSrc";

export default function CartItem({
  item,
  t,
  increaseQty,
  decreaseQty,
  removeFromCart,
}) {
  const precio = Number(
    item.precio || 0
  );

  const cantidad = Number(
    item.cantidad || 0
  );

  const subtotal =
    precio * cantidad;

  const etiqueta =
    item.tipo === "cafeteria"
      ? t.item.cafeteria
      : t.item.book;

  return (
    <li
      className="
        rounded-2xl border border-slate-200
        bg-white p-4 sm:p-5
        shadow-sm
        transition-all duration-300
        hover:shadow-md
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-5 md:items-center">

        {/* INFO */}
        <div className="flex gap-4 min-w-0">
          <img
            src={getImageSrc(
              item.imagen
            )}
            alt={item.titulo}
            className="
              h-28 w-20 flex-shrink-0
              rounded-xl object-cover object-top
              bg-slate-50
            "
          />

          <div className="flex min-w-0 flex-col justify-center">
            <span className="mb-1 text-xs text-slate-500">
              {etiqueta}
            </span>

            <strong className="line-clamp-2 text-lg font-bold text-slate-950">
              {item.titulo}
            </strong>

            <span className="mt-1 text-sm text-slate-600 line-clamp-1">
              {item.autor}
            </span>

            <strong className="mt-2 text-base font-bold text-slate-950">
              $
              {precio.toLocaleString()}
            </strong>
          </div>
        </div>

        {/* QUANTITY */}
        <div className="flex items-center justify-between gap-4 md:justify-center">
          <span className="text-sm font-semibold text-slate-500 md:hidden">
            {t.item.quantity}
          </span>

          <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() =>
                decreaseQty(
                  item.bookId
                )
              }
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg text-base font-bold text-slate-600
                transition hover:bg-white hover:shadow-sm
              "
            >
              -
            </button>

            <span className="min-w-10 text-center text-sm font-bold text-slate-950">
              {cantidad}
            </span>

            <button
              type="button"
              onClick={() =>
                increaseQty(
                  item.bookId
                )
              }
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg text-base font-bold text-slate-600
                transition hover:bg-white hover:shadow-sm
              "
            >
              +
            </button>
          </div>
        </div>

        {/* SUBTOTAL */}
        <div className="flex items-center justify-between gap-4 md:min-w-[170px] md:justify-end">
          <div className="text-left md:text-right">
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              {t.item.subtotal}
            </span>

            <span className="block text-lg font-bold text-slate-950">
              $
              {subtotal.toLocaleString()}
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              removeFromCart(
                item.bookId
              )
            }
            aria-label={
              t.item.remove
            }
            title={
              t.item.remove
            }
            className="
              inline-flex h-9 w-9 items-center justify-center
              rounded-full border border-red-100
              bg-red-50 text-red-500
              transition-all duration-300
              hover:bg-red-500 hover:text-white hover:shadow-sm
            "
          >
            ×
          </button>
        </div>

      </div>
    </li>
  );
}