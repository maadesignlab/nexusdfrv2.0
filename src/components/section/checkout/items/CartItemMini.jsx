import { getImageSrc } from "@/lib/getImageSrc";

export default function CartItemMini({
  item,
  locale,
}) {
  const subtotal =
    Number(item.precio || 0) *
    Number(item.cantidad || 0);

  return (
    <div className="flex gap-3">
      <img
        src={getImageSrc(
          item.imagen
        )}
        alt={item.titulo}
        className="
          w-12 h-16
          rounded-lg
          object-cover
        "
      />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium line-clamp-2">
          {item.titulo}
        </p>

        <p className="text-xs text-slate-500">
          × {item.cantidad}
        </p>
      </div>

      <span className="font-semibold whitespace-nowrap">
        ${subtotal.toLocaleString(locale)}
      </span>
    </div>
  );
}