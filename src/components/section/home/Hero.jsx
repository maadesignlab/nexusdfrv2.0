"use client";

import Slider3D from "@/components/ui/home/Slider3D";

const heroImages = [
  "/img/home-slider/1.jpg",
  "/img/home-slider/2.jpg",
  "/img/home-slider/3.jpg",
];

function Hero({ t }) {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid gap-16 items-center lg:grid-cols-2 md:justify-center">
        {/* TEXTO */}
        <div className="max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left animate-fade-up">
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight animate-fade-up"
            style={{
              animationDelay: "100ms",
            }}
          >
            {t.title}
          </h1>

          <p
            className="text-slate-600 text-lg mt-6 animate-fade-up"
            style={{
              animationDelay: "200ms",
            }}
          >
            {t.description}
          </p>

          <a
            href="#servicios"
            className="btn-primary w-fit mt-6 animate-fade-up"
            style={{
              animationDelay: "300ms",
            }}
          >
            {t.cta}
          </a>
        </div>

        {/* SLIDER */}
        <div
          className="animate-fade-up"
          style={{
            animationDelay: "200ms",
          }}
        >
          <Slider3D images={heroImages} />
        </div>
      </div>
    </section>
  );
}

export default Hero;