'use client';
import { StatsSection } from '@/lib/fetch/types/PageSection';
import { Stats as StatsRC } from '@react-components/components';
import { StatsProps } from '@react-components/types';

const makeStatsProps = ({
  title,
  eyelet,
  body,
  stats,
  sectionID,
}: StatsSection): StatsProps => ({
  title,
  ...(eyelet && { eyelet }),
  ...(body && { body }),
  stats: stats.map((stat) => ({
    title: stat.title,
    ...(stat.description && { description: stat.description }),
    ...(stat.icon?.data && { iconURL: stat.icon.data.attributes.url }),
  })),
  sectionID,
});

const Stats = (props: StatsSection) => <StatsRC {...makeStatsProps(props)} />;

export default Stats;
