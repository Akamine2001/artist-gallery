import { defaultLocale, type Locale } from "./config";

const dict = {
  ja: {
    "nav.artwork": "作品",
    "nav.members": "メンバー",
    "nav.gallery": "ギャラリー",
    "nav.about": "私たちについて",
    "hero.title": "私たちは<br />自分たちの世界を忘れてしまった",
    "hero.lead":
      "ビジュアルストーリーテリングを通じて、架空の文明・歴史・文化を生み出すマルチディシプリナリー・アーティストコレクティブ。",
    "hero.cta": "見る",
    "about.title": "私たちについて",
    "about.body":
      "AGITO Studio は、ストーリーテリング、ワールドビルディング、ビジュアルアート、3D 制作、スペキュラティブデザインを軸とするアーティスト集団です。共同制作を通じて、存在しなかった世界の断片を構築し、その歴史を芸術として残しています。",
    "members.title": "メンバー",
    "gallery.title": "ギャラリー",
    "footer.copy": "© 2026 AGITO Studio",
  },
  en: {
    "nav.artwork": "Artwork",
    "nav.members": "Members",
    "nav.gallery": "Gallery",
    "nav.about": "About",
    "hero.title": "we<br />have forgotten our own world",
    "hero.lead":
      "A multidisciplinary artist collective creating fictional civilizations, histories, and cultures through visual storytelling.",
    "hero.cta": "Explore",
    "about.title": "about us",
    "about.body":
      "AGITO Studio is an artist collective focused on storytelling, worldbuilding, visual art, 3D production, and speculative design. Through collaborative creation, we build fragments of worlds that never existed, preserving their histories through art.",
    "members.title": "members",
    "gallery.title": "gallery",
    "footer.copy": "© 2026 AGITO Studio",
  },
  zh: {
    "nav.artwork": "作品",
    "nav.members": "成员",
    "nav.gallery": "画廊",
    "nav.about": "关于我们",
    "hero.title": "我们<br />已经遗忘了自己的世界",
    "hero.lead":
      "一个跨学科的艺术家集体，通过视觉叙事创造虚构的文明、历史与文化。",
    "hero.cta": "探索",
    "about.title": "关于我们",
    "about.body":
      "AGITO Studio 是一个艺术家集体，专注于叙事、世界构建、视觉艺术、3D 制作与推测性设计。通过协作创作，我们构建从未存在的世界的碎片，并以艺术的形式保存它们的历史。",
    "members.title": "成员",
    "gallery.title": "画廊",
    "footer.copy": "© 2026 AGITO Studio",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof dict)["ja"];

export function t(key: UIKey, lang: Locale): string {
  return dict[lang][key] ?? dict[defaultLocale][key];
}
