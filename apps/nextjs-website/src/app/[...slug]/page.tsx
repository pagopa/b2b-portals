import { redirect } from 'next/navigation';
import { MenuItem, Route, PageProps } from '../types';

const dynamicParams = true;

export async function generateStaticParams() {
  const data = await fetch('http://localhost:3000/navigationData.json');
  const jsonData: { data: Route[] } = await data.json();

  if (!jsonData.data[0]) {
    throw new Error('No route available');
  }

  const rootRoutes = jsonData.data[0].attributes.items.data;

  const allParams: { slug: string[] }[] = [];

  function collectParams(routes: MenuItem[], currentPath: string[] = []) {
    for (const route of routes) {
      const routePath = [...currentPath, route.attributes.url];
      const dynamicParam = [routePath.join('')];

      allParams.push({ slug: dynamicParam });

      if (route.attributes.children.data.length > 0) {
        collectParams(route.attributes.children.data, routePath);
      }
    }
  }

  collectParams(rootRoutes);

  return allParams;
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  if (dynamicParams) {
    const allParams = await generateStaticParams();
    const slugPath = slug.join('/');

    const modifiedSlugPath = slugPath.startsWith('/')
      ? slugPath
      : `/${slugPath}`;

    const isValid = allParams.some(
      (param) => param.slug.join('/') === modifiedSlugPath,
    );

    if (!isValid) {
      redirect('/404');
    }
  }

  return (
    <div>
      <p>Ciao, sono la pagina “{slug.join('/')}”</p>
    </div>
  );
}
