"use client";

import { useRef } from "react";
import CatalogBookCard from "@/components/ui/catalog/CatalogBookCard";

export default function BookShelf({
  title,
  books,
  locale,
  user,
  t,
  categories,
}) {
  const scrollRef = useRef(null);

  if (!books?.length) {
    return null;
  }

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -900,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 900,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollLeft}
            className="
              h-10 w-10
              rounded-full
              border
              border-border-default
              bg-white
              transition
              hover:bg-slate-100
            "
          >
            ←
          </button>

          <button
            type="button"
            onClick={scrollRight}
            className="
              h-10 w-10
              rounded-full
              border
              border-border-default
              bg-white
              transition
              hover:bg-slate-100
            "
          >
            →
          </button>
        </div>
      </div>

      {/* LEFT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[90px]
          bottom-6
          w-12
          bg-gradient-to-r
          from-white
          to-transparent
          z-10
        "
      />

      {/* RIGHT FADE */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[90px]
          bottom-6
          w-12
          bg-gradient-to-l
          from-white
          to-transparent
          z-10
        "
      />

      {/* BOOKS */}
      <div
        ref={scrollRef}
        className="
          flex
          gap-5
          overflow-x-auto
          scroll-smooth
          snap-x
          pb-2
          [&::-webkit-scrollbar]:hidden
          [-ms-overflow-style:none]
          [scrollbar-width:none]
        "
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="
              shrink-0
              w-[250px]
              snap-start
            "
          >
            <CatalogBookCard
              libro={book}
              locale={locale}
              user={user}
              t={t}
              categories={categories}
            />
          </div>
        ))}
      </div>
    </section>
  );
}