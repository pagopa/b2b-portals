'use client';
import React, { useState } from 'react';
import { Header } from '@pagopa/pagopa-editorial-components';
import { getHeaderData, HeaderData } from '@/lib/API/HeaderAPI';

export const HeaderClient: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderData | null | 'error'>(
    null
  );

  getHeaderData()
    .then((res) => {
      if (!res.error) {
        setHeaderData(res.headerData as HeaderData);
      } else {
        setHeaderData('error');
      }
      return true;
    })
    .catch(() => {
      setHeaderData('error');
      return false;
    });

  if (headerData === 'error') {
    return <div />;
  }

  if (headerData === null) {
    return <div>Loading...</div>;
  }

  return (
    <Header
      menu={headerData.menu}
      product={headerData.product}
      ctaButtons={headerData.ctaButtons}
      theme={headerData.theme}
    />
  );
};
