import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Strategy & Fit', 'Narrative & Score', 'Budgets & Evidence', 'Reporting & Renewal', 'Process & Tools']),
    pinned: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Strategy & Fit', 'Narrative & Score', 'Budgets & Evidence', 'Reporting & Renewal', 'Process & Tools']),
  }),
});

export const collections = {
  insights,
  resources,
};

