import { HeroProps } from '@pagopa/pagopa-editorial-components/dist/components/Hero/index';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';

export type ExtendedHeroProps = HeroProps & {
  readonly theme: 'light' | 'dark';
};

export type ExtendedEditorialProps = EditorialProps & {
  readonly theme: 'light' | 'dark';
};