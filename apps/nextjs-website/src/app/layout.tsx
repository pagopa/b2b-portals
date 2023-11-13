import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { PreHeaderClient } from '@/components/PreHeaderClient';
import { getPreHeaderData } from '@/lib/api/preHeaderAPI';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { HeaderClient } from '@/components/HeaderClient';
import { getHeaderData } from '@/lib/api/HeaderAPI';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preHeaderAPIRes = await getPreHeaderData();
  const preHeaderData: PreHeaderProps | null = preHeaderAPIRes.preHeaderData;

  const HeaderAPIRes = await getHeaderData();
  const headerData: HeaderProps | null = HeaderAPIRes.headerData;

  return (
    <html>
      <body>
        {preHeaderData && <PreHeaderClient {...preHeaderData} />}
        {headerData && <HeaderClient {...headerData} />}
        {children}
      </body>
    </html>
  );
}
