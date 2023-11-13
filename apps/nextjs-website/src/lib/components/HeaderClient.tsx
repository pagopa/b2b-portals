'use client';
import React from 'react';
import { Header } from '@pagopa/pagopa-editorial-components';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

export const HeaderClient: React.FC<HeaderProps> = async (headerData) =>
  headerData &&
  headerData.menu &&
  headerData.product &&
  headerData.ctaButtons &&
  headerData.theme && (
    <Header
      menu={headerData.menu}
      product={headerData.product}
      ctaButtons={headerData.ctaButtons}
      theme={headerData.theme}
    />
  );
