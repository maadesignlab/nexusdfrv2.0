import Link from "next/link";

export default function PricingClient({
  locale,
  t,
}) {
  const plans = [
    {
      ...t.plans.basic,
    },
    {
      ...t.plans.premium,
      featured: true,
    },
    {
      ...t.plans.enterprise,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

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
        <div
          className="
            absolute
            -top-20
            -right-20
            h-72
            w-72
            rounded-full
            bg-brand-200/40
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
            {t.badge}
          </span>

          <h1
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-bold
              tracking-tight
            "
          >
            {t.hero.title}
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* PLANS */}
      <section className="mt-16">
        <div
          className="
            grid
            gap-6
            lg:grid-cols-3
          "
        >
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`
                relative
                rounded-3xl
                border
                p-8
                transition-all
                ${
                  plan.featured
                    ? "border-brand-500 shadow-xl scale-[1.02]"
                    : "border-border-default"
                }
              `}
            >
              {plan.featured && (
                <span
                  className="
                    absolute
                    top-4
                    right-4
                    rounded-full
                    bg-brand-500
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  {t.plans.featured}
                </span>
              )}

              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-slate-500">
                  {t.plans.period}
                </span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map(
                  (feature) => (
                    <li
                      key={feature}
                      className="flex gap-3"
                    >
                      <span>✓</span>
                      <span>
                        {feature}
                      </span>
                    </li>
                  )
                )}
              </ul>

              <Link
                href={`/auth/login?returnTo=/${locale}/dashboard`}
                className="
                  btn-primary
                  mt-8
                  flex
                  justify-center
                  py-3
                "
              >
                {t.plans.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="mt-20">
        <div
          className="
            rounded-3xl
            border
            border-border-default
            overflow-hidden
          "
        >
          <div className="p-6 border-b">
            <h2 className="text-3xl font-bold">
              {t.comparison.title}
            </h2>
          </div>

          <table className="w-full">
            <tbody>
              {t.comparison.features.map(
                (feature) => (
                  <tr
                    key={feature}
                    className="border-b"
                  >
                    <td className="p-4 font-medium">
                      {feature}
                    </td>

                    <td className="text-center">
                      ✓
                    </td>

                    <td className="text-center">
                      ✓
                    </td>

                    <td className="text-center">
                      ✓
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section
        className="
          mt-20
          text-center
          rounded-3xl
          border
          border-border-default
          p-16
          bg-slate-50
        "
      >
        <h2 className="text-4xl font-bold">
          {t.cta.title}
        </h2>

        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-slate-600
          "
        >
          {t.cta.description}
        </p>

        <Link
          href={`/auth/login?returnTo=/${locale}/dashboard`}
          className="
            btn-primary
            inline-flex
            mt-8
            px-8
            py-3
          "
        >
          {t.cta.button}
        </Link>
      </section>

    </main>
  );
}