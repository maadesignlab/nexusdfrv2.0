import { getTranslations } from "@/lib/translations";
import CartClient from "@/components/section/cart/CartClient";

export default async function CartPage({
  params,
}) {
  const { locale } = await params;

  const translations =
    getTranslations(locale);

  return (
    <CartClient
      t={translations.cart}
      locale={locale}
    />
  );
}