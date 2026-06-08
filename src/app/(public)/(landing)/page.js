import { redirect } from "next/navigation";

import Hero from "@/components/section/home/Hero";
import Services from "@/components/section/home/Services";
import Pricing from "@/components/section/home/Pricing";

import { auth0 } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1">
        <section className="pt-10">
          <Hero />
        </section>

        <section className="mt-20">
          <Services />
        </section>

        <section className="mt-24 mb-10">
          <Pricing />
        </section>
      </main>
    </div>
  );
}