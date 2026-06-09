import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { getTranslations } from "@/lib/translations";

export default async function PublicLayout({
  children,
  params,
}) {
  const { locale } = await params;

  const translations =
    await getTranslations(locale);

  return (
    <div className="layout-publico">
      <Header
        locale={locale}
        t={translations.header}
      />

      <main>
        {children}
      </main>

      <Footer
        locale={locale}
        t={translations.footer}
      />
    </div>
  );
}