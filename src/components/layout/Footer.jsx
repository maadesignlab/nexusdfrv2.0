import Link from "next/link";

export default function Footer({
  locale,
  t,
}) {
  return (
    <footer
      id="contacto"
      className="footer pt-20 pb-20 text-slate-300"
    >
      <div className="footer-container max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* Col 1 */}
        <section className="rounded-3xl bg-slate-900/95 border border-slate-800/80 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.8)] p-8 space-y-5">
          <div className="text-white font-semibold text-2xl tracking-wide">
            NEXUS
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            {t.brand.description}
          </p>
        </section>

        {/* Col 2 */}
        <section className="rounded-3xl bg-slate-900/95 border border-slate-800/80 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.8)] p-8 space-y-5">
          <h2 className="text-white font-semibold text-2xl tracking-wide">
            {t.product.title}
          </h2>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <Link
                href={`/${locale}/library`}
                className="hover:text-white transition"
              >
                {t.product.library}
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/coworking`}
                className="hover:text-white transition"
              >
                {t.product.coworking}
              </Link>
            </li>

            <li>
              <Link
                href={`/${locale}/cart`}
                className="hover:text-white transition"
              >
                {t.product.cart}
              </Link>
            </li>
          </ul>
        </section>

        {/* Col 3 */}
        <section className="rounded-3xl bg-slate-900/95 border border-slate-800/80 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.8)] p-8 space-y-5">
          <h2 className="text-white font-semibold text-2xl tracking-wide">
            {t.contact.title}
          </h2>

          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <a
                className="hover:text-white transition"
                href="mailto:info@nexus.es"
              >
                {t.contact.support}
              </a>
            </li>

            <li>
              <a
                className="hover:text-white transition"
                href="#"
              >
                {t.contact.privacy}
              </a>
            </li>

            <li>
              <a
                className="hover:text-white transition"
                href="#"
              >
                {t.contact.instagram}
              </a>
            </li>
          </ul>
        </section>

        {/* Col 4 */}
        <section className="rounded-3xl bg-slate-900/95 border border-slate-800/80 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.8)] p-8 space-y-5">
          <h2 className="text-white font-semibold text-2xl tracking-wide">
            {t.awards.title}
          </h2>

          <div className="rounded-2xl bg-slate-800/60 p-4 text-sm text-slate-200">
            {t.awards.awwwards}
          </div>

          <div className="rounded-2xl bg-slate-800/60 p-4 text-sm text-slate-200">
            <span className="text-slate-400 text-xs">
              {t.awards.featured}
            </span>

            <br />

            <strong className="text-white">
              {t.awards.productHunt}
            </strong>
          </div>
        </section>
      </div>
    </footer>
  );
}