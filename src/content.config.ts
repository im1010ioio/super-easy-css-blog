import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        /**
         * Per-page OG image URL.
         * If provided, overrides the default site-wide OG image (/og-image.png).
         * Injected automatically into <meta property="og:image"> via routeData.ts middleware.
         *
         * Example:
         *   ogImage: https://cdn.example.com/my-article-og.png
         */
        ogImage: z.string().url().optional(),

        /**
         * Per-page OG title override.
         * Defaults to the page `title` if not set.
         */
        ogTitle: z.string().optional(),

        /**
         * Per-page OG description override.
         * Defaults to the page `description` if not set.
         */
        ogDescription: z.string().optional(),
      }),
    }),
  }),
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
