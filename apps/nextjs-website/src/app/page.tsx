import { getPageProps } from '@/lib/api';

export default async function Home() {
  // Props fetching will be updated when Home is turned into a Strapi Single Type
  const pageProps = await getPageProps('home');
  return (
    <div>
      <p>This is the Home page</p>
      <p>These are my props {JSON.stringify(pageProps)}</p>
    </div>
  );
}
