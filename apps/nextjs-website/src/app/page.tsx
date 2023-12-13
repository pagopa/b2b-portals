import { getPageProps } from '@/lib/api';

export default async function Home() {
  const pageProps = await getPageProps('homepage');
  return (
    <div>
      <p>This is the Home page</p>
      <p>These are my props {JSON.stringify(pageProps)}</p>
    </div>
  );
}
