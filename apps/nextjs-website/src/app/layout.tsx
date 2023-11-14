import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';
import { PreHeaderClient } from '@/components/PreHeaderClient';
import { getPreHeaderData } from '@/lib/api';

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

  return (
    <html>
      <body>
        <PreHeaderClient {...preHeaderData} />
        {children}
      </body>
    </html>
  );
}
