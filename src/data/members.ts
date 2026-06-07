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
    name: { ja: "ジロウ", en: "Jiro", zh: "次郎" },
    role: {
      ja: "ハードウェアエンジニア",
      en: "hardware engineer",
      zh: "硬件工程师",
    },
    image: icon,
  },
  {
    name: { ja: "アカイ", en: "Akai", zh: "赤井" },
    role: {
      ja: "ミュージックプロデューサー",
      en: "music producer",
      zh: "音乐制作人",
    },
    image: icon,
  },
  {
    name: { ja: "ハナ", en: "Hana", zh: "花" },
    role: {
      ja: "インタラクティブアーティスト",
      en: "interactive artist",
      zh: "互动艺术家",
    },
    image: icon,
  },
  {
    name: { ja: "タイト", en: "Taito", zh: "泰斗" },
    role: {
      ja: "ソフトウェアエンジニア",
      en: "software engineer",
      zh: "软件工程师",
    },
    image: icon,
  },
  {
    name: { ja: "アキラ", en: "Akira", zh: "明" },
    role: {
      ja: "パブリックリレーションズ",
      en: "public relations",
      zh: "公共关系",
    },
    image: icon,
  },
  {
    name: { ja: "ユウちゃん", en: "Yu-chan", zh: "小优" },
    role: {
      ja: "電気エンジニア",
      en: "electrical engineer",
      zh: "电气工程师",
    },
    image: icon,
  },
  {
    name: { ja: "ケイラ", en: "Kayla", zh: "凯拉" },
    role: {
      ja: "国際渉外",
      en: "international relations",
      zh: "国际事务",
    },
    image: icon,
  },
  {
    name: { ja: "ダニカ", en: "Danica", zh: "丹妮卡" },
    role: {
      ja: "ペイントアーティスト",
      en: "paint artist",
      zh: "绘画艺术家",
    },
    image: icon,
  },
];
