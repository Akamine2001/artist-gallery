import type { ImageMetadata } from "astro";
import rose from "../assets/LLM-Rose_stem.png";
import sakura from "../assets/LLM-sakura_stem.png";
import futureRelics from "../assets/IMG_5474.jpeg";
import type { LocalizedString } from "../i18n/utils";

export interface Artwork {
  slug: string;
  title: LocalizedString;
  caption: LocalizedString;
  image: ImageMetadata;
  year: string;
  medium: LocalizedString;
  dimensions: LocalizedString;
  overview: LocalizedString;
  background: LocalizedString;
  technique: LocalizedString;
}

const placeholderOverview: LocalizedString = {
  ja: "この作品の概要テキストは現在準備中です。コンセプト・モチーフ・展示意図などをここに記載します。",
  en: "Overview text for this work is being prepared. Concept, motif, and exhibition intent will be described here.",
  "zh-Hans":
    "本作品的概述文本正在准备中。概念、母题、展览意图等内容将记载于此。",
};

const placeholderBackground: LocalizedString = {
  ja: "制作背景の記述は現在準備中です。制作のきっかけ、参照、対話、リサーチの軌跡をここに残します。",
  en: "Background notes are being prepared. The origins, references, dialogues, and research traces will be recorded here.",
  "zh-Hans":
    "创作背景的描述正在准备中。创作起点、参考资料、对话与研究的轨迹将留存于此。",
};

const placeholderTechnique: LocalizedString = {
  ja: "素材・技法に関する記述は現在準備中です。使用素材、制作手法、表現手段の詳細を後ほど追加します。",
  en: "Notes on materials and technique are being prepared. Details on media, methods, and means of expression will be added.",
  "zh-Hans":
    "关于材料与技法的描述正在准备中。所用素材、制作方法、表现手段的细节将稍后补充。",
};

export const artworks: Artwork[] = [
  {
    slug: "classic-love",
    title: {
      ja: "クラシック・ラブ",
      en: "classic love",
      "zh-Hans": "经典之爱",
    },
    caption: {
      ja: "フランス・パリ @rose · 2022",
      en: "Paris, France @rose · 2022",
      "zh-Hans": "法国 巴黎 @rose · 2022",
    },
    image: rose,
    year: "2022",
    medium: {
      ja: "デジタル / ジクレー印刷",
      en: "Digital / Giclée print",
      "zh-Hans": "数字 / 艺术微喷",
    },
    dimensions: {
      ja: "可変サイズ",
      en: "Variable dimensions",
      "zh-Hans": "尺寸可变",
    },
    overview: placeholderOverview,
    background: placeholderBackground,
    technique: placeholderTechnique,
  },
  {
    slug: "spring",
    title: {
      ja: "春",
      en: "spring",
      "zh-Hans": "春",
    },
    caption: {
      ja: "日本・東京 @sakura · 2023",
      en: "Tokyo, Japan @sakura · 2023",
      "zh-Hans": "日本 东京 @sakura · 2023",
    },
    image: sakura,
    year: "2023",
    medium: {
      ja: "デジタル / 写真",
      en: "Digital / Photography",
      "zh-Hans": "数字 / 摄影",
    },
    dimensions: {
      ja: "可変サイズ",
      en: "Variable dimensions",
      "zh-Hans": "尺寸可变",
    },
    overview: placeholderOverview,
    background: placeholderBackground,
    technique: placeholderTechnique,
  },
  {
    slug: "future-relics",
    title: {
      ja: "未来の遺物",
      en: "Future Relics",
      "zh-Hans": "未来遗物",
    },
    caption: {
      ja: "日本・沖縄 @fuuma インスタレーション",
      en: "Okinawa, Japan @fuuma Installation",
      "zh-Hans": "日本 冲绳 @fuuma 装置艺术",
    },
    image: futureRelics,
    year: "2024",
    medium: {
      ja: "インスタレーション / 複合素材",
      en: "Installation / Mixed media",
      "zh-Hans": "装置艺术 / 综合材料",
    },
    dimensions: {
      ja: "サイトスペシフィック",
      en: "Site-specific",
      "zh-Hans": "因地制宜",
    },
    overview: placeholderOverview,
    background: placeholderBackground,
    technique: placeholderTechnique,
  },
];
