import { getAllPages, getPageProps } from '@/lib/api';

// Dynamic segments not included in generateStaticParams will return a 404.
// more: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// Statically generate routes at build time instead of on-demand at request time.
// more: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export const generateStaticParams = () => getAllPages() as Promise<Page[]>;

type PageParams = {
  params: { slug: string[] };
};

const Page = async ({ params }: PageParams) => {
  const { slug } = params;
  const pageProps = await getPageProps(slug.join('/'));

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
