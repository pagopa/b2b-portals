'use client';
import React from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { getPreHeaderData } from '@/lib/api';

const fetchPreHeaderData = async () => {
  const { preHeaderData } = await getPreHeaderData();
  return preHeaderData;
};

export const PreHeaderClient: React.FC = async () => {
  const preHeaderData: PreHeaderProps | null = await fetchPreHeaderData();

  if (preHeaderData && preHeaderData.leftCtas && preHeaderData.rightCtas) {
    return (
      <PreHeader
        leftCtas={preHeaderData.leftCtas}
        rightCtas={preHeaderData.rightCtas}
      />
    );
  }

  return null;
};
