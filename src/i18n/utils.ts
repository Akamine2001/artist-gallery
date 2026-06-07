import type { Locale } from "./config";

export type LocalizedString = Record<Locale, string>;

export function pick(value: LocalizedString, lang: Locale): string {
  return value[lang];
}

export function localizedPath(lang: Locale): string {
  return `${import.meta.env.BASE_URL}${lang}/`;
}
