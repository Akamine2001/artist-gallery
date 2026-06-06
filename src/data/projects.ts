import type { ImageMetadata } from "astro";
import randomObject from "../assets/IMG_0010.jpeg";
import twoLeg from "../assets/IMG_0051.jpeg";
import futureRelics from "../assets/IMG_5474.jpeg";

export interface Project {
    title: string;
    caption: string;
    image: ImageMetadata;
}

export const projects: Project[] = [
    { title: "random object", caption: "rando Project · 2022",       image: randomObject },
    { title: "two leg",       caption: "self balancing Exhibition",  image: twoLeg },
    { title: "Future Relics", caption: "fuuma Installation",         image: futureRelics },
];
