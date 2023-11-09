'use client';
import React, { useState } from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { getPreHeaderData } from '@/lib/API/preHeaderAPI';

export const PreHeaderClient: React.FC = () => {
  const [preHeaderData, setPreHeaderData] = useState<
    PreHeaderProps | null | 'error'
  >(null);

  getPreHeaderData()
    .then((res) => {
      if (!res.error) {
        setPreHeaderData(res.preHeaderData);
      } else {
        setPreHeaderData('error');
      }
      return true;
    })
    .catch(() => {
      setPreHeaderData('error');
      return false;
    });

  if (preHeaderData === 'error') {
    return <div />;
  }

  if (preHeaderData === null) {
    return <div>Loading...</div>;
  }

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
