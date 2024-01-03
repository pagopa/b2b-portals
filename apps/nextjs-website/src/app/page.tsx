import { rendering } from '@/components/rendering/pageSection';
import { getPageProps } from '@/lib/api';

export default async function Home() {
  const pageProps = await getPageProps(['homepage']);
  const content = pageProps?.sections || [];

  return <div>{content.map((componentData) => rendering(componentData))}</div>;
}
