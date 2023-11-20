'use client';
import React from 'react';
import {
  PreHeaderProps,
  PreHeader as PreHeaderEC,
} from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

const PreHeader: React.FC<PreHeaderProps> = (preHeaderData) => (
  <PreHeaderEC {...preHeaderData} />
);

export default PreHeader;
