import { getAllPages } from '@/lib/api';
import { Page } from '@/lib/api/navigation/pages';

export const dynamicParams = false;
export const generateStaticParams = () => getAllPages() as Promise<Page[]>;

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
