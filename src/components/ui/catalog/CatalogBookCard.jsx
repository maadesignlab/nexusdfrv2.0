import Link from "next/link";
import BookImage from "@/components/ui/library/BookImage";

export default function CatalogBookCard({
  libro,
  locale,
  user,
  categories = {},
}) {
  const categoryLabel =
    categories[
      libro?.categoria?.slug
    ] ??
    libro?.categoria?.name ??
    "";

  const detailHref = user
    ? `/${locale}/library/${libro.id}`
    : `/auth/login?returnTo=/${locale}/library/${libro.id}`;

  return (
    <article
      className="
        group
        transition-all duration-300
        hover:-translate-y-1
        border
        glass-card
        p-4
        h-full
      "
    >
      {/* COVER */}
      <Link
        href={detailHref}
        className="
          flex
          justify-center
          mb-4
        "
      >
        <div
          className="
            transition-transform duration-500
            group-hover:scale-105
          "
        >
          <BookImage
            src={libro.imagen}
            alt={libro.titulo}
            size="detail"
          />
        </div>
      </Link>

      {/* CONTENT */}
      <div className="pt-4">
        <p
          className="
            text-[11px]
            uppercase
            tracking-wider
            text-brand-700
            font-medium
          "
        >
          {categoryLabel}
        </p>

        <h3
          className="
            mt-1
            text-sm
            font-semibold
            leading-snug
            text-slate-950
            line-clamp-2
          "
        >
          {libro.titulo}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
            line-clamp-1
          "
        >
          {libro.autor}
        </p>

        <Link
          href={detailHref}
          className="
            btn-primary
            flex
            w-full
            items-center
            justify-center
            py-2
            mt-5
            text-xs
            font-bold
            rounded-xl
          "
        >
          Descubrir más
        </Link>
      </div>
    </article>
  );
}