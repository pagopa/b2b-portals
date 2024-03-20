import { Metadata } from 'next';
import { Page } from '@/lib/pages';
import { getAllPages, getPageProps, getSiteWideSEO } from '@/lib/api';
import PageSection from '@/components/PageSection/PageSection';

// Statically generate routes at build time instead of on-demand at request time.
// more: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export const generateStaticParams = async (): Promise<Page[]> =>
  // prevents the error during types generation:
  // .next/types/app/[...slug]/page.ts(37,98): error TS2344: Type '{ __tag__:
  // "generateStaticParams"; __return_type__: Promise<readonly Page[]>; }' does
  // not satisfy the constraint '{ __tag__: "generateStaticParams";
  // __return_type__: any[] | Promise<any[]>; }'.
  [...(await getAllPages())];

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = params;
  // slug is undefined for homepage (apparently due to generateStaticParams)
  // so we need to convert it back to [] (which is what getAllPages returns and what getPageProps expects)
  const pageProps = await getPageProps(slug ?? []);
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

type PageParams = {
  params: { slug?: string[] };
};

const Page = async ({ params }: PageParams) => {
  const { slug } = params;
  // slug is undefined for homepage (apparently due to generateStaticParams)
  // so we need to convert it back to [] (which is what getAllPages returns and what getPageProps expects)
  const pageProps = await getPageProps(slug ?? []);
  if (pageProps === undefined) {
    return null;
  }

  const sections = pageProps.sections;

  return <div>{sections.map(PageSection)}</div>;
};

export default Page;
