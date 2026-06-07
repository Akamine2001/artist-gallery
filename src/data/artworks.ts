import type { ImageMetadata } from "astro";
import rose from "../assets/LLM-Rose_stem.png";
import sakura from "../assets/LLM-sakura_stem.png";
import futureRelics from "../assets/IMG_5474.jpeg";

export interface Artwork {
  title: string;
  caption: string;
  image: ImageMetadata;
}

export const artworks: Artwork[] = [
  { title: "classic love", caption: "Paris, France @rose · 2022", image: rose },
  { title: "spring", caption: "Tokyo, Japan @sakura · 2023", image: sakura },
  {
    title: "Future Relics",
    caption: "Okinawa, Japan @fuuma Installation",
    image: futureRelics,
  },
];
