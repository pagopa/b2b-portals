import { rendering } from '@/components/rendering/rendering';
import { getAllPages, getPageProps } from '@/lib/api';

export default async function Home() {
  const allPages = await getAllPages(); // Gets result directly from internal cache

  const pageID = allPages.filter((page) => '' === page.slug.join(''))[0]?.id;
  if (!pageID) {
    return null;
  }

  const pageProps = await getPageProps(pageID);
  const content = pageProps.sections ?? [];

  return (
    <div>
      {content.map((componentData, index) => rendering(componentData, index))}
    </div>
  );
}
