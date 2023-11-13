import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderClient } from '@/lib/components/PreHeaderClient';
import { getPreHeaderData } from '@/lib/API/preHeaderAPI';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

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

  return (
    <html>
      <body>
        {preHeaderData &&
          <PreHeaderClient {...preHeaderData}/>
        }
        {children}
      </body>
    </html>
  );
}
