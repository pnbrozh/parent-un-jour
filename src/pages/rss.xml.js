import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: 'Parent un jour — Le journal',
    description:
      "Articles sourcés scientifiquement sur la préparation au village, le couple après bébé, le postnatal et la parentalité.",
    site: context.site,
    items: posts
      .sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.publishDate,
        link: `/le-journal/${post.id}/`,
        categories: [...post.data.piliers, ...(post.data.tags ?? [])],
        author: post.data.author,
      })),
    customData: `<language>fr-CA</language>`,
  });
}
