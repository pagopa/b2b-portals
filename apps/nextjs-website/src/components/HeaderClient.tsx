'use client';
import React from 'react';
import { Header } from '@pagopa/pagopa-editorial-components';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

export const HeaderClient: React.FC<HeaderProps> = (headerData, menuData) => (
  <Header {...headerData} {...menuData} />
);
