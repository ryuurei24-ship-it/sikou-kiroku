import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const questions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/questions' }),
  schema: z.object({
    title: z.string(),
    topics: z.array(z.string()).default([]),
    created: z.coerce.date(),
    updated: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { questions };
