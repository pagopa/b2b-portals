import PageSection from '@/components/PageSection/PageSection';
import { getPageProps } from '@/lib/api';

export default async function Home() {
  const pageProps = await getPageProps(['homepage']);
  const sections = pageProps?.sections || [];

  return <div>{sections.map(PageSection)}</div>;
}
