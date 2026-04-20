import { SectionProps, ThemeVariant } from '../common/Common.types';

export interface StatsItemProps {
  readonly title: string;
  readonly description?: string;
  readonly iconURL?: string;
  readonly themeVariant: ThemeVariant;
}

export interface StatsProps extends Omit<SectionProps, 'theme'> {
  readonly eyelet?: string;
  readonly title: string;
  readonly body?: string;
  items: ReadonlyArray<StatsItemProps>;
}
