import type { Project } from "./types";

export const projects: Project[] = [
    {
        type: "link",

        title: "Convert4.me",
        description:
            "A website for converting posts from Twitter, Instagram, and YouTube into almost any playable media format",

        image: "https://cdn.rockyrosso.xyz/ss/01_convert4.me_web_ss.png",
        link: "https://convert4.me",

        madeWith: [
            {
                title: "Nuxt",
                link: "https://nuxt.com/",
                description: "(Fullstack Framework)",
            },
            {
                title: "Amazon S3",
                link: "https://aws.amazon.com/s3/",
                description: "(Downloaded media cache)",
            },
            {
                title: "Flask",
                link: "https://flask.palletsprojects.com/en/stable/",
                description: "(Video prosessor and downloader API)",
            },
            {
                title: "yt_dlp",
                link: "https://github.com/yt-dlp/yt-dlp",
                description: "(YouTube video downloader)",
            },
        ],
    },

    {
        type: "link",

        title: "Mental Health Campaign",
        description:
            "A website created for a school project about campaigning for mental health awareness.",

        image: "https://cdn.rockyrosso.xyz/ss/01_mentalhealth_web_ss.png",
        link: "https://mental-health-campaign-portfolio.netlify.app",

        madeWith: [
            {
                title: "Nuxt",
                link: "https://nuxt.com/",
                description: "(Frontend Client)",
            },
        ],
    },

    {
        type: "link",

        title: "School Schedule",
        description:
            "A website created for my school. Tracks upcoming and current classes via timers.",

        image: "https://cdn.rockyrosso.xyz/ss/01_schoolschedule_web_ss.png",
        link: "https://school-schedule-web-portfolio.netlify.app",

        madeWith: [
            {
                title: "Nuxt",
                link: "https://nuxt.com/",
                description: "(Frontend Client)",
            },
            {
                title: "MongoDB",
                link: "https://www.mongodb.com/",
                description: "(Storage for schedule)",
            },
            {
                title: "Express.JS",
                link: "https://expressjs.com/",
                description: "(Backend API)",
            },
        ],
    },

    {
        type: "gallery",

        title: "Funni Forum",
        description:
            "A forum website with the ability for users to post about specific topics, and engage with other posts using likes and comments. The site has been offline since mid 2024.",

        media: [
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/forum-1.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/forum-2.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/forum-3.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/forum-4.mp4",
            },
        ],

        madeWith: [
            {
                title: "Nuxt",
                link: "https://nuxt.com/",
                description: "(Frontend and backend client)",
            },
            {
                title: "Amazon S3",
                link: "https://aws.amazon.com/s3/",
                description: "(File storage)",
            },
            {
                title: "Flask",
                link: "https://flask.palletsprojects.com/en/stable/",
                description: "(Video and image prosessor)",
            },
            {
                title: "PostgreSQL",
                link: "https://www.postgresql.org/",
                description: "(Storage for all user data and post data)",
            },
            {
                title: "Prisma ORM",
                link: "https://www.prisma.io/",
                description: "(Interface for database)",
            },
        ],
    },

    {
        type: "gallery",

        title: "Anti Raid Discord Bot",
        description:
            "A bot for Discord which would monitor user activity to detect for any possible attempts to raid or destroy a Discord server. The bot also allowed extensive configuration for admins.",

        media: [
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/anitraid-bot-antiraid.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/antiraid-bot-settings.mp4",
            },
        ],

        madeWith: [
            {
                title: "Oceanic.JS",
                link: "https://oceanic.ws/",
                description: "(Interface for Discord API)",
            },
            {
                title: "Firebase Firestore",
                link: "https://firebase.google.com/docs/firestore",
                description: "(Storage for bot configurations)",
            },
        ],
    },

    {
        type: "gallery",

        title: "Roblox Platformer Movement",
        description:
            "Movement for a discontinued Roblox platformer project. Movement features included: double jumping, wall jumping, dashing, high jump, long jump, crouching, and even a zip line to ride on.",

        media: [
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/platformer-showcase-1.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/platformer-showcase-2.mp4",
            },
        ],

        madeWith: [
            {
                title: "Roblox Studio",
                link: "https://create.roblox.com/docs/studio",
                description: "(Roblox's proprietary game engine)",
            },
        ],
    },

    {
        type: "gallery",

        title: "Roblox Tower Defense Game",
        description:
            "A discontinued Roblox game which would allow players to place different types of towers to defeat enemey's. Each tower had their own unique ability as well as differences in damage, cooldown, etc.",

        media: [
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/tower_defense_1.mp4",
            },
            {
                videoLink:
                    "https://cdn.rockyrosso.xyz/projects/videos/tower_defense_2.mp4",
            },
        ],

        madeWith: [
            {
                title: "Roblox Studio",
                link: "https://create.roblox.com/docs/studio",
                description: "(Roblox's proprietary game engine)",
            },
        ],
    },
];
