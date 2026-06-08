"use client";

import {
  MapPin,
  Users,
  Building2,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

function CoworkingModal({
  space,
  onClose,
  onStartBooking,
}) {
  if (!space) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/40
        backdrop-blur-[2px]
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full max-w-3xl
          bg-[#f4f7f9]
          rounded-[24px]
          p-8 md:p-10
          shadow-2xl
        "
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6
            text-2xl font-bold
            text-slate-600
            hover:text-slate-900
            transition-colors
          "
        >
          ×
        </button>

        {/* HEADER */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            {space.ocupado ? (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-red-500">
                  Ocupado actualmente
                </span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-600">
                  Disponible
                </span>
              </>
            )}
          </div>

          <h2
            className="
              text-3xl
              font-bold
              text-slate-900
              tracking-tight
            "
          >
            {space.nombre}
          </h2>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-[320px_1fr] gap-10">
          {/* INFO */}
          <div className="space-y-4">
            <div
              className="
                bg-white
                border border-slate-200
                rounded-2xl
                p-5
                space-y-5
              "
            >
              <InfoRow
                icon={<Building2 size={18} />}
                label="Tipo"
                value={space.tipo}
              />

              <InfoRow
                icon={<Users size={18} />}
                label="Capacidad"
                value={`${space.capacidad} persona${
                  space.capacidad > 1 ? "s" : ""
                }`}
              />

              <InfoRow
                icon={<MapPin size={18} />}
                label="Ubicación"
                value={space.ubicacion}
              />
            </div>
          </div>

          {/* RESERVA */}
          <div className="flex flex-col justify-between">
            <div>
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                  mb-2
                "
              >
                Reserva este espacio
              </h3>

              <p className="text-slate-500 leading-relaxed">
                Selecciona fecha, horario y duración
                en el siguiente paso para completar
                tu reserva.
              </p>

              <div
                className="
                  mt-6
                  rounded-2xl
                  border border-slate-200
                  bg-white
                  p-5
                "
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <Clock3
                      size={18}
                      className="text-slate-500"
                    />

                    <div>
                      <p className="text-sm text-slate-500">
                        Horario de atención
                      </p>

                      <p className="font-semibold text-slate-900">
                        08:00 - 20:00
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Duración máxima
                    </p>

                    <p className="font-semibold text-slate-900">
                      8 horas
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Estado actual
                    </p>

                    <p
                      className={`font-semibold ${
                        space.ocupado
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {space.ocupado
                        ? "Ocupado"
                        : "Disponible"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onStartBooking}
              className="
                mt-8
                w-full
                h-14
                rounded-2xl
                bg-[#0f172a]
                text-white
                font-semibold
                hover:bg-black
                transition-colors
              "
            >
              Reservar espacio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-slate-500">
        {icon}
      </div>

      <div>
        <p className="text-xs text-slate-500">
          {label}
        </p>

        <p className="font-medium text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default CoworkingModal;