"use client";

import { useState, useMemo } from "react";
import CoworkingModal from "@/components/ui/coworking/CoworkingModal";
import CoworkingSiteCard from "@/components/ui/coworking/CoworkingSiteCard";
import BookingFlow from "@/components/ui/coworking/CoworkingModalBooking";
import { motion, AnimatePresence } from "framer-motion";

function CoworkingClient({
  spaces = [],
  userId,
  t,
  locale,
}) {
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [isBooking, setIsBooking] = useState(false);
  const [estadoFiltro, setEstadoFiltro] = useState("all");

  const closeModal = () => {
    setSelectedSpace(null);
    setIsBooking(false);
  };

  const { grouped, stats } = useMemo(() => {
    const filtered =
      estadoFiltro === "all"
        ? spaces
        : spaces.filter((s) =>
            estadoFiltro ===
            "available"
              ? !s.ocupado
              : s.ocupado
          );

    const grouped = filtered.reduce((acc, space) => {
      const key = space.ubicacion || "otros";

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(space);

      return acc;
    }, {});

    const stats = spaces.reduce(
      (acc, space) => {
        acc.total++;

        if (space.ocupado) {
          acc.ocupados++;
        } else {
          acc.disponibles++;
        }

        return acc;
      },
      {
        total: 0,
        disponibles: 0,
        ocupados: 0,
      }
    );

    return {
      grouped,
      stats,
    };
  }, [spaces, estadoFiltro]);

  const filters = [
    {
      value: "all",
      label: t.filters.all,
    },
    {
      value: "available",
      label: t.filters.available,
    },
    {
      value: "occupied",
      label: t.filters.occupied,
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* HEADER */}
      <div className="mb-6 space-y-6">
        <h1 className="text-3xl font-bold">
          {t.header.title}
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          <StatCard
            title={t.stats.total}
            value={stats.total}
          />

          <StatCard
            title={t.stats.available}
            value={stats.disponibles}
          />

          <StatCard
            title={t.stats.occupied}
            value={stats.ocupados}
          />
        </div>

        {/* FILTROS */}
        <div className="flex gap-4 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() =>
                setEstadoFiltro(filter.value)
              }
              className={`
                px-4 py-2
                rounded-full
                text-sm
                font-medium
                transition

                ${
                  estadoFiltro === filter.value
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* ESPACIOS AGRUPADOS */}
      {Object.entries(grouped)
        .reverse()
        .map(([piso, groupedSpaces]) => (
          <Section
            key={piso}
            title={
              t.locations?.[piso] ??
              piso
            }
          >
            <Grid
              spaces={groupedSpaces}
              onClick={setSelectedSpace}
              t={t}
            />
          </Section>
        ))}

      {/* MODALES */}
      {selectedSpace &&
        (!isBooking ? (
          <CoworkingModal
            space={selectedSpace}
            onClose={closeModal}
            onStartBooking={() => {
              setIsBooking(true);
            }}
            t={t}
          />
        ) : (
          <BookingFlow
            space={selectedSpace}
            onClose={closeModal}
            userId={userId}
            t={t}
            locale={locale}
          />
        ))}
    </main>
  );
}

/* ================= GRID ================= */

function Grid({ spaces, onClick, t }) {
  return (
    <AnimatePresence>
      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))]">
        {spaces.map((space) => (
          <motion.div
            key={space.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <CoworkingSiteCard
              space={space}
              onClick={() =>
                onClick(space)
              }
              t={t}
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
}

/* ================= SECTION ================= */

function Section({
  title,
  children,
}) {
  return (
    <section
      className="
        bg-slate-50
        border border-slate-200
        rounded-xl
        p-6
        space-y-6
        mb-6
      "
    >
      <h3
        className="
          text-xl
          font-semibold
          capitalize
        "
      >
        {title}
      </h3>

      {children}
    </section>
  );
}

/* ================= STATS ================= */

function StatCard({
  title,
  value,
}) {
  return (
    <div
      className="
        flex justify-between items-center
        px-6 py-3
        border border-black
        rounded-[10px]
        bg-white/80
        hover:shadow-lg
        transition-shadow
      "
    >
      <span className="text-sm">
        {title}
      </span>

      <span className="text-2xl font-bold">
        {value}
      </span>
    </div>
  );
}

export default CoworkingClient;