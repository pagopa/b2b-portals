'use client';
import React, { useState } from 'react';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { getPreHeaderData } from '@/lib/API/preHeaderAPI';

export const PreHeaderClient: React.FC = () => {
  const [preHeaderData, setPreHeaderData] = useState<
    PreHeaderProps | null
  >(null);

  getPreHeaderData()
    .then((res) => {
      if (!res.error) {
        setPreHeaderData(res.preHeaderData);
      }
      return true;
    })
    .catch(() => {
      return false;
    });

  return (
    preHeaderData && preHeaderData.leftCtas && preHeaderData.rightCtas &&
    <PreHeader
      leftCtas={preHeaderData.leftCtas}
      rightCtas={preHeaderData.rightCtas}
    />
  );
};
