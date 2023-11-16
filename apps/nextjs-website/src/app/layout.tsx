import React from 'react';
import type { Metadata } from 'next';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { HeaderClient } from '@/components/HeaderClient';
import { getHeaderData } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerData: HeaderProps = await getHeaderData();

  return (
    <html>
      <body>
        <HeaderClient {...headerData} />
        {children}
      </body>
    </html>
  );
}
