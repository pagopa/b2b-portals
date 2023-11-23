import { ComponentData, rendering } from '@/components/rendering/rendering';
import { getAllPages, getPageProps } from '@/lib/api';

export default async function Home() {
  const allPages = await getAllPages(); // Gets result directly from internal cache

  const pageID = allPages.filter((page) => '' === page.slug.join(''))[0]?.id;
  if (!pageID) {
    return null;
  }

  const pageProps = await getPageProps(pageID);
  const content = pageProps.sections || [];

  return (
    <div>
      <p>This is the Home page</p>
      <p>These are my props {JSON.stringify(pageProps)}</p>

      {content.map((componentData, index) => {
        const renderedComponent = rendering(
          componentData as unknown as ComponentData,
          index
        );
        return renderedComponent;
      })}
    </div>
  );
}
