'use client';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { Accordion as AccordionEC } from '@/react-components/components/Accordion';
import { AccordionProps } from '@/react-components/components/Accordion';
import { AccordionSection } from '@/lib/fetch/types/PageSection';

const makeAccordionProps = ({
  subtitle,
  description,
  accordionItems,
  ...rest
}: AccordionSection): AccordionProps => ({
  ...(subtitle && { subtitle }),
  ...(description && {
    description: MarkdownRenderer({ markdown: description, variant: 'body2' }),
  }),
  accordionItems: accordionItems.map(({ header, content }) => ({
    header,
    content: MarkdownRenderer({ markdown: content, variant: 'body2' }),
  })),
  ...rest,
});

const Accordion = (props: AccordionSection) => (
  <section id={props.sectionID || undefined}>
    <AccordionEC {...makeAccordionProps(props)} />
  </section>
);

export default Accordion;
