import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { themeBase, themeExperimental } from '../theme';
import { isPreviewMode } from '@/lib/api';
import EmptyLayout from '@/components/EmptyLayout';
import { getSiteWideSEO } from '@/lib/getProps/siteWideSEO';
import { isExperimentalThemeVariant } from '@react-components/components/common/Common.helpers';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewRootLayout = async ({ children }: PreviewLayoutProps) => {
  const siteWideSEO = await getSiteWideSEO();
  const { themeVariant } = siteWideSEO;

  return isPreviewMode() ? (
    <ThemeProvider
      theme={
        isExperimentalThemeVariant(themeVariant) ? themeExperimental : themeBase
      }
    >
      <html lang='it'>
        <head>
          <style>{`
          html {
            scroll-behavior: smooth;
          }
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
        </head>
        <body style={{ margin: 0 }}>{children}</body>
      </html>
    </ThemeProvider>
  ) : (
    <EmptyLayout />
  );
};
export default PreviewRootLayout;
