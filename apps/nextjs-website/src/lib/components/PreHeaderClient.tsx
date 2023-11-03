'use client';
import React, { useState, useEffect } from 'react';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { getPreHeaderData } from '@/lib/api';

export const PreHeaderClient: React.FC = async () => {
  const [preHeaderData, setPreHeaderData] = useState<PreHeaderProps | null>(
    null
  );

  useEffect(() => {
    getPreHeaderData().then((res) => {
      if (!res.error) {
        setPreHeaderData(res.preHeaderData);
      }

      setLoading(false);
    });
  }, []);

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

function setLoading(_arg0: boolean) {
  throw new Error('Function not implemented.');
}
