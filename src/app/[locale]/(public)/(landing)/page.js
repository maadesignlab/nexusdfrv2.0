import { redirect } from "next/navigation";
import { getTranslations } from "@/lib/translations";

import Hero from "@/components/section/home/Hero";
import Services from "@/components/section/home/Services";
import Pricing from "@/components/section/home/Pricing";

import { auth0 } from "@/lib/auth0";

export default async function Home({ params }) {
  const { locale } = await params;

  const session = await auth0.getSession();

  if (session) {
    redirect(`/${locale}/dashboard`);
  }

  const t = await getTranslations(locale);

  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1">
        <section className="pt-10">
          <Hero t={t.landing.hero} />
        </section>

        <section className="mt-20">
          <Services t={t.landing.services} />
        </section>

        <section className="mt-24 mb-10">
          <Pricing t={t.landing.pricing} />
        </section>
      </main>
    </div>
  );
}