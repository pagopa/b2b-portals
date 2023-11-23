import { ComponentData, rendering } from '@/components/rendering/rendering';
import { getPageProps } from '@/lib/api';

export default async function Home() {
  // Props fetching will be updated when Home is turned into a Strapi Single Type
  const pageProps = await getPageProps('');
  const content = pageProps?.sections || [];

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
