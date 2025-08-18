import type { Language } from "../types/Language";

/**
 * Converts a locale string into a supported Language type.
 *
 * @param locale - The current locale (e.g. 'en', 'zh').
 * @returns The matching Language type ('en' | 'zh').
 */
export function toLanguage(locale: string|undefined): Language {
  if (locale === "zh" || locale === "en") {
    return locale;
  }
  return "en"; // default fallback
}
