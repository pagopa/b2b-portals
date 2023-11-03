import { getAllPages } from '@/lib/api';
import { Page } from '@/lib/api';

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const { pages } = await getAllPages();
  const retVal: Page[] = pages ? [...pages] : [];
  return retVal;
};

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
