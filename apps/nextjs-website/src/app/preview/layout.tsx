import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { theme } from '../theme';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewLayout = async ({ children }: PreviewLayoutProps) => (
  <ThemeProvider theme={theme}>
    <html lang='it'>
      <body style={{ margin: 0, scrollBehavior: 'smooth' }}>{children}</body>
    </html>
  </ThemeProvider>
);

export default PreviewLayout;
