import React from 'react';
import type { Metadata } from 'next';
import { FooterProps } from '@pagopa/pagopa-editorial-components/dist/components/Footer';
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
  const footerData: FooterProps = await getFooterData();

  return (
    <html>
      <body>
        {children}
        <FooterClient {...footerData} />
      </body>
    </html>
  );
}
