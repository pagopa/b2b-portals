'use client';
import React from 'react';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import '../styles/Header.css';

const Header: React.FC<HeaderProps> = (headerData) => (
  <div id='header'>
    <HeaderEC {...headerData} />
  </div>
);

export default Header;
