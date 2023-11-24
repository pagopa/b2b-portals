'use client';
import React from 'react';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { Editorial as EditorialEC } from '@pagopa/pagopa-editorial-components';

const Editorial: React.FC<EditorialProps> = (editorialData) => (
  <EditorialEC {...editorialData} />
);

export default Editorial;
