import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The six categories — keys only. Labels live in src/data/taxonomies.ts
const CATEGORIES = [
  'rehabilitation',
  'new_construction',
  'fit_out',
  'maintenance',
  'engineering_services',
  'infrastructure',
] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(CATEGORIES),
    services: z.array(z.string()).default([]),
    year: z.number(),
    location: z.string(),
    area: z.string().optional(),
    client: z.string().optional(),
    cover: z.string(),
    gallery: z.array(z.string()).default([]),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
