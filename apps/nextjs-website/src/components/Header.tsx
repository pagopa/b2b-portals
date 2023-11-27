'use client';
import React from 'react';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';

const Header: React.FC<HeaderProps> = (headerData) => (
  <HeaderEC {...headerData} />
);

export default Header;
