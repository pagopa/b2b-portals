'use client';
import React from 'react';
import {
  FooterProps,
  Footer as FooterEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';

const Footer: React.FC<Omit<FooterProps, 'onLanguageChanged'>> = (
  footerData
) => <FooterEC {...footerData} onLanguageChanged={() => {}} />;

export default Footer;
