import React from 'react';
import { Hero, Editorial, Feature, HowTo, Stats } from '@pagopa/pagopa-editorial-components';

export type ComponentData = {
  type: string;
  theme?: 'light' | 'dark';
  image?: string;
  size?: 'small' | 'big';
  title?: string;
  subtitle?: string;
  body?: string;
  width?: 'wide' | 'center' | 'standard';
  reversed?: boolean;
  items?: {
    stackIcon: {
      icon: string;
    };
    title: string;
    subtitle: string;
  }[];
  steps?: {
    description: string;
    stepIcon: {
      icon: string;
    };
    title: string;
  }[];
  eyelet?: string;
  kpiCaption?: string;
  kpiValues?: {
    caption: string;
    id: string | number;
    kpiIcon: {
      icon: string;
    };
    value: number;
  }[];
};

export function renderComponent(componentData: ComponentData, index: number) {
  switch (componentData.type) {
    case 'hero':
      return (
        <Hero
          theme={componentData.theme || 'light'}    
          image={
            <img
              src={componentData.image}
              alt="hero image"
              style={{
                width: '100%',
                height: 'auto',
                margin: 'auto',
                display: 'block',
                justifyItems: 'center',
              }}
            />
          }
          size={componentData.size === 'small' || componentData.size === undefined ? 'small' : 'big'}
          title={componentData.title || 'Titolo'}
          subtitle={componentData.subtitle}
          key={index}
        />
      );

    case 'editorial':
      return (
        <Editorial
          theme={componentData.theme !== undefined ? componentData.theme : 'light'}
          image={
            <img
              src={componentData.image}
              alt="hero image"
              style={{
                width: '100%',
                height: 'auto',
                margin: 'auto',
                display: 'block',
                justifyContent: 'center',
                justifyItems: 'center',
              }}
            />
          }
          title={componentData.title || 'Titolo'}
          body={componentData.body || 'Descrizione'}
          width={componentData.width === 'wide' || componentData.width === 'center' ? componentData.width : 'standard'}
          reversed={componentData.reversed}
          key={index}
        />
      );

    case 'feature':
    const items = (componentData.items ?? []).map((item, itemIndex) => ({
      stackIcon: {
        icon: item.stackIcon.icon,
      },
      title: item.title,
      subtitle: item.subtitle,
    }));
  
    return (
      <Feature
        items={items}
        title={componentData.title || 'Titolo'}
        theme={componentData.theme || 'light'}
        key={index}
      />
    );
      

    case 'howTo':
    const steps = (componentData.steps ?? []).map((step, itemIndex) => ({
      stepIcon: {
        icon: step.stepIcon.icon,
      },
      title: step.title,
      description: step.description,
    }));

    return (
      <HowTo
        steps={steps}
        title={componentData.title || 'Titolo'}
        theme={componentData.theme || 'light'}
        key={index}
      />
    );

    case 'stats':
      const kpiValuesData = (componentData.kpiValues || []).map((kpi, kpiIndex) => ({
        caption: kpi.caption || 'Default Caption',
        id: kpi.id || 'Default ID',
        kpiIcon: {
          icon: kpi.kpiIcon?.icon || 'Default Icon',
        },
        value: kpi.value || 0,
      }));

      return (
        <Stats
          body={componentData.body || 'body'}
          eyelet={componentData.eyelet || 'eyelet'}
          kpiCaption={componentData.kpiCaption || 'kpiCaption'}
          kpiValues={kpiValuesData}
          theme={componentData.theme || 'light'}
          title={componentData.title || 'Titolo'}
          key={index}
        />
      );

    default:
      return null;
  }
}