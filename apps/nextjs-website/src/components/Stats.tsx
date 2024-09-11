'use client';
import { StatsSection } from '@/lib/fetch/types/PageSection';
import { Stats as StatsRC } from '@react-components/components';
import { StatsProps } from '@react-components/types';

const makeStatsProps = ({
  eyelet,
  body,
  items,
  ...rest
}: StatsSection): StatsProps => ({
  ...(eyelet && { eyelet }),
  ...(body && { body }),
  items: items.map((item) => ({
    title: item.title,
    ...(item.description && { description: item.description }),
    ...(item.icon.data && { iconURL: item.icon.data.attributes.url }),
  })),
  ...rest,
});

const Stats = (props: StatsSection) => <StatsRC {...makeStatsProps(props)} />;

export default Stats;
