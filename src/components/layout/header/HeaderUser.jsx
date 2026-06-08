"use client";

import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";

function HeaderUser({
  accountRef,
  openAccount,
  setOpenAccount,
  user,
}) {
  const router = useRouter();

  const userName =
    user?.name ?? "Usuario";

  const userEmail =
    user?.email ?? "";

  return (
    <div
      ref={accountRef}
      className="relative"
    >
      {/* TRIGGER */}
      <button
        type="button"
        onClick={() =>
          setOpenAccount(
            !openAccount
          )
        }
        className="flex items-center px-5 py-1.5 rounded-full border border-[#8a8465] bg-[#eaede9] hover:bg-[#e0e4df] text-black font-bold text-sm transition"
      >
        Hola, {userName}
      </button>

      {/* DROPDOWN */}
      {openAccount && (
        <div
          className="
            absolute right-0 mt-3 w-56
            bg-white
            border border-slate-200
            rounded-xl
            shadow-xl
            p-2
            z-50
          "
        >
          {/* USER INFO */}
          <div className="px-3 py-2 border-b border-slate-200">
            <p className="text-sm font-semibold truncate">
              {userName}
            </p>

            <p className="text-xs text-slate-500 truncate">
              {userEmail}
            </p>
          </div>

          {/* MENU */}
          <div className="py-2 flex flex-col">
            <button
              type="button"
              onClick={() => {
                router.push(
                  "/account"
                );

                setOpenAccount(
                  false
                );
              }}
              className="
                flex items-center gap-2
                px-3 py-2
                text-sm
                hover:bg-slate-100
                rounded-md
                transition
              "
            >
              <User size={16} />
              Mi cuenta
            </button>

            <a
              href="/auth/logout"
              className="
                flex items-center gap-2
                px-3 py-2
                text-sm
                text-red-500
                hover:bg-red-50
                rounded-md
                transition
              "
            >
              <LogOut size={16} />
              Cerrar sesión
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderUser;