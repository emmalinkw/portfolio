import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import type { icons as lucideIcons } from '@iconify-json/lucide/icons.json';

const other = defineCollection({
    loader: glob({ base: "src/content/other", pattern: "**/*.{md,mdx}" }),
});

const lucideIconSchema = z.object({
    type: z.literal("lucide"),
    name: z.custom<keyof typeof lucideIcons>(),
});

const quickInfo = defineCollection({
    loader: file("src/content/01-info.json"),
    schema: z.object({
        id: z.number(),
        icon: lucideIconSchema,
        text: z.string(),
    })
});

const socials = defineCollection({
    loader: file("src/content/02-socials.json"),
    schema: z.object({
        id: z.number(),
        icon: lucideIconSchema,
        text: z.string(),
        link: z.string().url(),
    })
});

export const collections = { other, quickInfo, socials };