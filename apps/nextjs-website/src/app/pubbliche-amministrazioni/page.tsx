'use client'
import React from 'react';
import { Hero, Editorial, Feature, HowTo } from '@pagopa/pagopa-editorial-components';
import Image from 'next/image';
import pageData from './datastructure.json';

type ComponentData = {
  type: string;
  theme?: string;
  image?: string;
  size?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  width?: string;
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
};

function renderComponent(componentData: ComponentData, index: number) {
  switch (componentData.type) {
    case 'hero':
      return (
        <Hero
          theme={componentData.theme}          
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
          size={componentData.size}
          title={componentData.title}
          subtitle={componentData.subtitle}
          key={index}
        />
      );

    case 'editorial':
      return (
        <Editorial
          theme={componentData.theme}
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
          title={componentData.title}
          body={componentData.body}
          width={componentData.width}
          reversed={componentData.reversed}
          key={index}
        />
      );

    case 'feature':
      return (
        <Feature
          items={componentData.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <Image src={item.stackIcon.icon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
          title={componentData.title}
          theme={componentData.theme}
          key={index}
        />
      );

    case 'howTo':
      return (
        <HowTo
          steps={componentData.steps.map((step, stepIndex) => (
            <div key={stepIndex}>
              <Image src={step.stepIcon.icon} alt="Circle Icon" style={{ width: '80%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
          title={componentData.title}
          theme={componentData.theme}
          key={index}
        />
      );

    default:
      return null;
  }
}

function PubblicheAmministrazioni() {
  return (
    <div>
      {/* Render each component based on the new JSON data from datastructure.json */}
      {pageData.map((componentData, index) => renderComponent(componentData, index))}
    </div>
  );
}

export default PubblicheAmministrazioni;