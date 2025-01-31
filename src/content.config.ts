import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
    loader: glob({ pattern: "**/**.md", base: "./src/content/blogs" }),

    schema: z.object({
        title: z.string(),
        date: z.string(),
        author: z.string(),

        cover: z.string(),

        slug: z.string()
    })
})

export const collections = { blogs };