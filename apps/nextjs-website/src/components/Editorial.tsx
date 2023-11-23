'use client';
import React from 'react';
import {
  EditorialProps,
  Editorial as EditorialEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Editorial';

const Editorial: React.FC<EditorialProps> = (editorialData) => (
  <EditorialEC {...editorialData} />
);

export default Editorial;
