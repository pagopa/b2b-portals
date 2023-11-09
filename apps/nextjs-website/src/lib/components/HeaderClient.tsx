'use client';
import React, { useState } from 'react';
import { Header } from '@pagopa/pagopa-editorial-components';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { getHeaderData } from '@/lib/API/HeaderAPI';

export const HeaderClient: React.FC = () => {
  const [headerData, setHeaderData] = useState<
    HeaderProps | null | 'error'
  >(null);

  getHeaderData()
    .then((res) => {
      if (!res.error) {
        setHeaderData(res.headerData);
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

  if (headerData && headerData.menu && headerData.product && headerData.ctaButtons && headerData.theme) {
    return (
        <Header
          menu={headerData.menu}
          product={headerData.product}
          ctaButtons={headerData.ctaButtons}
          theme={headerData.theme}
        />
    );
  }

  return null;
};
