import { getAllPages, getPageProps } from '@/lib/api';

export default async function Home() {
  const allPages = await getAllPages(); // Gets result directly from internal cache

  const pageID = allPages.filter((page) => '' === page.slug.join(''))[0]?.id;
  if (!pageID) {
    return null;
  }

  const pageProps = await getPageProps(pageID);
  return (
    <div>
      <p>This is the Home page</p>
      <p>These are my props {JSON.stringify(pageProps)}</p>
    </div>
  );
}
