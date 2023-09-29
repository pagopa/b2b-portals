'use client'
import React from 'react';
import { Editorial, Feature, Hero, HowTo } from '@pagopa/pagopa-editorial-components';
import Image from 'next/image';
import { hero, editorial01, editorial02, editorial03, editorial04, feature } from './data';
import howTo from './data.json';

function PubblicheAmministrazioni() {

  return (

    <div>

      <Hero
        theme={hero.theme}
        image={<Image src={hero.image} alt="hero image" style={{ width: '100%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', justifyItems: 'center' }} />}
        size={hero.size}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <Editorial
        theme={editorial01.theme}
        image={<Image src={editorial01.image} alt="editorial image 01" style={{ width: '100%', height: 'auto', margin: 'auto' }} />}
        title={editorial01.title}
        body={editorial01.body}
        width={editorial01.width}
      />

      <Editorial
        theme={editorial02.theme}
        image={<Image src={editorial02.image} alt="editorial image 02" style={{ width: '100%', height: 'auto', margin: 'auto' }} />}
        title={editorial02.title}
        body={editorial02.body}
        width={editorial02.width}
        reversed
      />
      
      <Editorial
        theme={editorial03.theme}
        image={<Image src={editorial03.image} alt="editorial image 03" style={{ width: '100%', height: 'auto', margin: 'auto' }} />}
        title={editorial03.title}
        body={editorial03.body}
        width={editorial03.width}
      />

      <Feature
        items={feature.map((item, index) => (
          <div key={index}>
            <Image src={item.stackIcon.icon} alt="Feature Icon" style={{ width: '30%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </div>
        ))}
        title="Un solo modo per risparmiare in tanti modi"
        theme="light"
      />

      <Editorial
        theme={editorial04.theme}
        image={<Image src={editorial04.image} alt="editorial image 04" style={{ width: '100%', height: 'auto', margin: 'auto' }} />}
        title={editorial04.title}
        body={editorial04.body}
        width={editorial04.width}
      />

      <HowTo
        steps={howTo.map((step, index) => (
          <div key={index}>
            <Image src={step.stepIcon.icon} alt="Circle Icon" style={{ width: '80%', height: 'auto', margin: 'auto', display: 'block', justifyContent: 'center', alignItems: 'center' }} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
        title='Come funziona?'
        theme='light'
      />

    </div>

  );
}

export default PubblicheAmministrazioni;
