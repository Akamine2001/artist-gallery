import type { ImageMetadata } from "astro";
import rose from "../assets/LLM-Rose_stem.png";
import sakura from "../assets/LLM-sakura_stem.png";
import futureRelics from "../assets/IMG_5474.jpeg";
import type { LocalizedString } from "../i18n/utils";

export interface Artwork {
  title: LocalizedString;
  caption: LocalizedString;
  image: ImageMetadata;
}

export const artworks: Artwork[] = [
  {
    title: {
      ja: "クラシック・ラブ",
      en: "classic love",
      zh: "经典之爱",
    },
    caption: {
      ja: "フランス・パリ @rose · 2022",
      en: "Paris, France @rose · 2022",
      zh: "法国 巴黎 @rose · 2022",
    },
    image: rose,
  },
  {
    title: {
      ja: "春",
      en: "spring",
      zh: "春",
    },
    caption: {
      ja: "日本・東京 @sakura · 2023",
      en: "Tokyo, Japan @sakura · 2023",
      zh: "日本 东京 @sakura · 2023",
    },
    image: sakura,
  },
  {
    title: {
      ja: "未来の遺物",
      en: "Future Relics",
      zh: "未来遗物",
    },
    caption: {
      ja: "日本・沖縄 @fuuma インスタレーション",
      en: "Okinawa, Japan @fuuma Installation",
      zh: "日本 冲绳 @fuuma 装置艺术",
    },
    image: futureRelics,
  },
];
