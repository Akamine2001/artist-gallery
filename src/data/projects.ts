import type { ImageMetadata } from "astro";
import rose from "../assets/LLM-Rose_stem.png";
import sakura from "../assets/LLM-sakura_stem.png";
import futureRelics from "../assets/IMG_5474.jpeg";

export interface Project {
    title: string;
    caption: string;
    image: ImageMetadata;
}

export const projects: Project[] = [
    { title: "classic love", caption: "rose · 2022",       image: rose },
    { title: "spring",       caption: "sakura",  image: sakura },
    { title: "Future Relics", caption: "fuuma Installation",         image: futureRelics },
];
