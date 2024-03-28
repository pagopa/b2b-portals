import { ThemeProvider } from '@mui/material/styles';
import Script from 'next/script';
import { theme } from './theme';
import PreHeader from '@/components/PreHeader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getPreHeaderProps, getHeaderProps, getFooterProps } from '@/lib/api';

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
      <html lang='it'>
        <body style={{ margin: 0 }}>
          <PreHeader {...preHeaderProps} />
          <Header {...headerProps} />
          {children}
          <Footer {...footerProps} />
          <Script
            src='/scripts/otnotice-1.0.min.js'
            type='text/javascript'
            id='otprivacy-notice-script'
            strategy='beforeInteractive'
          />
        </body>
      </html>
    </ThemeProvider>
  );
}
