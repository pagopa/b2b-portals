import type { Metadata } from 'next';
import PreHeader from '@/components/PreHeader';
import { getPreHeaderProps } from '@/lib/api';

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
      <body>
        <PreHeader {...preHeaderProps} />
        {children}
      </body>
    </html>
  );
}
