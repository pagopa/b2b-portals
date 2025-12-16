import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import Script from 'next/script';
import { theme } from '../theme';
import { getSiteWideSEO, isPreviewMode } from '@/lib/api';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewLayout = async ({ children }: PreviewLayoutProps) => {
  const isPreviewBuild =
    process.env['NEXT_PHASE'] === PHASE_PRODUCTION_BUILD && isPreviewMode();

  const oneTrustToken = isPreviewBuild
    ? ''
    : (await getSiteWideSEO()).oneTrustToken;

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
