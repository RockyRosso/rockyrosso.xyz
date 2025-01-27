import { defineConfig, passthroughImageService } from "astro/config";

import vue from "@astrojs/vue";

export default defineConfig({
    integrations: [vue()],

    devToolbar: { enabled: false },

    server: {
        port: 3000,
    },

    image: {
        service: passthroughImageService()
    },

    vite: {
        css: {
            transformer: "postcss",

            preprocessorOptions: {
                scss: {
                    api: "modern-compiler",
                },
            },
        },
    },
});
