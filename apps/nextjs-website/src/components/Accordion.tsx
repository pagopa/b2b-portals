'use client';
import React from 'react';
import { Accordion as AccordionEC } from '@pagopa/pagopa-editorial-components';
import { AccordionProps } from '@pagopa/pagopa-editorial-components/dist/components/Accordion/Accordion';

const Accordion: React.FC<AccordionProps> = (accordionData) => (
  <AccordionEC {...accordionData} />
);

export default Accordion;
