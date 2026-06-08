"use client";

import {
  User,
  Calendar,
  ShoppingBag,
  Settings,
  LogOut,
} from "lucide-react";

export default function AccountSidebar({
  activeTab,
  onTabChange,
  onLogout,
}) {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => onTabChange("perfil")}
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "perfil"
            ? "bg-[#1e2939] text-white"
            : "hover:bg-slate-100 text-slate-700"
        }`}
      >
        <User size={18} />
        Mi Perfil
      </button>

      <div className="pt-4 pb-1 px-2 text-[10px] font-bold text-slate-400 tracking-wider">
        ACTIVIDAD
      </div>

      <button
        onClick={() =>
          onTabChange("historial-reservas")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "historial-reservas"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <Calendar size={18} />
        Mis Reservas
      </button>

      <button
        onClick={() =>
          onTabChange("historial-compras")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "historial-compras"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <ShoppingBag size={18} />
        Mis Compras
      </button>

      <div className="pt-4 pb-1 px-2 text-[10px] font-bold text-slate-400 tracking-wider">
        AJUSTES
      </div>

      <button
        onClick={() =>
          onTabChange("preferencias")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "preferencias"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <Settings size={18} />
        Preferencias
      </button>

      <div className="border-t border-slate-300 my-2" />

      <button
        onClick={onLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors"
      >
        <LogOut size={18} />
        Salir
      </button>
    </div>
  );
}