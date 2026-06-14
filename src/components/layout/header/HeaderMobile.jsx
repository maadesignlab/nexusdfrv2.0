"use client";

import { createPortal } from "react-dom";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Link from "next/link";
import { LogOut } from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
  usePathname,
} from "next/navigation";

import { locales } from "@/lib/i18n";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

function HeaderMobile({
  open,
  user,
  locale,
  t,
  totalItems,
  onClose,
  onLogout,
}) {
  const [mounted, setMounted] =
    useState(false);

  const router = useRouter();
  const pathname =
    usePathname();

  useLockBodyScroll(open);

  useEffect(() => {
    setMounted(true);
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

    router.push(
      segments.join("/")
    );

    onClose();
  };

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            className="
              fixed inset-0
              bg-black/40
              z-[998]
            "
            onClick={onClose}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          />

          {/* DRAWER */}
          <motion.aside
            className="
              fixed top-0 right-0
              h-[100dvh]
              w-72
              bg-white
              z-[999]
              shadow-2xl
              flex flex-col
              overflow-y-auto
            "
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.2}
            onDragEnd={(
              e,
              info
            ) => {
              if (
                info.offset.x > 80
              ) {
                onClose();
              }
            }}
          >
            {/* HEADER */}
            <div
              className="
                flex
                items-center
                justify-between
                p-6
                border-b
              "
            >
              <h2 className="font-semibold">
                Menú
              </h2>

              <button
                onClick={onClose}
                className="text-xl"
              >
                ✕
              </button>
            </div>

            {/* USER */}
            {user && (
              <div
                className="
                  px-6
                  py-4
                  border-b
                "
              >
                <p className="font-semibold">
                  {user.nombre}
                </p>

                <p
                  className="
                    text-sm
                    text-text-secondary
                  "
                >
                  {user.correo}
                </p>
              </div>
            )}

            {/* NAVIGATION */}
            <nav
              className="
                flex-1
                px-6
                py-6
                flex
                flex-col
                gap-4
                text-sm
              "
            >
              {!user ? (
                <>
                  <Link
                    href={`/${locale}/catalog`}
                    onClick={
                      onClose
                    }
                  >
                    {
                      t.navigation
                        .catalog
                    }
                  </Link>

                  <Link
                    href={`/${locale}/pricing`}
                    onClick={
                      onClose
                    }
                  >
                    {
                      t.navigation
                        .pricing
                    }
                  </Link>

                  <a
                    href={`/auth/login?returnTo=/${locale}/dashboard`}
                    onClick={
                      onClose
                    }
                  >
                    {t.login}
                  </a>
                </>
              ) : (
                <>
                  <Link
                    href={`/${locale}/library`}
                    onClick={
                      onClose
                    }
                  >
                    📚{" "}
                    {
                      t.navigation
                        .library
                    }
                  </Link>

                  <Link
                    href={`/${locale}/coworking`}
                    onClick={
                      onClose
                    }
                  >
                    💼{" "}
                    {
                      t.navigation
                        .coworking
                    }
                  </Link>

                  <Link
                    href={`/${locale}/cart`}
                    onClick={
                      onClose
                    }
                  >
                    🛒 Carrito (
                    {totalItems})
                  </Link>

                  <Link
                    href={`/${locale}/account`}
                    onClick={
                      onClose
                    }
                  >
                    👤 Mi cuenta
                  </Link>

                  <div
                    className="
                      border-t
                      border-border-default
                      my-2
                    "
                  />

                  <button
                    onClick={() => {
                      if (
                        onLogout
                      ) {
                        onLogout();
                      }

                      onClose();
                    }}
                    className="
                      flex
                      items-center
                      gap-2
                      text-red-500
                      font-medium
                      text-left
                    "
                  >
                    <LogOut
                      size={18}
                    />

                    Cerrar sesión
                  </button>
                </>
              )}
            </nav>

            {/* LANGUAGE */}
            <div
              className="
                px-6
                pb-6
                pt-4
                border-t
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-wider
                  text-slate-500
                  mb-2
                "
              >
                Language
              </p>

              <select
                value={locale}
                onChange={
                  handleLocaleChange
                }
                className="
                  w-full
                  h-10
                  rounded-xl
                  border
                  border-border-default
                  bg-white
                  px-3
                  text-sm
                "
              >
                {locales.map(
                  (lang) => (
                    <option
                      key={lang}
                      value={lang}
                    >
                      {lang.toUpperCase()}
                    </option>
                  )
                )}
              </select>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default HeaderMobile;