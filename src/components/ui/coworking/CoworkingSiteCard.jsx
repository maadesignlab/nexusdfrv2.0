"use client";

import {
  MapPin,
  Users,
  Building2,
  ArrowRight,
} from "lucide-react";

function CoworkingSiteCard({
  space,
  onClick,
}) {
  if (!space) return null;

  const estaOcupado =
    space.ocupado;

  return (
    <article
      onClick={onClick}
      className="
        group
        relative
        flex flex-col
        p-5
        rounded-2xl
        border border-slate-200
        bg-white
        cursor-pointer

        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-slate-300
      "
    >
      {/* STATUS */}
      <div className="mb-5">
        <span
          className={`
            inline-flex
            items-center
            gap-2
            px-3 py-1
            rounded-full
            text-xs
            font-semibold

            ${
              estaOcupado
                ? "bg-red-50 text-red-600"
                : "bg-green-50 text-green-600"
            }
          `}
        >
          <span
            className={`
              w-2 h-2 rounded-full

              ${
                estaOcupado
                  ? "bg-red-500"
                  : "bg-green-500"
              }
            `}
          />

          {estaOcupado
            ? "Ocupado"
            : "Disponible"}
        </span>
      </div>

      {/* TITLE */}
      <div className="mb-5">
        <h3
          className="
            text-lg
            font-semibold
            text-slate-900
            leading-tight
          "
        >
          {space.nombre}
        </h3>

        <div
          className="
            mt-2
            flex items-center gap-2
            text-sm text-slate-500
          "
        >
          <MapPin
            size={14}
          />

          <span>
            {space.ubicacion}
          </span>
        </div>
      </div>

      {/* INFO */}
      <div className="space-y-3">
        <div
          className="
            flex items-center gap-3
            text-sm
          "
        >
          <Building2
            size={16}
            className="text-slate-400"
          />

          <span className="text-slate-700">
            {space.tipo}
          </span>
        </div>

        <div
          className="
            flex items-center gap-3
            text-sm
          "
        >
          <Users
            size={16}
            className="text-slate-400"
          />

          <span className="text-slate-700">
            {space.capacidad} persona
            {space.capacidad > 1
              ? "s"
              : ""}
          </span>
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          mt-6
          pt-4
          border-t border-slate-100
        "
      >
        <div
          className="
            flex items-center justify-between
            text-sm font-medium
          "
        >
          <span
            className={
              estaOcupado
                ? "text-slate-400"
                : "text-slate-900"
            }
          >
            {estaOcupado
              ? "Ver información"
              : "Reservar espacio"}
          </span>

          <ArrowRight
            size={16}
            className="
              transition-transform
              group-hover:translate-x-1
            "
          />
        </div>
      </div>
    </article>
  );
}

export default CoworkingSiteCard;