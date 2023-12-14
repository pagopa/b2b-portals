'use client';
import React from 'react';
import {
  EditorialProps,
  Editorial as EditorialEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Editorial';

const Editorial: React.FC<
  EditorialProps & { sectionID: string | undefined }
> = (EditorialData) => (
  <section id={EditorialData.sectionID}>
    <EditorialEC {...EditorialData} />
  </section>
);

export default Editorial;
