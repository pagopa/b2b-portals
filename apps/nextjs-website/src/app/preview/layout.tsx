import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme } from '../theme';
import { isPreviewMode } from '@/lib/api';
import EmptyLayout from '@/components/EmptyLayout';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewRootLayout = async ({ children }: PreviewLayoutProps) =>
  isPreviewMode() ? (
    <ThemeProvider theme={theme}>
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

export default PreviewRootLayout;
