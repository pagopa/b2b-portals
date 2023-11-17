import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import PreHeader from '@/components/PreHeader';
import { getPreHeaderProps } from '@/lib/api';

const inter = Inter({ subsets: ['latin'] });

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
  return (
    <html lang='en'>
      <body className={inter.className}>
        <PreHeader {...preHeaderProps} />
        {children}
      </body>
    </html>
  );
}
