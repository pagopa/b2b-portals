import type { Metadata } from 'next';
import PreHeader from '@/components/PreHeader';
import Footer from '@/components/Footer';
import { getFooterProps, getPreHeaderProps } from '@/lib/api';

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
  const footerProps = await getFooterProps();
  return (
    <html lang='en'>
      <body>
        <PreHeader {...preHeaderProps} />
        {children}
        <Footer {...footerProps} />
      </body>
    </html>
  );
}
