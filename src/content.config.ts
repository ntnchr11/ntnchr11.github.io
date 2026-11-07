import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const progetti = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/progetti' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    stato: z.enum(['idea', 'in corso', 'completato']).default('in corso'),
    tecnologie: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    ordine: z.number().default(99),
  }),
});

const laboratorio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/laboratorio' }),
  schema: z.object({
    titolo: z.string(),
    descrizione: z.string(),
    data: z.coerce.date(),
    tag: z.array(z.string()).default([]),
  }),
});

export const collections = { progetti, laboratorio };
