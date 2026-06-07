export interface GalleryItem {
  title: string;
  description: string;
  comingSoon: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Minimal",
    description: "Whitespace-driven, monochrome typography.",
    comingSoon: true,
  },
  {
    title: "Editorial",
    description: "Magazine-like layout, serif-led elegance.",
    comingSoon: true,
  },
  {
    title: "Brutalist",
    description: "Bold typography, raw grid, intentional friction.",
    comingSoon: true,
  },
  {
    title: "Soft / Pastel",
    description: "Gentle palette, rounded forms, friendly tone.",
    comingSoon: true,
  },
  {
    title: "Dark / Cyber",
    description: "Deep background, neon accents, futuristic feel.",
    comingSoon: true,
  },
  {
    title: "Magazine",
    description: "Photo-led, grid-based, narrative spread.",
    comingSoon: true,
  },
];
