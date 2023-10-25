'use client';
import type { Metadata } from 'next';
import { PreHeader } from '@pagopa/pagopa-editorial-components';
import preHeaderData from '../lib/temporanyData/preHeaderData.json';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PreHeader
          leftCtas={{
            ctaButtons: [
              {
                color: 'inherit',
                href: '#',
                text: 'Link',
                variant: 'text',
              },
            ],
            theme: 'light',
          }}
          rightCtas={{
            ctaButtons: [
              {
                color: 'inherit',
                onClick: function noRefCheck() {},
                startIcon: <HelpOutlineIcon />,
                text: 'Assistenza',
                variant: 'text',
              },
            ],
            theme: 'light',
          }}
        />

        <PreHeader
          leftCtas={preHeaderData.leftCtas}
          rightCtas={preHeaderData.rightCtas}
        />

        {children}
      </body>
    </html>
  );
}
