import { Page } from '@/lib/pages';
import { getAllPages, getPageProps } from '@/lib/api';

// Dynamic segments not included in generateStaticParams will return a 404.
// more: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// Statically generate routes at build time instead of on-demand at request time.
// more: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export const generateStaticParams = async (): Promise<Page[]> =>
  // prevents the error during types generation:
  // .next/types/app/[...slug]/page.ts(37,98): error TS2344: Type '{ __tag__:
  // "generateStaticParams"; __return_type__: Promise<readonly Page[]>; }' does
  // not satisfy the constraint '{ __tag__: "generateStaticParams";
  // __return_type__: any[] | Promise<any[]>; }'.
  [...(await getAllPages())];

type PageParams = {
  params: { slug: string[] };
};

const Page = async ({ params }: PageParams) => {
  const { slug } = params;
  const pageProps = await getPageProps(slug);

  if (pageProps) {
    return (
      <div>
        <p>This is the page {slug.join('/')}</p>
        <p>These are my props {JSON.stringify(pageProps)}</p>
      </div>
    );
  }

  return null;
};

export default Page;
