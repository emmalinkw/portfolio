// @ts-check
import {defineConfig} from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
    site: "https://emmalinkw.github.io/",
    base: "/portfolio/",
    i18n: {
        locales: ["en", "zh"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false
        }
    },
    integrations: [
        sitemap(),
        mdx(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
