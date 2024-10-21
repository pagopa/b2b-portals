import { Metadata } from 'next';
import {
  getAllPages,
  getPageProps,
  getSiteWideSEO,
  isPreviewMode,
} from '@/lib/api';
import PageSection from '@/components/PageSection/PageSection';

type PageParams = {
  params: { locale: 'it' | 'en'; slug?: string[] };
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
  const general = await getSiteWideSEO();
  const pages_it: Array<PageParams['params']> = general.locales.it
    ? (await getAllPages('it')).map((page) => ({
        locale: 'it',
        slug: [page.slug],
      }))
    : [];
  const pages_en: Array<PageParams['params']> = general.locales.en
    ? (await getAllPages('en')).map((page) => ({
        locale: 'en',
        slug: [page.slug],
      }))
    : [];

  return [...pages_it, ...pages_en];
};

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { locale, slug } = params;
  // Check if slug is undefined, which happens for the homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to ''
  const slugString = slug === undefined ? '' : slug[0];

  const pageProps = await getPageProps(locale, slugString);
  if (pageProps === undefined) {
    return {};
  }

  const seo = pageProps.seo;
  const siteWideSEO = await getSiteWideSEO();

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

  const { locale, slug } = params;
  // Check if slug is undefined, which happens for the homepage due to generateStaticParams' internal logic
  // If it is, set the slug back to ''
  const slugString = slug === undefined ? '' : slug[0];

  const pageProps = await getPageProps(locale, slugString);
  if (pageProps === undefined) {
    return null;
  }

  const sections = pageProps.sections;
  const { themeVariant } = await getSiteWideSEO();

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
      {sections.map((section) => PageSection({ ...section, themeVariant }))}
    </main>
  );
};

export default Page;
