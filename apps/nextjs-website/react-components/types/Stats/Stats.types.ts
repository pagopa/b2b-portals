import { SectionProps } from '../common/Common.types';

export interface StatsItemProps {
  readonly title: string;
  readonly description?: string;
  readonly iconURL?: string;
}

export interface StatsProps extends Omit<SectionProps, 'theme'> {
  readonly eyelet?: string;
  readonly title: string;
  readonly body?: string;
  items: ReadonlyArray<StatsItemProps>;
}
