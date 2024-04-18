'use client';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { Accordion as AccordionEC } from '@react-components/components';
import { AccordionProps } from '@react-components/types';
import { AccordionSection } from '@/lib/fetch/types/PageSection';

const makeAccordionProps = ({
  subtitle,
  description,
  accordionItems,
  theme,
  ...rest
}: AccordionSection): AccordionProps => ({
  theme,
  ...(subtitle && { subtitle }),
  ...(description && {
    description: MarkdownRenderer({ markdown: description, variant: 'body2' }),
  }),
  accordionItems: accordionItems.map(({ header, content }) => ({
    header,
    content: MarkdownRenderer({ markdown: content, variant: 'body2' }),
    theme,
  })),
  ...rest,
});

const Accordion = (props: AccordionSection) => (
  <AccordionEC {...makeAccordionProps(props)} />
);

export default Accordion;
