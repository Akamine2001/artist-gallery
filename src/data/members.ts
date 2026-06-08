import type { ImageMetadata } from "astro";
import icon from "../assets/icon.png";
import type { LocalizedString } from "../i18n/utils";

export interface Member {
  name: LocalizedString;
  role: LocalizedString;
  image: ImageMetadata;
}

export const members: Member[] = [
  {
    name: { ja: "Shinjiro", en: "Shinjiro", "zh-Hans": "Shinjiro" },
    role: {
      ja: "ハードウェアエンジニア",
      en: "hardware engineer",
      "zh-Hans": "硬件工程师",
    },
    image: icon,
  },
  {
    name: { ja: "Akai", en: "Akai", "zh-Hans": "Akai" },
    role: {
      ja: "ミュージックプロデューサー",
      en: "music producer",
      "zh-Hans": "音乐制作人",
    },
    image: icon,
  },
  {
    name: { ja: "Hannah", en: "Hannah", "zh-Hans": "Hannah" },
    role: {
      ja: "インタラクティブアーティスト",
      en: "interactive artist",
      "zh-Hans": "互动艺术家",
    },
    image: icon,
  },
  {
    name: { ja: "Taito", en: "Taito", "zh-Hans": "Taito" },
    role: {
      ja: "ソフトウェアエンジニア",
      en: "software engineer",
      "zh-Hans": "软件工程师",
    },
    image: icon,
  },
  {
    name: { ja: "Akira", en: "Akira", "zh-Hans": "Akira" },
    role: {
      ja: "広報",
      en: "public relations",
      "zh-Hans": "公共关系",
    },
    image: icon,
  },
  {
    name: { ja: "Yu-chan", en: "Yu-chan", "zh-Hans": "Yu-chan" },
    role: {
      ja: "電気機械エンジニア",
      en: "electrical engineer",
      "zh-Hans": "电气工程师",
    },
    image: icon,
  },
  {
    name: { ja: "Cayla", en: "Cayla", "zh-Hans": "Cayla" },
    role: {
      ja: "国際交流",
      en: "international relations",
      "zh-Hans": "国际事务",
    },
    image: icon,
  },
  {
    name: { ja: "Danica", en: "Danica", "zh-Hans": "Danica" },
    role: {
      ja: "ペイントアーティスト",
      en: "paint artist",
      "zh-Hans": "绘画艺术家",
    },
    image: icon,
  },
];
