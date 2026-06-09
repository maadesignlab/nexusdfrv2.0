import es from "@/messages/es.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";
import de from "@/messages/de.json";
import it from "@/messages/it.json";

export const translations = {
  es,
  en,
  fr,
  de,
  it,
};

export function getTranslations(locale) {
  return translations[locale] || translations.es;
}