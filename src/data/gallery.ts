export interface GalleryItem {
  title: string;
  description: string;
  status: string;
  comingSoon: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Minimal",
    description: "Whitespace-driven, monochrome typography.",
    status: "Upcoming",
    comingSoon: true,
  },
  {
    title: "Editorial",
    description: "Magazine-like layout, serif-led elegance.",
    status: "Upcoming",
    comingSoon: true,
  },
  {
    title: "Brutalist",
    description: "Bold typography, raw grid, intentional friction.",
    status: "Upcoming",
    comingSoon: true,
  },
  {
    title: "Soft / Pastel",
    description: "Gentle palette, rounded forms, friendly tone.",
    status: "Upcoming",
    comingSoon: true,
  },
  {
    title: "Dark / Cyber",
    description: "Deep background, neon accents, futuristic feel.",
    status: "Upcoming",
    comingSoon: true,
  },
  {
    title: "Magazine",
    description: "Photo-led, grid-based, narrative spread.",
    status: "Upcoming",
    comingSoon: true,
  },
];
