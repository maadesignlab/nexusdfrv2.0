import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "$9",
    description:
      "Acceso esencial a la biblioteca digital.",
    features: [
      "Consulta de catálogo",
      "Préstamo de libros",
      "Historial personal",
      "Soporte estándar",
    ],
  },
  {
    name: "Premium",
    price: "$19",
    featured: true,
    description:
      "La mejor experiencia para estudiantes y profesionales.",
    features: [
      "Todo lo incluido en Basic",
      "Acceso prioritario",
      "Reservas de coworking",
      "Contenido destacado",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    price: "$49",
    description:
      "Diseñado para organizaciones y equipos.",
    features: [
      "Todo lo incluido en Premium",
      "Gestión multiusuario",
      "Espacios exclusivos",
      "Soporte dedicado",
      "Analítica avanzada",
    ],
  },
];

export default function PricingClient({
  locale,
}) {
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
            Planes Nexus
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
            Elige el plan ideal para tu experiencia.
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
            "
          >
            Accede a la biblioteca digital,
            espacios de coworking y servicios
            diseñados para potenciar tu aprendizaje.
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
              key={plan.name}
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
                  Más popular
                </span>
              )}

              <h3 className="text-2xl font-bold">
                {plan.name}
              </h3>

              <p className="mt-2 text-slate-600">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-slate-500">
                  /mes
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
                Comenzar
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
              Compara los planes
            </h2>
          </div>

          <table className="w-full">
            <tbody>
              {[
                "Biblioteca digital",
                "Préstamos",
                "Coworking",
                "Soporte prioritario",
                "Analítica avanzada",
              ].map((feature) => (
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
              ))}
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
          Comienza hoy mismo
        </h2>

        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-slate-600
          "
        >
          Miles de usuarios ya aprovechan
          Nexus para acceder a conocimiento,
          espacios colaborativos y recursos
          profesionales.
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
          Crear cuenta
        </Link>
      </section>
    </main>
  );
}