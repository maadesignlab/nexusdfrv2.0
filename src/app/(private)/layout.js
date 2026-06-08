import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";

export default async function PrivateLayout({
  children,
}) {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <Header user={session.user} />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}