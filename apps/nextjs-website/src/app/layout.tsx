import React from 'react';
import type { Metadata } from 'next';
import { PreHeaderClient } from '@/lib/components/PreHeaderClient';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PreHeaderClient />

        {children}
      </body>
    </html>
  );
}
