'use client'
import React from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

export const PreHeaderClient: React.FC<PreHeaderProps> = async (preHeaderData) => {
  return (
    preHeaderData && preHeaderData.leftCtas && preHeaderData.rightCtas &&
    <PreHeader
      leftCtas={preHeaderData.leftCtas}
      rightCtas={preHeaderData.rightCtas}
    />
  );
};
