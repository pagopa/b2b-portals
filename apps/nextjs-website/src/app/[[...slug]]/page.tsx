import { Metadata } from 'next';
import {
  getAllPages,
  getPageProps,
  getPressReleasePages,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import PageSection from '@/components/PageSection/PageSection';
import { Locale } from '@/lib/fetch/siteWideSEO';
import TrackPageView from '@/components/TrackPageView';

type PageParams = {
  params: { slug?: string[] };
};

// Statically generate routes at build time instead of on-demand at request time.
// more: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export const generateStaticParams = async (): Promise<
  Array<PageParams['params']>
> => {
  // prevents the error during types generation:
  // .next/types/app/[...slug]/page.ts(37,98): error TS2344: Type '{ __tag__:
  // "generateStaticParams"; __return_type__: Promise<readonly Page[]>; }' does
  // not satisfy the constraint '{ __tag__: "generateStaticParams";
  // __return_type__: any[] | Promise<any[]>; }'.

  if (isPreviewMode()) {
    return [];
  }

  // Get locales
  const { defaultLocale, locales } = await getSiteWideSEO();

  const pages_it: Array<PageParams['params']> = locales.it
    ? (await getAllPages('it')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'it' ? [...page.slug] : ['it', ...page.slug],
      }))
    : [];
  const pages_en: Array<PageParams['params']> = locales.en
    ? (await getAllPages('en')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'en' ? [...page.slug] : ['en', ...page.slug],
      }))
    : [];
  const pages_fr: Array<PageParams['params']> = locales.fr
    ? (await getAllPages('fr')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'fr' ? [...page.slug] : ['fr', ...page.slug],
      }))
    : [];
  const pages_de: Array<PageParams['params']> = locales.de
    ? (await getAllPages('de')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'de' ? [...page.slug] : ['de', ...page.slug],
      }))
    : [];
  const pages_sl: Array<PageParams['params']> = locales.sl
    ? (await getAllPages('sl')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'sl' ? [...page.slug] : ['sl', ...page.slug],
      }))
    : [];

  return [...pages_it, ...pages_en, ...pages_fr, ...pages_de, ...pages_sl];
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = params;
  const { defaultLocale, ...siteWideSEO } = await getSiteWideSEO();

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to '' and locale to the default locale

  // Remove locale from slug (if present) and convert to string
  const slugString =
    slug === undefined
      ? ''
      : ['it', 'en', 'de', 'fr', 'sl'].includes(slug[0] ?? '')
        ? slug.slice(1).toString()
        : slug.toString();

  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : ['it', 'en', 'de', 'fr', 'sl'].includes(slug[0] ?? '')
        ? (slug[0] as Locale)
        : defaultLocale;

  const pageProps = await getPageProps(locale, slugString);
  if (pageProps === undefined) {
    return {};
  }

  const seo = pageProps.seo;
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    ...(seo.keywords && { keywords: seo.keywords.replaceAll('\n', ', ') }),
    ...(seo.canonicalURL && {
      alternates: {
        canonical: seo.canonicalURL,
      },
    }),
    openGraph: {
      title: seo.ogTitle ?? seo.metaTitle,
      description: seo.ogDescription ?? seo.metaDescription,
      images: siteWideSEO.metaImage.url,
      type: 'website',
    },
    icons: {
      icon: siteWideSEO.favicon.url,
      apple: siteWideSEO.appleTouchIcon.url,
    },
  };
}

const Page = async ({ params }: PageParams) => {
  // Prevent any page other than /preview from showing when in Preview Mode
  if (isPreviewMode()) {
    return null;
  }

  const { slug } = params;
  const { defaultLocale, themeVariant, analytics, pressReleasesParentSlug } =
    await getSiteWideSEO();

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to '' and locale to the default locale

  // Remove locale from slug (if present) and convert to string
  const slugString =
    slug === undefined
      ? ''
      : ['it', 'en', 'de', 'fr', 'sl'].includes(slug[0] ?? '')
        ? slug.slice(1).toString()
        : slug.toString();

  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : ['it', 'en', 'de', 'fr', 'sl'].includes(slug[0] ?? '')
        ? (slug[0] as Locale)
        : defaultLocale;

  const pageProps = await getPageProps(locale, slugString);
  if (pageProps === undefined) {
    return null;
  }

  const sections = pageProps.sections;
  const pressReleasePages = await getPressReleasePages(locale);
  return (
    <main>
      {pageProps.seo.structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pageProps.seo.structuredData),
          }}
        />
      )}
      {analytics?.mixpanel && <TrackPageView />}
      {sections.map((section) =>
        PageSection({
          ...section,
          themeVariant,
          locale,
          defaultLocale,
          pressReleasePages,
          ...(pressReleasesParentSlug && { pressReleasesParentSlug }),
        }),
      )}
    </main>
  );
};

export default Page;
