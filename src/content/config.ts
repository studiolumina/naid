import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const projects = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        contributors: z.number(),
        contributorsBy: z.optional(z.number()),
        stars: z.number(),
        starsBy: z.optional(z.number()),
        repoUrl: z.string(),
        logo: z.optional(z.string())
    })
});

const downloadsIndividual = z.object({
    value: z.number(),
    unit: z.string(),
    title: z.string(),
    by: z.optional(z.number()),
})

const stats = defineCollection({
    type: 'data',
    schema: z.array(downloadsIndividual)
})

const investors = defineCollection({
    type: 'data',
    schema: z.array(
        z.object({
            name: z.string(),
            type: z.enum(['major','minor']),
            subtitle: z.optional(z.string()),
            logo: z.optional(z.string())
        })
    )
})

export const collections = {
    projects,
    stats,
    investors
}