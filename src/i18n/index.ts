import { en } from "./en";
import { es } from "./es";
import type { Translations } from "./types";

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const translations: Record<Locale, Translations> = {
  en,
  es,
};

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es";
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}

/** Localized href for a navigation section anchor. */
export function sectionHref(locale: Locale, sectionId: string): string {
  return `/${locale}/#${sectionId}`;
}

/** Localized href for a project detail page. */
export function projectHref(locale: Locale, slug: string): string {
  const base = locale === "en" ? "projects" : "proyectos";
  return `/${locale}/${base}/${slug}`;
}

/** Localized href for any localized path within the locale ("" = home). */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    const normalized = clean.replace(/^\/proyectos/, "/projects");
    return normalized === "" || normalized === "/" ? "/en" : `/en${normalized}`;
  }
  const normalized = clean.replace(/^\/projects/, "/proyectos");
  return normalized === "" || normalized === "/" ? "/es" : `/es${normalized}`;
}
