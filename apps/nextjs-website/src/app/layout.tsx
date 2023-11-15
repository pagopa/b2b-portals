import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { PreHeaderClient } from '@/components/PreHeaderClient';
import { HeaderClient } from '@/components/HeaderClient';
import { getPreHeaderData } from '@/lib/api';
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
  const preHeaderData: PreHeaderProps = await getPreHeaderData();
  const headerData: HeaderProps = await getHeaderData();

  return (
    <html>
      <body>
        <PreHeaderClient {...preHeaderData} />
        <HeaderClient {...headerData} />
        {children}
      </body>
    </html>
  );
}
