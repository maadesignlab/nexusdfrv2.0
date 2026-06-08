"use client";

import { useRouter } from "next/navigation";

export default function DashboardClient({
  totalLibros = 0,
  espaciosDisponibles = 0,
}) {
  const router = useRouter();

  const cards = [
    {
      title: "Librería",
      description:
        "Explora libros, revistas, categorías y más vendidos.",
      icon: "📚",
      action: "Ir a librería",
      href: "/library",
    },
    {
      title: "Coworking",
      description:
        "Consulta espacios disponibles y realiza reservas.",
      icon: "🏢",
      action: "Ver espacios",
      href: "/coworking",
    },
    {
      title: "Mi cuenta",
      description:
        "Administra tu perfil, historial y preferencias.",
      icon: "👤",
      action: "Ver cuenta",
      href: "/account",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      {/* HEADER */}
      <header className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-600">
          Dashboard
        </span>

        <h1 className="mt-2 text-4xl font-bold text-slate-950">
          Bienvenido a Nexus
        </h1>

        <p className="mt-3 max-w-2xl text-slate-600">
          Gestiona tu experiencia académica desde un único lugar.
        </p>
      </header>

      {/* HERO */}
      <section className="bg-[#fcfcf9] border border-slate-200 rounded-2xl p-8 mb-10 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-950">
          Todo tu ecosistema académico
        </h2>

        <p className="mt-3 max-w-2xl text-slate-600">
          Accede rápidamente a libros, espacios de coworking,
          reservas y gestión de tu cuenta.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <StatCard
            label="Libros disponibles"
            value={totalLibros}
          />

          <StatCard
            label="Espacios libres"
            value={espaciosDisponibles}
          />

          <StatCard
            label="Año fiscal"
            value="2026"
          />
        </div>
      </section>

      {/* ACCESOS */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <button
            key={card.href}
            type="button"
            onClick={() => router.push(card.href)}
            className="text-left rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-yellow-300 hover:shadow-lg"
          >
            <div className="mb-4 text-3xl">
              {card.icon}
            </div>

            <h3 className="text-xl font-bold text-slate-950">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              {card.description}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <span className="font-semibold text-slate-950">
                {card.action}
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-950 text-white">
                →
              </span>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-3xl font-bold text-slate-950">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}