import { getHomeProps } from '@/lib/api';

export default async function Home() {
  const homeProps = await getHomeProps();

  return (
    <main>
      <div>
        <p>This is the Home page</p>
        <p>These are my props {JSON.stringify(homeProps)}</p>
      </div>
    </main>
  );
}
