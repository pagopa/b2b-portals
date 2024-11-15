'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HowTo as HowToRC } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeHowToProps = ({
  locale,
  defaultLocale,
  link,
  steps,
  ...rest
}: HowToSection & SiteWidePageData): HowToProps => ({
  ...(link && { link }),
  steps: steps.map((step) => ({
    title: step.title,
    description: MarkdownRenderer({
      markdown: step.description,
      locale,
      defaultLocale,
    }),
    ...(step.icon.data && {
      iconURL: step.icon.data.attributes.url,
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection & SiteWidePageData) => (
  <HowToRC {...makeHowToProps(props)} />
);

export default HowTo;
