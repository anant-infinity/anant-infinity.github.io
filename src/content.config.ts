import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const researchThemes = [
  'Solar Flare Physics & Nowcasting',
  'Solar X-ray Instrumentation',
  'Space Weather Missions & Concepts',
  'Small Satellites & Space Systems',
] as const;

export type ResearchTheme = (typeof researchThemes)[number];

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().default(''),
    summary: z.string(),
    order: z.number().default(99),
    featured: z.boolean().default(false),
    /** When false, content remains in repo but is omitted from public routes/listings */
    listed: z.boolean().default(true),
    placeholder: z.boolean().default(true),
    theme: z.enum(researchThemes),
    status: z.string().default('Active'),
    image: z.string().optional(),
    collaborators: z.array(z.string()).default([]),
    funding: z.array(z.string()).default([]),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    placeholder: z.boolean().default(true),
  }),
});

export const collections = { research, news };
