export interface Project {
    type: "link" | "video" | "image" | "gallery";

    title: string;
    description: string;

    image?: string;
    link?: string;

    videoLink?: string;
    embed?: boolean;

    media?: Array<Media>;

    madeWith?: Array<Tool>;
}

type Media = {
    image?: string;
    videoLink?: string;
};

type Tool = {
    title: string;
    link: string;

    description?: string;
};
