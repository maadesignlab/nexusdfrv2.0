"use client";

import { useState } from "react";

import AccountSidebar from "./AccountSidebar";

import ProfileTab from "./tabs/ProfileTab";
import PurchasesTab from "./tabs/PurchasesTab";
import ReservationsTab from "./tabs/ReservationsTab";
import PreferencesTab from "./tabs/PreferencesTab";

export default function AccountClient({
  user,
  orders,
  reservations,
}) {
  const [activeTab, setActiveTab] =
    useState("perfil");

  const handleLogout = () => {
    window.location.href =
      "/auth/logout";
  };

  const renderTab = () => {
    switch (activeTab) {
      case "perfil":
        return <ProfileTab user={user} />;

      case "historial-compras":
        return (
          <PurchasesTab
            orders={orders}
          />
        );

      case "historial-reservas":
        return (
          <ReservationsTab
            reservations={reservations}
          />
        );

      case "preferencias":
        return <PreferencesTab />;

      default:
        return null;
    }
  };

  console.log("AccountSidebar", AccountSidebar);
console.log("ProfileTab", ProfileTab);
console.log("PurchasesTab", PurchasesTab);
console.log("ReservationsTab", ReservationsTab);
console.log("PreferencesTab", PreferencesTab);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] max-w-6xl mx-auto w-full px-4 md:px-6 py-8 gap-8">
      <aside className="bg-[#fcfcf9] border border-slate-200 rounded-2xl p-4 shadow-sm h-fit">
        <AccountSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
        />
      </aside>

      <main className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm min-h-[500px]">
        {renderTab()}
      </main>
    </div>
  );
}