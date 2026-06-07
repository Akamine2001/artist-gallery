import type { LocalizedString } from "../i18n/utils";

export interface GalleryItem {
  title: LocalizedString;
  description: LocalizedString;
  status: LocalizedString;
  comingSoon: boolean;
}

const upcoming: LocalizedString = {
  ja: "近日公開",
  en: "Upcoming",
  zh: "即将推出",
};

export const galleryItems: GalleryItem[] = [
  {
    title: { ja: "ミニマル", en: "Minimal", zh: "极简" },
    description: {
      ja: "余白を活かしたモノクロタイポグラフィ。",
      en: "Whitespace-driven, monochrome typography.",
      zh: "以留白驱动的单色字体设计。",
    },
    status: upcoming,
    comingSoon: true,
  },
  {
    title: { ja: "エディトリアル", en: "Editorial", zh: "编辑设计" },
    description: {
      ja: "雑誌的なレイアウトとセリフ書体による上品さ。",
      en: "Magazine-like layout, serif-led elegance.",
      zh: "杂志式版面，衬线字体引领的优雅感。",
    },
    status: upcoming,
    comingSoon: true,
  },
  {
    title: { ja: "ブルータリスト", en: "Brutalist", zh: "粗野主义" },
    description: {
      ja: "大胆なタイポグラフィと粗いグリッド、意図的な摩擦。",
      en: "Bold typography, raw grid, intentional friction.",
      zh: "大胆字体、原始网格、刻意的张力。",
    },
    status: upcoming,
    comingSoon: true,
  },
  {
    title: {
      ja: "ソフト / パステル",
      en: "Soft / Pastel",
      zh: "柔和 / 粉彩",
    },
    description: {
      ja: "やさしい配色、丸みのある造形、親しみのあるトーン。",
      en: "Gentle palette, rounded forms, friendly tone.",
      zh: "柔和的色调、圆润的造型、亲切的氛围。",
    },
    status: upcoming,
    comingSoon: true,
  },
  {
    title: {
      ja: "ダーク / サイバー",
      en: "Dark / Cyber",
      zh: "暗黑 / 赛博",
    },
    description: {
      ja: "深い背景にネオンのアクセント、未来的な質感。",
      en: "Deep background, neon accents, futuristic feel.",
      zh: "深邃背景，霓虹点缀，未来主义气息。",
    },
    status: upcoming,
    comingSoon: true,
  },
  {
    title: { ja: "マガジン", en: "Magazine", zh: "杂志" },
    description: {
      ja: "写真主導のグリッドベース、物語的なスプレッド。",
      en: "Photo-led, grid-based, narrative spread.",
      zh: "图像主导，基于网格的叙事跨页。",
    },
    status: upcoming,
    comingSoon: true,
  },
];
