import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Les piliers utilisés comme filtres du journal.
// L'ordre ici = l'ordre affiché dans la barre de filtres.
export const PILIERS = [
  'Se préparer en couple',
  'Grossesse',
  'Accouchement',
  'Le village',
  'Le couple',
  'Le post-partum',
  'Développement de bébé',
  'Santé mentale',
] as const;

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70, "Garder sous 70 caractères pour SEO"),
    description: z.string().max(160, "Garder sous 160 caractères pour la meta description").min(80, "Au moins 80 caractères pour que Google affiche la description complète"),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    // Axe éditorial — utilisé pour le CTA bas d'article et le breadcrumb
    axis: z.enum(['creer-son-village', 'couple-coparent', 'postnatal', 'general']),
    axisLabel: z.string(),
    // Piliers — utilisés pour les filtres du journal. Un article peut en avoir plusieurs.
    piliers: z.array(z.enum(PILIERS)).min(1, 'Au moins un pilier par article'),
    author: z.string().default('Pascaline Nourry'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    thumbnailEmoji: z.string().default('📖'),
    // Mots-clés SEO (invisibles sur le site, utilisés pour les meta et JSON-LD)
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
