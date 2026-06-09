"use client";

import { usePathname } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

export function useLocale() {
  const pathname = usePathname();

  const locale = pathname?.split("/")[1];

  return locale || defaultLocale;
}