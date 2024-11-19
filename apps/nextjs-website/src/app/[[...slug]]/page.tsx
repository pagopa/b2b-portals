import { Metadata } from 'next';
import {
  getAllPages,
  getPageProps,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import PageSection from '@/components/PageSection/PageSection';

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
  const { locales } = await getSiteWideSEO();

  // Set default locale as /it, unless /en is the only active locale
  const defaultLocale = locales.en && !locales.it ? 'en' : 'it';

  const pages_it: Array<PageParams['params']> = locales.it
    ? (await getAllPages('it')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'it' ? [page.slug] : ['it', page.slug],
      }))
    : [];
  const pages_en: Array<PageParams['params']> = locales.en
    ? (await getAllPages('en')).map((page) => ({
        // Prepend locale as the first level slug (unless it's the default locale)
        slug: defaultLocale === 'en' ? [page.slug] : ['en', page.slug],
      }))
    : [];

  return [...pages_it, ...pages_en];
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = params;
  const { locales, ...siteWideSEO } = await getSiteWideSEO();
  const defaultLocale = locales.en && !locales.it ? 'en' : 'it';

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to '' and locale to the default locale

  // The slug will be found in slug[0] for the default locale and slug[1] for all others
  const slugString =
    slug === undefined
      ? ''
      : (slug[0] === 'it' || slug[0] === 'en' ? slug[1] : slug[0]) ?? '';

  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : slug[0] === 'it' || slug[0] === 'en'
      ? slug[0]
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
      images: siteWideSEO.metaImage.data.attributes.url,
      type: 'website',
    },
    icons: {
      icon: siteWideSEO.favicon.data.attributes.url,
      apple: siteWideSEO.appleTouchIcon.data.attributes.url,
    },
  };
}

const Page = async ({ params }: PageParams) => {
  // Prevent any page other than /preview from showing when in Preview Mode
  if (isPreviewMode()) {
    return null;
  }

  const { slug } = params;
  const { locales, themeVariant } = await getSiteWideSEO();
  const defaultLocale = locales.en && !locales.it ? 'en' : 'it';

  // Check if slug is undefined, which happens for the default locale's homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to '' and locale to the default locale

  // The slug will be found in slug[0] for the default locale and slug[1] for all others
  const slugString =
    slug === undefined
      ? ''
      : (slug[0] === 'it' || slug[0] === 'en' ? slug[1] : slug[0]) ?? '';

  // The locale will NOT be found for the default locale and will be in slug[0] for all others
  const locale =
    slug === undefined
      ? defaultLocale
      : slug[0] === 'it' || slug[0] === 'en'
      ? slug[0]
      : defaultLocale;

  const pageProps = await getPageProps(locale, slugString);
  if (pageProps === undefined) {
    return null;
  }

  const sections = pageProps.sections;
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
      {sections.map((section) =>
        PageSection({ ...section, themeVariant, locale, defaultLocale })
      )}
    </main>
  );
};

export default Page;
