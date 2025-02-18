'use client';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { StatsSection } from '@/lib/fetch/types/PageSection';
import { Stats as StatsRC } from '@react-components/components';
import { StatsProps } from '@react-components/types';

const makeStatsProps = ({
  eyelet,
  body,
  items,
  ...rest
}: StatsSection & SiteWidePageData): StatsProps => ({
  ...(eyelet && { eyelet }),
  ...(body && { body }),
  items: items.map((item) => ({
    title: item.title,
    ...(item.description && { description: item.description }),
    ...(item.icon && { iconURL: item.icon.url }),
  })),
  ...rest,
});

const Stats = (props: StatsSection & SiteWidePageData) => (
  <StatsRC {...makeStatsProps(props)} />
);

export default Stats;
