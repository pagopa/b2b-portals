'use client';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { Accordion as AccordionRC } from '@react-components/components';
import { AccordionProps } from '@react-components/types';
import { AccordionSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeAccordionProps = ({
  locale,
  defaultLocale,
  subtitle,
  description,
  accordionItems,
  textAlignment,
  ...rest
}: AccordionSection & SiteWidePageData): AccordionProps => ({
  ...(subtitle && { subtitle }),
  ...(description && {
    description: MarkdownRenderer({
      markdown: description,
      locale,
      defaultLocale,
      variant: 'body2',
    }),
  }),
  accordionItems: accordionItems.map(({ header, content }) => ({
    header,
    content: MarkdownRenderer({
      markdown: content,
      locale,
      defaultLocale,
      variant: 'body2',
    }),
    theme: rest.theme,
    themeVariant: rest.themeVariant,
  })),
  textAlignment,
  ...rest,
});

const Accordion = (props: AccordionSection & SiteWidePageData) => (
  <AccordionRC {...makeAccordionProps(props)} />
);

export default Accordion;
