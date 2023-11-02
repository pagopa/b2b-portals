'use client';
import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { getPreHeaderData } from '@/lib/api';
import { CtaProps } from '@pagopa/pagopa-editorial-components/dist/components/Ctas';
import { PreHeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/PreHeader';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

const fetchPreHeaderData = async () => {
  const { preHeaderData } = await getPreHeaderData();
  return preHeaderData;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preHeaderData: PreHeaderProps | null = await fetchPreHeaderData();

  return (
    <html>
      <body>
        {preHeaderData != null && (
          <PreHeader
            leftCtas={preHeaderData.leftCtas!}
            rightCtas={preHeaderData.rightCtas!}
          />
        )}

        {children}
      </body>
    </html>
  );
}
