'use client';
import React from 'react';
import { Accordion as AccordionEC } from '@pagopa/pagopa-editorial-components';
import { AccordionProps } from '@pagopa/pagopa-editorial-components/dist/components/Accordion/Accordion';
import MarkdownRenderer from './MarkdownRenderer';
import { AccordionSection } from '@/lib/fetch/types/PageSection';

const makeAccordionProps = ({
  title,
  subtitle,
  description,
  accordionItems,
  ...rest
}: AccordionSection): AccordionProps => ({
  title,
  subtitle,
  description: MarkdownRenderer({ markdown: description, variant: 'body2' }),
  accordionItems: accordionItems.map(({ header, content }) => ({
    header,
    content: MarkdownRenderer({ markdown: content, variant: 'body2' }),
  })),
  ...rest,
});

const Accordion = (props: AccordionSection) => (
  <section>
    <AccordionEC {...makeAccordionProps(props)} />
  </section>
);

export default Accordion;
