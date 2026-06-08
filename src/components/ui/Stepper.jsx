"use client";

import { Check } from "lucide-react";

export default function Stepper({
  step = 1,
  onChange,
  clickable = true,
  steps = ["Seleccionar", "Datos", "Confirmar"],
}) {
  const progress =
    steps.length > 1
      ? ((step - 1) / (steps.length - 1)) * 100
      : 0;

  return (
    <div className="w-full py-8">
      <div className="relative">
        {/* Línea base */}
        <div
          className="
            absolute
            top-5
            left-0
            right-0
            h-[3px]
            bg-slate-200
            rounded-full
          "
        />

        {/* Línea progreso */}
        <div
          className="
            absolute
            top-5
            left-0
            h-[3px]
            bg-[#fae100]
            rounded-full
            transition-all
            duration-500
            ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        />

        {/* Steps */}
        <div className="relative flex justify-between">
          {steps.map((label, i) => {
            const num = i + 1;

            const isActive = step === num;
            const isCompleted = step > num;

            return (
              <div
                key={num}
                className="
                  flex-1
                  flex
                  flex-col
                  items-center
                  min-w-0
                "
              >
                <button
                  type="button"
                  disabled={!clickable}
                  onClick={() =>
                    clickable && onChange?.(num)
                  }
                  className={`
                    relative z-10
                    w-10 h-10
                    shrink-0
                    rounded-full
                    flex items-center justify-center
                    text-sm font-bold
                    transition-all duration-300

                    ${
                      clickable
                        ? "cursor-pointer"
                        : "cursor-default"
                    }

                    ${
                      isCompleted
                        ? "bg-[#b09600] text-white"
                        : isActive
                        ? `
                          bg-[#fae100]
                          text-slate-900
                          scale-110
                          ring-4
                          ring-yellow-100
                        `
                        : `
                          bg-white
                          border-2
                          border-slate-300
                          text-slate-500
                        `
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check
                      className="w-5 h-5"
                      strokeWidth={3}
                    />
                  ) : (
                    num
                  )}
                </button>

                <span
                  className={`
                    mt-3
                    px-2
                    max-w-[140px]
                    text-center
                    leading-tight
                    text-xs sm:text-sm
                    transition-colors

                    ${
                      isActive
                        ? "font-semibold text-slate-900"
                        : isCompleted
                        ? "text-slate-700"
                        : "text-slate-400"
                    }
                  `}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}