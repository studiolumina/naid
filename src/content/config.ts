import { defineCollection, reference } from "astro:content";
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

const authors = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        socials: z.optional(
            z.object({
                github: z.optional(z.string()),
                /* ...etc */
            })
        ),
        website: z.string(),
        description: z.optional(z.string()),
        profilePicture: z.optional(z.string())
    })
})

/**
 * Want to use the content layer?
 * 
 * Comment this out and export your loader under the same variable name
 */
const posts = defineCollection({
    type: 'content',
    schema: z.object({
        type: z.optional(z.enum(['announcement','release','post'])),
        title: z.string(),
        description: z.optional(z.string()),
        author: reference('authors'),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()),
    })
})

export const collections = {
    projects,
    stats,
    investors,
    posts,
    authors
}