import Link from "next/link";
import BookShelf from "./BookShelf";

export default function CatalogClient({
  data,
  t,
  locale,
  card,
  categories,
}) {
  return (
    <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">

      {/* HERO */}
      <section
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-border-default
          bg-gradient-to-br
          from-brand-50
          via-white
          to-slate-100
          px-8
          py-16
          lg:px-16
          lg:py-24
        "
      >
        {/* DECORATION */}
        <div
          className="
            absolute
            -top-24
            -right-24
            h-72
            w-72
            rounded-full
            bg-brand-200/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-20
            -left-20
            h-60
            w-60
            rounded-full
            bg-slate-300/30
            blur-3xl
          "
        />

        <div className="relative max-w-3xl">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-brand-200
              bg-white/80
              px-4
              py-1.5
              text-xs
              font-semibold
              uppercase
              tracking-widest
              text-brand-700
            "
          >
            {t.hero.badge}
          </span>

          <h1
            className="
              mt-6
              text-4xl
              font-bold
              tracking-tight
              text-slate-950
              md:text-6xl
            "
          >
            {t.hero.title}
          </h1>

          <p
            className="
              mt-6
              max-w-2xl
              text-lg
              leading-relaxed
              text-slate-600
            "
          >
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#top10"
              className="
                btn-primary
                px-6
                py-3
              "
            >
              {t.hero.explore}
            </a>

            <Link
              href={`/${locale}/pricing`}
              className="
                rounded-xl
                border
                border-border-default
                bg-white
                px-6
                py-3
                font-medium
                transition
                hover:bg-slate-50
              "
            >
              {t.hero.pricing}
            </Link>
          </div>
        </div>
      </section>

      {/* SHELVES */}
      <div id="top10">
        <BookShelf
          title={t.shelves.top10}
          books={data.top10}
          locale={locale}
          t={card}
          categories={categories}
        />
      </div>

      <BookShelf
        title={t.shelves.drama}
        books={data.drama}
        locale={locale}
        t={card}
        categories={categories}
      />

      <BookShelf
        title={t.shelves.fiction}
        books={data.ficcion}
        locale={locale}
        t={card}
        categories={categories}
      />

      <BookShelf
        title={t.shelves.economy}
        books={data.economia}
        locale={locale}
        t={card}
        categories={categories}
      />

      <BookShelf
        title={t.shelves.artCulture}
        books={data.arteCultura}
        locale={locale}
        t={card}
        categories={categories}
      />

      <BookShelf
        title={t.shelves.lifestyle}
        books={data.estiloVida}
        locale={locale}
        t={card}
        categories={categories}
      />

      <BookShelf
        title={t.shelves.classic}
        books={data.clasico}
        locale={locale}
        t={card}
        categories={categories}
      />

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">
          {t.cta.title}
        </h2>

        <p className="mt-4 text-slate-600">
          {t.cta.description}
        </p>

        <a
          href={`/auth/login?returnTo=/${locale}/dashboard`}
          className="btn-primary mt-6 inline-flex"
        >
          {t.cta.button}
        </a>
      </section>

    </main>
  );
}