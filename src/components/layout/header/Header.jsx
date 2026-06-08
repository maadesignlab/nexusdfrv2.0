"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

import HeaderCart from "./HeaderCart";
import HeaderUser from "./HeaderUser";
import HeaderMobile from "./HeaderMobile";

function Header({ user }) {
  const router = useRouter();
  const { cart } = useCart();

  const [openCart, setOpenCart] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const cartRef = useRef(null);
  const accountRef = useRef(null);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target)
      ) {
        setOpenCart(false);
      }

      if (
        accountRef.current &&
        !accountRef.current.contains(e.target)
      ) {
        setOpenAccount(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          type="button"
          onClick={() =>
            router.push("/dashboard")
          }
        >
          <img
            src="/img/nexus.svg"
            alt="Nexus"
            className="w-20"
          />
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {!user ? (
            <a href="/auth/login?returnTo=/dashboard">
              Login
            </a>
          ) : (
            <>
              <Link href="/library">
                Librería
              </Link>

              <Link href="/coworking">
                Coworking
              </Link>

              <HeaderCart
                cartRef={cartRef}
                openCart={openCart}
                setOpenCart={setOpenCart}
                totalItems={totalItems}
              />

              <HeaderUser
                accountRef={accountRef}
                openAccount={openAccount}
                setOpenAccount={setOpenAccount}
                user={user}
              />
            </>
          )}
        </nav>

        <button
          type="button"
          onClick={() =>
            setOpenMobile(!openMobile)
          }
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      <HeaderMobile
        open={openMobile}
        user={user}
        totalItems={totalItems}
        onClose={() =>
          setOpenMobile(false)
        }
      />
    </header>
  );
}

export default Header;