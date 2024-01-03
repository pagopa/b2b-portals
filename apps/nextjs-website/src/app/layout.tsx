import type { Metadata } from 'next';
import { ThemeProvider } from '@mui/system';
import { theme } from '@pagopa/mui-italia';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPreHeaderProps, getHeaderProps, getFooterProps } from '@/lib/api';

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
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <head>
          {/* Import needed by <Icon /> to render MUI Icons */}
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons'
            rel='stylesheet'
          />
        </head>
        <body style={{ margin: 0 }}>
          <PreHeader {...preHeaderProps} />
          <Header {...headerProps} />
          {children}
          <Footer {...footerProps} />
        </body>
      </html>
    </ThemeProvider>
  );
}
