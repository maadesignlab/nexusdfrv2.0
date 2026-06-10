"use client";

import {
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";

function LibraryFilters({
  categories = [],
  years = [],
  categoryLabels = {},
  t = {},
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams =
    useSearchParams();

  const filters = {
  category:
    searchParams.get("category") || "",

  year:
    searchParams.get("year") || "",

  featured:
    searchParams.get("featured") || "",
};

  const updateFilter = (
  key,
  value
) => {
  const params =
    new URLSearchParams(
      searchParams.toString()
    );

  const isSameValue =
    params.get(key) === value;

  if (isSameValue) {
    params.delete(key);
  } else {
    params.set(key, value);
  }

  /* if (key === "featured") {
    params.delete("category");
    params.delete("year");
  } */

  const query =
    params.toString();

  router.push(
    query
      ? `${pathname}?${query}`
      : pathname,
    {
      scroll: false,
    }
  );
};

  const clearFilters = () => {
    router.push(pathname, {
      scroll: false,
    });
  };

  const baseBtn =
    "w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 border";

  const inactiveBtn =
    "border-border-light/50 hover:bg-border-hover text-text";

  const activeBtn =
    "bg-brand-200 border-brand-300 text-text font-semibold shadow-md";

  return (
    <aside className="w-full h-full flex flex-col">
      {/* HEADER */}
      <div className="pb-6 border-b border-border-default">
        <h3 className="text-lg font-extrabold tracking-tight">
          {t.title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto py-6 pr-2 scrollbar-custom">
        {/* FEATURED */}
        <div className="mb-8">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary/50 mb-4">
            {t.featured}
          </h4>

          <div className="space-y-2">
            <button
              onClick={() =>
                updateFilter(
                  "featured",
                  "featured"
                )
              }
              className={`${baseBtn} ${
                filters.featured ===
                "featured"
                  ? activeBtn
                  : inactiveBtn
              }`}
            >
              {t.featuredBooks}
            </button>

            <button
              onClick={() =>
                updateFilter(
                  "featured",
                  "bestSeller"
                )
              }
              className={`${baseBtn} ${
                filters.featured ===
                "bestSeller"
                  ? activeBtn
                  : inactiveBtn
              }`}
            >
              {t.bestSellerBooks}
            </button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="mb-8">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary/50 mb-4">
            {t.categoriesLabel}
          </h4>

          <div className="space-y-2">
            {categories.map(
              (category) => (
                <button
                  key={category.slug}
                  onClick={() =>
                    updateFilter(
                      "category",
                      category.slug
                    )
                  }
                  className={`${baseBtn} ${
                    filters.category ===
                    category.slug
                      ? activeBtn
                      : inactiveBtn
                  }`}
                >
                  {categoryLabels[
                    category.slug
                  ] ??
                    category.name}
                </button>
              )
            )}
          </div>
        </div>

        {/* YEAR */}
        <div className="mb-8">
          <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary/50 mb-4">
            {t.year}
          </h4>

          <div className="space-y-2">
            {years.map(
              (year) => (
                <button
                  key={year}
                  onClick={() =>
                    updateFilter(
                      "year",
                      String(year)
                    )
                  }
                  className={`${baseBtn} ${
                    filters.year ===
                    year
                      ? activeBtn
                      : inactiveBtn
                  }`}
                >
                  {year}
                </button>
              )
            )}
          </div>
        </div>

        {/* CLEAR */}
        <div className="pt-4 border-t border-border-default">
          <button
            onClick={
              clearFilters
            }
            className="w-full text-sm font-semibold text-brand-600 hover:underline"
          >
            {t.clear}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default LibraryFilters;