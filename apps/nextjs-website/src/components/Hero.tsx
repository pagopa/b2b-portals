'use client';
import { Hero as HeroEC } from '@pagopa/pagopa-editorial-components';
import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';
import { HeroSection } from '@/lib/fetch/types/PageSection';

const makeHeroProps = (props: HeroSection): HeroProps => ({
  ...props,
  image: props.image?.url,
  altText: props.image?.alternativeText ?? '',
  background: props.background?.url,
});

const Hero = (props: HeroSection) => (
  <section id={props.sectionID || undefined}>
    <HeroEC {...makeHeroProps(props)} />;
  </section>
);

export default Hero;
