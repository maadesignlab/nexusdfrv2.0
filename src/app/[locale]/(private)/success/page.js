import Link from "next/link";
import { getTranslations } from "@/lib/translations";

export default async function SuccessPage({
  params,
  searchParams,
}) {
  const { locale } = await params;
  const { order } =
    await searchParams;

  const translations =
    getTranslations(locale);

  const t =
    translations.checkout.success;

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-xl text-center">

        <div className="mb-6 text-6xl">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-slate-950 mb-4">
          {t.title}
        </h1>

        <p className="text-slate-600 mb-3">
          {t.description}
        </p>

        {order && (
          <p className="text-sm text-slate-500 mb-8">
            {t.order} #
            {String(order).slice(
              0,
              8
            )}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link
            href={`/${locale}/account?tab=orders`}
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-slate-950
              px-6 py-3
              text-sm font-bold
              text-white
              transition-all duration-300
              hover:bg-yellow-300
              hover:text-slate-950
            "
          >
            {t.viewPurchases}
          </Link>

          <Link
            href={`/${locale}/library`}
            className="
              inline-flex items-center justify-center
              rounded-xl
              border border-slate-200
              px-6 py-3
              text-sm font-medium
              hover:bg-slate-50
            "
          >
            {t.backLibrary}
          </Link>

        </div>
      </div>
    </main>
  );
}