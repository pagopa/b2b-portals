'use client'
import { usePathname } from 'next/navigation';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import pageData from '../../temporanydatas/pageData.json';

type PageProps = {
  slug: string;
};

const DynamicRoute: React.FC<PageProps> = () => {
  const pathname = usePathname();

  const slugFromPath = pathname.split('/').filter(Boolean).pop() || 'default-slug';

  const pageContent = pageData.data.find((item) => item.attributes.slug === slugFromPath) || {
    attributes: { Sezioni: [] },
  };

  const content = pageContent.attributes.Sezioni || [];

  return (
    <div>
      {content.map((componentData, index) => {
        const renderedComponent = renderComponent(componentData as unknown as ComponentData, index);
        return (
          <div key={index}>
            {renderedComponent}
          </div>
        );
      })}
    </div>
  );
};

export default DynamicRoute;
