import { redirect } from "next/navigation";
import { auth0 } from "@/lib/auth0";
import { getTranslations } from "@/lib/translations";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";

export default async function PrivateLayout({
  children,
  params,
}) {
  const session = await auth0.getSession();

  const { locale } = await params;

  const translations =
    await getTranslations(locale);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <Header
        user={session.user}
        locale={locale}
        t={translations.header}
      />

      <main className="flex-1">
        {children}
      </main>

      <Footer 
      locale={locale} 
      t={translations.footer} />
    </div>
  );
}