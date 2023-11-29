import type { Metadata } from 'next';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPreHeaderProps, getHeaderProps, getFooterProps } from '@/lib/api';
import '@/styles/default.css';

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
  const headerProps = await getHeaderProps();
  const footerProps = await getFooterProps();

  return (
    <html lang='en'>
      <body>
        <PreHeader {...preHeaderProps} />
        <Header {...headerProps} />
        {children}
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
