import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const SITE_URL = "https://css.im1010ioio.dev";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/** OG locale mapping: Starlight locale key → BCP-47 og:locale value */
const LOCALE_MAP: Record<string, string> = {
  root: "zh_TW",
  en: "en_US",
};

/** All supported og:locale values (for og:locale:alternate) */
const ALL_OG_LOCALES = Object.values(LOCALE_MAP);

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;

  // --- Determine current locale ---
  // `route.locale` is undefined for root locale, otherwise it's the locale key (e.g. "en")
  const localeKey = route.locale ?? "root";
  const ogLocale = LOCALE_MAP[localeKey] ?? "zh_TW";

  // --- Read frontmatter data ---
  const entryData = route.entry?.data as Record<string, unknown> & {
    title?: string;
    description?: string;
    ogImage?: string;
    ogTitle?: string;
    ogDescription?: string;
  };

  // --- Determine OG image ---
  // Per-page `ogImage` in frontmatter takes priority; fall back to the site default.
  const pageOgImage: string = entryData?.ogImage ?? DEFAULT_OG_IMAGE;

  // --- Determine canonical URL ---
  // Use the actual request URL pathname (already locale-prefixed by Astro routing).
  const pathname = context.url.pathname.replace(/\/?$/, "/"); // ensure trailing slash
  const canonicalUrl = `${SITE_URL}${pathname}`;

  // --- Determine title & description ---
  // ogTitle / ogDescription in frontmatter take priority over the page's title/description.
  const pageTitle: string =
    entryData?.ogTitle ??
    (entryData?.title as string | undefined) ??
    "Super Easy CSS，極度簡單";
  const pageDescription: string =
    entryData?.ogDescription ??
    (entryData?.description as string | undefined) ??
    "Super Easy CSS，極度簡單。本系列文章的目標為學習 CSS 基本知識，並研究 CSS 中酷炫又令人期待的新屬性。";

  // --- Build site name per locale ---
  const siteNameMap: Record<string, string> = {
    root: "Super Easy CSS，極度簡單",
    en: "Super Easy CSS",
  };
  const siteName = siteNameMap[localeKey] ?? "Super Easy CSS，極度簡單";

  // --- Alternate locales (excluding current) ---
  const alternateLocales = ALL_OG_LOCALES.filter((l) => l !== ogLocale);

  // --- Inject OG meta tags ---
  //
  // Starlight already injects: og:title, og:type, og:url, og:locale,
  // og:description, og:site_name, twitter:card.
  //
  // We override them (mergeHead deduplicates by property key, keeping the
  // LAST value — which comes from our push) and add the ones Starlight omits:
  // og:image, og:image:*, og:locale:alternate, twitter:image, twitter:title,
  // twitter:description.
  //
  // Note: We also override og:locale so it uses the underscore BCP-47 format
  // required by Facebook (e.g. zh_TW instead of zh-TW).
  route.head.push(
    // Re-declare the Starlight defaults we want to override
    { tag: "meta", attrs: { property: "og:type",        content: "article" } },
    { tag: "meta", attrs: { property: "og:site_name",   content: siteName } },
    { tag: "meta", attrs: { property: "og:title",       content: pageTitle } },
    { tag: "meta", attrs: { property: "og:description", content: pageDescription } },
    { tag: "meta", attrs: { property: "og:url",         content: canonicalUrl } },
    { tag: "meta", attrs: { property: "og:locale",      content: ogLocale } },
    // OG Image (Starlight does NOT inject this)
    { tag: "meta", attrs: { property: "og:image",       content: pageOgImage } },
    { tag: "meta", attrs: { property: "og:image:width", content: "1200" } },
    { tag: "meta", attrs: { property: "og:image:height",content: "630" } },
    { tag: "meta", attrs: { property: "og:image:alt",   content: pageTitle } },
    // Twitter / X Card
    { tag: "meta", attrs: { name: "twitter:card",        content: "summary_large_image" } },
    { tag: "meta", attrs: { name: "twitter:title",       content: pageTitle } },
    { tag: "meta", attrs: { name: "twitter:description", content: pageDescription } },
    { tag: "meta", attrs: { name: "twitter:image",       content: pageOgImage } },
  );

  // Alternate locales (og:locale:alternate has no duplicate-check — it's intentionally multi-valued)
  for (const altLocale of alternateLocales) {
    route.head.push({
      tag: "meta",
      attrs: { property: "og:locale:alternate", content: altLocale },
    });
  }
});
