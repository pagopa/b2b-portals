import { rendering } from '@/components/rendering/rendering';
import { getPageProps } from '@/lib/api';

export default async function Home() {
  // Props fetching will be updated when Home is turned into a Strapi Single Type
  const pageProps = await getPageProps('');
  const content = pageProps?.sections || [];

  return (
    <div>
      {content.map((componentData, index) => rendering(componentData, index))}
    </div>
  );
}
