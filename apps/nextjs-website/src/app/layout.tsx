'use client';
import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import { getPreHeaderData } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

const fetchPreHeaderData = async (setPreHeaderData: Function) => {
  const { preHeaderData } = await getPreHeaderData();

  setPreHeaderData({
    leftCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.leftCTAButton.text,
          variant: preHeaderData.data.attributes.leftCTAButton.variant,
          color: preHeaderData.data.attributes.leftCTAButton.color,
          href: preHeaderData.data.attributes.leftCTAButton.href,
        },
      ],
    },
    rightCtas: {
      theme: preHeaderData.data.attributes.theme.toLowerCase(),
      ctaButtons: [
        {
          text: preHeaderData.data.attributes.rightCTAButton.text,
          variant: preHeaderData.data.attributes.rightCTAButton.variant,
          color: preHeaderData.data.attributes.rightCTAButton.color,
          href: preHeaderData.data.attributes.rightCTAButton.href,
        },
      ],
    },
  });
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preHeaderData, setPreHeaderData] = useState<any>(null);

  useEffect(() => {
    fetchPreHeaderData(setPreHeaderData);
  }, []);

  return (

    <html>

      <body>

        {preHeaderData != null && (
          <PreHeader
            leftCtas={preHeaderData.leftCtas}
            rightCtas={preHeaderData.rightCtas}
          />
        )}

        {children}

      </body>

    </html>

  );
}
