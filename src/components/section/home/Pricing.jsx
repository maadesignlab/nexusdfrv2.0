"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function Pricing({ t }) {
  const header = useScrollAnimation();
  const cards = useScrollAnimation();
  const summary = useScrollAnimation();

  const [activePlan, setActivePlan] =
    useState("basic");

  const plans = t.plans;

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* ===== HEADER ===== */}
      <header
        ref={header.ref}
        className={`
          max-w-2xl mb-12 space-y-3
          transition-all duration-500 ease-out
          ${
            header.visible
              ? "opacity-100 translate-y-0"
              : ""
          }
        `}
      >
        <h2 className="title-h2">
          {t.title}
        </h2>

        <p className="text-slate-600">
          {t.description}
        </p>
      </header>

      {/* ===== TABS ===== */}
      <div
        ref={cards.ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-0"
      >
        {Object.entries(plans).map(
          ([key, plan], i) => (
            <article
              key={key}
              onClick={() =>
                setActivePlan(key)
              }
              style={{
                animationDelay: `${i * 120}ms`,
              }}
              className={`
                btn-tab
                animate-fade-up
                ${
                  activePlan === key
                    ? "is-active"
                    : ""
                }
              `}
            >
              <div
                className={`
                  price-badge transition-all duration-300
                  ${
                    activePlan === key
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-700"
                  }
                `}
              >
                {plan.price}

                <span className="text-xs font-normal ml-0.5">
                  {plan.period}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {plan.title}
              </h3>

              <p className="text-sm text-slate-600">
                {plan.description}
              </p>
            </article>
          )
        )}
      </div>

      {/* ===== SUMMARY ===== */}
      <aside
        ref={summary.ref}
        className="
          animate-fade-up
          rounded-b-2xl rounded-t-2xl
          md:rounded-t-none
          border border-border-light
          relative z-30
          bg-slate-200
          p-8
          space-y-6
          shadow-updeep
          md:-mt-3
          mt-3
        "
      >
        <h4 className="text-lg font-semibold">
          {t.summarytitle}
        </h4>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <li>
            <span className="text-sm text-slate-500">
              {t.labels.books}
            </span>

            <span className="block text-xl font-semibold">
              {plans[activePlan].books}
            </span>
          </li>

          <li>
            <span className="text-sm text-slate-500">
              {t.labels.quality}
            </span>

            <span className="block text-xl font-semibold">
              {plans[activePlan].quality}
            </span>
          </li>

          <li>
            <span className="text-sm text-slate-500">
              {t.labels.format}
            </span>

            <span className="block text-xl font-semibold">
              {plans[activePlan].format}
            </span>
          </li>

          <li>
            <span className="text-sm text-slate-500">
              {t.labels.coworking}
            </span>

            <span className="block text-xl font-semibold">
              {plans[activePlan].coworking}
            </span>
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default Pricing;
