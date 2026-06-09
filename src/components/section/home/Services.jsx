"use client";

import { useEffect, useState } from "react";

function Services({ t }) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const services = [
    {
      title: t.library.title,
      desc: t.library.description,
      image: "/img/home-services/1.jpg",
    },
    {
      title: t.coworking.title,
      desc: t.coworking.description,
      image: "/img/home-services/2.jpg",
    },
    {
      title: t.events.title,
      desc: t.events.description,
      image: "/img/home-services/3.jpg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (prev) =>
          (prev + 1) %
          services.length
      );
    }, 4000);

    return () =>
      clearInterval(interval);
  }, [services.length]);

  return (
    <section
      id="servicios"
      className="w-full py-20"
    >
      {/* HEADER */}
      <header className="max-w-7xl mx-auto px-6 mb-12 animate-fade-up">
        <h2 className="title-h2">
          {t.title}
        </h2>

        <p className="mt-3 text-slate-600 max-w-2xl">
          {t.description}
        </p>
      </header>

      {/* CONTENEDOR */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-slate-100 p-8 md:p-12 border border-border-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* IZQUIERDA */}
            <div className="grid gap-6">
              {services.map(
                (service, i) => {
                  const isActive =
                    i === activeIndex;

                  return (
                    <button
                      key={service.title}
                      onClick={() =>
                        setActiveIndex(i)
                      }
                      style={{
                        animationDelay: `${i * 140}ms`,
                      }}
                      className={`
                        animate-fade-up
                        text-left
                        cursor-pointer
                        rounded-2xl
                        p-6
                        bg-white
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "ring-2 ring-brand-500 shadow-lg"
                            : "hover:-translate-y-1 hover:shadow-xl"
                        }
                      `}
                    >
                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </button>
                  );
                }
              )}
            </div>

            {/* DERECHA */}
            <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden bg-slate-200">
              {services.map(
                (service, i) => (
                  <img
                    key={service.image}
                    src={service.image}
                    alt={service.title}
                    className={`
                      absolute inset-0
                      w-full h-full
                      object-cover
                      transition-all
                      duration-700
                      ease-out
                      ${
                        i === activeIndex
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-105"
                      }
                    `}
                  />
                )
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;