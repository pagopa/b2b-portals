import type { Metadata } from 'next';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import { getPreHeaderProps, getHeaderProps } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Page',
  description: 'New Page Created',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preHeaderProps = await getPreHeaderProps();
  const headerProps: HeaderProps = await getHeaderProps();

  return (
    <html lang='en'>
      <body>
        <PreHeader {...preHeaderProps} />
        <Header {...headerProps} />
        {children}
      </body>
    </html>
  );
}
