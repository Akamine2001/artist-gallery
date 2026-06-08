import { Converter } from "opencc-js";
import type { Locale } from "./config";

export type LocalizedString = {
  ja: string;
  en: string;
  "zh-Hans": string;
  "zh-Hant"?: string;
};

const s2t = Converter({ from: "cn", to: "twp" });

export function toHant(text: string): string {
  return s2t(text);
}

export function pick(value: LocalizedString, lang: Locale): string {
  if (lang === "zh-Hant") {
    return value["zh-Hant"] ?? s2t(value["zh-Hans"]);
  }
  return value[lang];
}

export function localizedPath(lang: Locale): string {
  return `${import.meta.env.BASE_URL}${lang}/`;
}
