import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';

export type ExtendedHeroProps = HeroProps & {
  readonly theme: 'light' | 'dark';
};
