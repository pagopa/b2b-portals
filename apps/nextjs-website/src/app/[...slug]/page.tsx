import { getAllPages } from '@/lib/api';

export const dynamicParams = false;

// Statically generate routes at build time instead of on-demand at request time.
// more: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
export const generateStaticParams = () => getAllPages();

type PageParams = {
  params: { slug: string[] };
};

const Page = ({ params }: PageParams) => {
  const { slug } = params;
  return (
    <div>
      <p>This is the page {slug.join('/')}</p>
    </div>
  );
};

export default Page;
