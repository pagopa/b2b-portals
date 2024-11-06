import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import Script from 'next/script';
import { theme } from '../theme';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewLayout = ({ children }: PreviewLayoutProps) => (
  <ThemeProvider theme={theme}>
    <html lang='it'>
      <body style={{ margin: 0, scrollBehavior: 'smooth' }}>
        {children}
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

export default PreviewLayout;
