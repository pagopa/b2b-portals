import React from 'react';
import Hero from '../Hero';
import Editorial from '../Editorial';
import toberemoved from './toberemoved.jpg'; //to be removed, only example for avoid image error

export type ComponentData = {
  __component: string;
};

export function rendering(componentData: ComponentData, index: number) {
  switch (componentData.__component) {
    case 'sections.hero':
      return <Hero key={index} title={'test title'} />;

    case 'sections.editorial':
      return (
        <Editorial
          key={index}
          title={'test title'}
          width={'center'}
          body={'test body'}
          image={toberemoved}
        />
      );

    default:
      return null;
  }
}
