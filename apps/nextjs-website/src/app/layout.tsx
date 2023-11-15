import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { FooterProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
import { PreHeaderClient } from '@/components/PreHeaderClient';
import { HeaderClient } from '@/components/HeaderClient';
import { getPreHeaderData } from '@/lib/api';
import { getHeaderData } from '@/lib/api';
import { FooterClient } from '@/components/FooterClient';
import { getFooterData } from '@/lib/api/footerAPI';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preHeaderData: PreHeaderProps = await getPreHeaderData();
  const headerData: HeaderProps = await getHeaderData();
  const footerData: FooterProps = await getFooterData();

  return (
    <html>
      <body>
        <PreHeaderClient {...preHeaderData} />
        <HeaderClient {...headerData} />
        {children}
        <FooterClient {...footerData} />
      </body>
    </html>
  );
}
