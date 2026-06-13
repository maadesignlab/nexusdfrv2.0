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
  t,
  locale,
  initialTab = "profile",
}) {
  
  const [activeTab, setActiveTab] =
  useState(initialTab);

  const handleLogout = () => {
    window.location.href =
      "/auth/logout";
  };

  const renderTab = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab user={user} t={t} />;

      case "orders":
        return (
          <PurchasesTab
            orders={orders}
            t={t}
          />
        );

      case "reservations":
        return (
          <ReservationsTab
            reservations={reservations}
            t={t}
            locale={locale}
          />
        );

      case "preferences":
        return (
          <PreferencesTab
            t={t}  
          />
        );

      default:
        return null;
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] max-w-6xl mx-auto w-full px-4 md:px-6 py-8 gap-8">
      <aside className="bg-[#fcfcf9] border border-slate-200 rounded-2xl p-4 shadow-sm h-fit">
        <AccountSidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onLogout={handleLogout}
          t={t}
        />
      </aside>

      <main className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-10 shadow-sm min-h-[500px]">
        {renderTab()}
      </main>
    </div>
  );
}