'use client';
import React from 'react';
import { ComponentData, renderComponent } from '@/declared-components/declared-components';
import pageData from '../temporanydatas/pageData.json';

function Home() {
  const pageContent = pageData.data.find((item: any) => item.attributes.slug === 'home') || { attributes: { Sezioni: [] } };
  const content = pageContent.attributes.Sezioni || [];

  return (
    <div>
      {content.map((componentData, index) => {
        const renderedComponent = renderComponent(componentData as unknown as ComponentData, index);
        return renderedComponent;
      })}
    </div>
  );
}

export default Home;
