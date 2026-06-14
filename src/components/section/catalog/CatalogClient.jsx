import Link from "next/link";
import BookShelf from "./BookShelf";

export default function CatalogClient({
  data,
  t,
  locale,
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
            Biblioteca Digital Nexus
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
            Descubre historias,
            ideas y conocimiento
            para impulsar tu futuro.
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
            Explora los libros más vendidos y
            cientos de títulos organizados por
            categorías. Encuentra inspiración,
            aprendizaje y nuevas perspectivas
            en un solo lugar.
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
              Explorar catálogo
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
              Ver planes
            </Link>
          </div>
        </div>
      </section>

      {/* SHELVES */}
      <div id="top10">
        <BookShelf
          title="Top 10 más vendidos"
          books={data.top10}
          locale={locale}
          t={t.card}
        />
      </div>

      <BookShelf
        title="Drama"
        books={data.drama}
        locale={locale}
        t={t.card}
      />

      <BookShelf
        title="Ficción"
        books={data.ficcion}
        locale={locale}
        t={t.card}
      />

      <BookShelf
        title="Economía"
        books={data.economia}
        locale={locale}
        t={t.card}
      />

      <BookShelf
        title="Arte y Cultura"
        books={data.arteCultura}
        locale={locale}
        t={t.card}
      />

      <BookShelf
        title="Estilo de vida"
        books={data.estiloVida}
        locale={locale}
        t={t.card}
      />

      <BookShelf
        title="Clásico"
        books={data.clasico}
        locale={locale}
        t={t.card}
      />

      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">
          ¿Listo para acceder a toda la biblioteca?
        </h2>

        <p className="mt-4 text-slate-600">
          Inicia sesión para consultar detalles,
          gestionar tus préstamos y acceder a
          todos los servicios de Nexus.
        </p>

        <a
          href={`/auth/login?returnTo=/${locale}/dashboard`}
          className="btn-primary mt-6 inline-flex"
        >
          Iniciar sesión
        </a>
      </section>
    </main>
  );
}