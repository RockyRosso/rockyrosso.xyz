import type { Project } from "./types";

export const projects: Project[] = [
    {
        type: "gallery",

        title: "Convert4.me Icons",
        description:
            "Icons for the convert4.me site.",

        media: [
            {
                image: "https://cdn.rockyrosso.xyz/showcases/logos/01_c4me_icon.png",
            },
            {
                image: "https://cdn.rockyrosso.xyz/showcases/logos/01_c4me_title_icon.png",
            },
        ],
    },
    {
        type: "gallery",

        title: "Filler Games Icons",
        description:
            "Icons for a (for now) discontinued Roblox game development group.",

        media: [
            {
                image: "https://cdn.rockyrosso.xyz/showcases/logos/01_filler_games_icon.png",
            },
            {
                image: "https://cdn.rockyrosso.xyz/showcases/logos/01_filler_games_icon_text.png",
            },
        ],
    },
];
