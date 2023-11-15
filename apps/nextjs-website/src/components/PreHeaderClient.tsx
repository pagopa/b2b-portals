'use client';
import React from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

export const PreHeaderClient: React.FC<PreHeaderProps> = (preHeaderData) => (
  <PreHeader {...preHeaderData} />
);
