import React from 'react';
import Hero from '../Hero';

export type ComponentData = {
  __component: string;
};

export function rendering(componentData: ComponentData, index: number) {
  switch (componentData.__component) {
    case 'sections.hero':
      return <Hero key={index} title={'test title'} />;

    default:
      return null;
  }
}
