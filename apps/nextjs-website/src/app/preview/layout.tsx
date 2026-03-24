import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme } from '../theme';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewRootLayout = async ({ children }: PreviewLayoutProps) => (
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
);

export default PreviewRootLayout;
