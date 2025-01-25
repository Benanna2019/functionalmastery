import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const cybertron = defineCollection({
	loader: glob({ base: './src/content/workshops/cybertron', pattern: ['**/*.{md,mdx}'] }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		workshop: z.string(),
		contentType: z.string(),
		published: z.coerce.date(),
		updated: z.coerce.date(),
		categories: z.array(z.string()),
		coverImage: z.string(),
		coverWidth: z.number(),
		coverHeight: z.number(),
		excerpt: z.string(),
		stackBlitzUrl: z.string().optional(),
	}),
});

const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		published: z.coerce.date(),
		updated: z.coerce.date(),
		categories: z.array(z.string()),
		coverImage: z.string(),
		coverWidth: z.number(),
		coverHeight: z.number(),
		excerpt: z.string(),
	}),
});

export const collections = { blog, cybertron, posts };
