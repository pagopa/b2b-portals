import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import Script from 'next/script';
import { theme } from '../theme';
import { getOneTrustToken } from '@/lib/api';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewLayout = async ({ children }: PreviewLayoutProps) => {
  const oneTrustToken = await getOneTrustToken();

  return (
    <ThemeProvider theme={theme}>
      <html lang='it'>
        <body style={{ margin: 0, scrollBehavior: 'smooth' }}>
          {children}
          <Script
            src='/scripts/otnotice-1.0.min.js'
            type='text/javascript'
            id='otprivacy-notice-script'
            strategy='beforeInteractive'
            {...(oneTrustToken && { 'data-settings': oneTrustToken })}
          />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default PreviewLayout;
