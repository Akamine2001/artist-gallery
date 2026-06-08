export const locales = ["en", "ja", "zh-Hans", "zh-Hant"] as const;
export type Locale = (typeof locales)[number];
export type SourceLocale = Exclude<Locale, "zh-Hant">;

export const defaultLocale: Locale = "ja";

export const localeLabels: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
};
