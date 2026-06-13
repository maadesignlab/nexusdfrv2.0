"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";

import CartItem from "./items/CartItem";

function CartClient({ t, locale }) {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (acc, item) =>
      acc +
      Number(item.precio || 0) *
        Number(item.cantidad || 0),
    0
  );

  // EMPTY STATE
  if (!cart.length) {
    return (
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-100 text-2xl">
            🛒
          </div>

          <h2 className="text-2xl font-bold text-slate-950 mb-3">
            {t.empty.title}
          </h2>

          <p className="text-sm leading-6 text-slate-600 mb-6">
            {t.empty.description}
          </p>

          <Link
            href="/library"
            className="
              inline-flex items-center justify-center
              rounded-xl bg-slate-950 px-6 py-3
              text-sm font-bold text-white
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-yellow-300 hover:text-slate-950
              hover:shadow-md
            "
          >
            {t.empty.explore}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* HEADER */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-yellow-500 mb-2">
            {t.header.badge}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h1 className="text-3xl font-bold text-slate-950">
                {t.header.title}
              </h1>

              <p className="mt-2 text-sm text-slate-600">
                {t.header.description}
              </p>
            </div>

            <Link
              href={`/${locale}/library`}
              className="
                text-sm font-semibold text-slate-600
                underline-offset-4 hover:underline
                hover:text-slate-950
              "
            >
              {t.header.continueShopping}
            </Link>
          </div>
        </div>

        {/* ITEMS */}
        <ul className="space-y-4">
          {cart.map((item) => (
            <CartItem
              key={item.bookId}
              item={item}
              t={t}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeFromCart={removeFromCart}
            />
          ))}
        </ul>
      </main>

      {/* TOTAL */}
      <div
        className="
          sticky bottom-0 w-full
          border-t border-slate-200
          bg-white/95
          backdrop-blur
          shadow-[0_-10px_30px_rgba(15,23,42,0.08)]
        "
      >
        <div
          className="
            max-w-5xl mx-auto
            flex flex-col sm:flex-row
            gap-4
            sm:items-center
            sm:justify-between
            px-4 sm:px-6 lg:px-8 py-4
          "
        >
          <div>
            <span
              className="
                text-xs font-semibold
                uppercase tracking-[0.18em]
                text-slate-500
              "
            >
              {t.summary.total}
            </span>

            <span className="block text-2xl font-extrabold text-slate-950">
              ${total.toLocaleString()}
            </span>
          </div>

          <Link
            href={`/${locale}/checkout`}
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-yellow-300
              px-7 py-3
              text-sm font-bold
              text-slate-950
              transition-all duration-300
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >
            {t.summary.checkout}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartClient;