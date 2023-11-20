import type { Metadata } from 'next';
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
  const HeaderProps = await getHeaderProps();
  return (
    <html lang='en'>
      <body>
        <PreHeader {...preHeaderProps} />
        <Header {...HeaderProps} />
        {children}
      </body>
    </html>
  );
}
