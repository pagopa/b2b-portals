'use client';
import React from 'react';
import { Footer } from '@pagopa/pagopa-editorial-components';
import { FooterProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer';

export const FooterClient: React.FC<Omit<FooterProps, 'onLanguageChanged'>> = (
  footerData
) => <Footer {...footerData} onLanguageChanged={() => {}} />;
