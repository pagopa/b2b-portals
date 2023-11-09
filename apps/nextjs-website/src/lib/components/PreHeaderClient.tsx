'use client';
import React, { useState } from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { getPreHeaderData, PreHeaderDataSchema } from '@/lib/API/preHeaderAPI';

export const PreHeaderClient: React.FC = () => {
  const [preHeaderData, setPreHeaderData] = useState<
    typeof PreHeaderDataSchema | null | 'error'
  >(null);

  getPreHeaderData()
    .then((res) => {
      if (!res.error) {
        setPreHeaderData(res.preHeaderData as unknown as typeof PreHeaderDataSchema);
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
