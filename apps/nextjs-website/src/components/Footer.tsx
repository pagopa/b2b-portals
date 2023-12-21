'use client';
import React from 'react';
import {
  FooterProps,
  Footer as FooterEC,
} from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { MDtoJSX } from './rendering/MDtoJSX';

const RefineFooterProps = (
  props: Omit<FooterProps, 'onLanguageChanged'>
): Omit<FooterProps, 'onLanguageChanged'> => ({
  ...props,
  legalInfo: MDtoJSX(props.legalInfo as string, 'caption'),
});

const Footer: React.FC<Omit<FooterProps, 'onLanguageChanged'>> = (
  footerData
) => (
  <FooterEC {...RefineFooterProps(footerData)} onLanguageChanged={() => true} />
);
export default Footer;
