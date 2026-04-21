import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70, "Garder sous 70 caractères pour SEO"),
    description: z.string().max(160, "Garder sous 160 caractères pour la meta description").min(80, "Au moins 80 caractères pour que Google affiche la description complète"),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    axis: z.enum(['creer-son-village', 'couple-coparent', 'postnatal', 'general']),
    axisLabel: z.string(),
    pilier: z.string().optional(),
    author: z.string().default('Pascaline Nourry'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    thumbnailEmoji: z.string().default('📖'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
