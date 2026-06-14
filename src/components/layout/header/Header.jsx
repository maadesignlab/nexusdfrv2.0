"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  useRouter,
  usePathname,
} from "next/navigation";

import { locales } from "@/lib/i18n";
import { useCart } from "@/context/CartContext";

import HeaderCart from "./HeaderCart";
import HeaderUser from "./HeaderUser";
import HeaderMobile from "./HeaderMobile";

function Header({
  user,
  locale,
  t,
}) {
  const router = useRouter();
  const pathname = usePathname();

  const {
    cart = [],
    mounted,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const [openCart, setOpenCart] =
    useState(false);

  const [openAccount, setOpenAccount] =
    useState(false);

  const [openMobile, setOpenMobile] =
    useState(false);

  const cartRef = useRef(null);
  const accountRef = useRef(null);

  const totalItems = useMemo(
    () =>
      cart.reduce(
        (acc, item) =>
          acc + item.cantidad,
        0
      ),
    [cart]
  );

  useEffect(() => {
    const handleClickOutside = (
      e
    ) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(
          e.target
        )
      ) {
        setOpenCart(false);
      }

      if (
        accountRef.current &&
        !accountRef.current.contains(
          e.target
        )
      ) {
        setOpenAccount(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleLocaleChange = (
  e
) => {
  const newLocale =
    e.target.value;

  document.cookie =
    `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;

  const segments =
    pathname.split("/");

  segments[1] = newLocale;

  const newPath =
    segments.join("/");

  router.push(newPath);
};

  const localeSelectClasses =
    "h-9 px-2 rounded-md bg-gray-100 text-sm";

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          href={
            user
              ? `/${locale}/dashboard`
              : `/${locale}/`
          }
        >
          <img
            src="/img/nexus.svg"
            alt="Nexus"
            className="w-20"
          />
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {!user ? (
            <>
              <Link href={`/${locale}/catalog`}>
                {t.navigation.catalog}
              </Link>

              <Link href={`/${locale}/pricing`}>
                {t.navigation.pricing}
              </Link>

              <a
                href={`/auth/login?returnTo=/${locale}/dashboard`}
              >
                {t.login}
              </a>
            </>
          ) : (
            <>
              <Link
                href={`/${locale}/library`}
              >
                {t.navigation.library}
              </Link>

              <Link
                href={`/${locale}/coworking`}
              >
                {t.navigation.coworking}
              </Link>

              {mounted && (
                <HeaderCart
                  cartRef={cartRef}
                  openCart={openCart}
                  setOpenCart={setOpenCart}
                  totalItems={totalItems}
                  cart={cart}
                  increaseQty={increaseQty}
                  decreaseQty={decreaseQty}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  t={t}
                  locale={locale}
                />
              )}

              <HeaderUser
                accountRef={accountRef}
                openAccount={openAccount}
                setOpenAccount={setOpenAccount}
                user={user}
                locale={locale}
                t={t}
              />
            </>
          )}

          {/* LANGUAGE */}
          <select
            value={locale}
            onChange={handleLocaleChange}
            className={localeSelectClasses}
          >
            {locales.map((lang) => (
              <option
                key={lang}
                value={lang}
              >
                {lang.toUpperCase()}
              </option>
            ))}
          </select>
        </nav>

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() =>
            setOpenMobile(
              (prev) => !prev
            )
          }
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      <HeaderMobile
        open={openMobile}
        user={user}
        locale={locale}
        t={t}
        totalItems={
          mounted
            ? totalItems
            : 0
        }
        onClose={() =>
          setOpenMobile(false)
        }
      />
    </header>
  );
}

export default Header;