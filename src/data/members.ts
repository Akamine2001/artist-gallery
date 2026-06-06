import type { ImageMetadata } from "astro";
import icon from "../assets/icon.png";

export interface Member {
    name: string;
    role: string;
    image: ImageMetadata;
}

export const members: Member[] = [
    { name: "ジロウ",     role: "hardware engineer",       image: icon },
    { name: "アカイ",     role: "music producer",          image: icon },
    { name: "ハナ",       role: "interactive Artist",      image: icon },
    { name: "タイト",     role: "software engineer",       image: icon },
    { name: "アキラ",     role: "public relation",         image: icon },
    { name: "ユウちゃん", role: "electrical engineer",     image: icon },
    { name: "ケイラ",     role: "international relations", image: icon },
    { name: "ダニカ",     role: "paint artist",            image: icon },
];
