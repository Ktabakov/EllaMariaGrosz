import { defineCollection, z } from 'astro:content';

const exhibitions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    status: z.enum(['current', 'upcoming', 'past']),
    description: z.string(),
    link: z.string().optional(),
    image: z.string(),
  }),
});

const press = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    source: z.string(),
    excerpt: z.string(),
    link: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  exhibitions,
  press,
};