// src/lib/intl.js

const localeMap = {
  es: "es-CO",
  en: "en-US",
  it: "it-IT",
  fr: "fr-FR",
  de: "de-DE",
};

export function getLocale(
  locale = "es"
) {
  return (
    localeMap[locale] ||
    localeMap.es
  );
}

export function formatPrice(
  value,
  locale = "es"
) {
  return `$${new Intl.NumberFormat(
    getLocale(locale)
  ).format(
    Number(value || 0)
  )}`;
}

export function formatNumber(
  value,
  locale = "es"
) {
  return new Intl.NumberFormat(
    getLocale(locale)
  ).format(
    Number(value || 0)
  );
}

export function formatDate(
  value,
  locale = "es"
) {
  return new Intl.DateTimeFormat(
    getLocale(locale),
    {
      dateStyle: "long",
    }
  ).format(
    new Date(value)
  );
}

export function formatShortDate(
  value,
  locale = "es"
) {
  return new Intl.DateTimeFormat(
    getLocale(locale),
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  ).format(
    new Date(value)
  );
}

export function formatTime(
  value,
  locale = "es"
) {
  if (!value) return "-";

  const isEnglish =
    locale === "en";

  return new Intl.DateTimeFormat(
    getLocale(locale),
    {
      hour: "numeric",
      minute: "2-digit",
      hour12: isEnglish,
    }
  ).format(
    new Date(value)
  );
}

export function formatDateTime(
  value,
  locale = "es"
) {
  if (!value) return "-";

  const isEnglish =
    locale === "en";

  return new Intl.DateTimeFormat(
    getLocale(locale),
    {
      dateStyle: "medium",
      timeStyle: "short",
      hour12: isEnglish,
    }
  ).format(
    new Date(value)
  );
}