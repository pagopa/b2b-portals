'use client';
import type { Metadata } from 'next';
import { PreHeader, Header, Footer } from '@pagopa/pagopa-editorial-components';
import preHeaderData from './preHeaderData.json';
import headerData from './headerData.json';
import footerData from './footerData.json';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PreHeader
          leftCtas={preHeaderData.leftCtas}
          rightCtas={preHeaderData.rightCtas}
        />

        <Header
          menu={headerData.menu}
          product={headerData.product}
          theme={headerData.theme}
        />

        {children}

        <Footer
          activeLanguage={footerData.activeLanguage}
          companyLink={footerData.companyLink}
          languages={footerData.languages}
          legalInfo={footerData.legalInfo}
          links={footerData.links}
          onLanguageChanged={footerData.onLanguageChanged}
        />
      </body>
    </html>
  );
}
