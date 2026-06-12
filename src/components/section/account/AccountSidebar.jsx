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
  t,
}) {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => onTabChange("profile")}
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "profile"
            ? "bg-[#1e2939] text-white"
            : "hover:bg-slate-100 text-slate-700"
        }`}
      >
        <User size={18} />
        {t.sidebar.profile}
      </button>

      <div className="pt-4 pb-1 px-2 text-[10px] font-bold text-slate-400 tracking-wider">
        {t.sidebar.activity}
      </div>

      <button
        onClick={() =>
          onTabChange("reservations")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "reservations"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <Calendar size={18} />
        {t.sidebar.reservations}
      </button>

      <button
        onClick={() =>
          onTabChange("orders")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "orders"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <ShoppingBag size={18} />
        {t.sidebar.orders}
      </button>

      <div className="pt-4 pb-1 px-2 text-[10px] font-bold text-slate-400 tracking-wider">
        {t.sidebar.settings}
      </div>

      <button
        onClick={() =>
          onTabChange("preferences")
        }
        className={`flex items-center gap-3 px-4 py-3 border rounded-xl font-medium transition-colors ${
          activeTab === "preferences"
            ? "bg-[#1e2939] text-white border-transparent"
            : "bg-white border-slate-200 hover:bg-slate-50 text-slate-700"
        }`}
      >
        <Settings size={18} />
        {t.sidebar.preferences}
      </button>

      <div className="border-t border-slate-300 my-2" />

      <button
        onClick={onLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-red-500 hover:bg-red-50 transition-colors"
      >
        <LogOut size={18} />
        {t.sidebar.logout}
      </button>
    </div>
  );
}