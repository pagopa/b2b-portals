'use client';
import React from 'react';
import { Accordion as AccordionEC } from '@pagopa/pagopa-editorial-components';
import { AccordionProps } from '@pagopa/pagopa-editorial-components/dist/components/Accordion/Accordion';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
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
    <Stack
      sx={{
        '.MuiGrid-item .MuiBox-root': {
          // prevent targeting text inside accordion
          '.MuiTypography-body2': {
            // description
            color:
              props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
            a: {
              color:
                props.theme === 'dark'
                  ? 'primary.contrastText'
                  : 'text.primary',
            },
          },
        },
      }}
    >
      <AccordionEC {...makeAccordionProps(props)} />
    </Stack>
  </section>
);

export default Accordion;
