import { ReactNode } from 'react';
import { isPreviewMode } from '@/lib/api';
import EmptyLayout from '@/components/EmptyLayout';

type PreviewLayoutProps = {
  children: ReactNode;
};

// This layout is needed mainly to pass theme to the preview page
const PreviewRootLayout = async ({ children }: PreviewLayoutProps) =>
  isPreviewMode() ? (
    <html lang='it'>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  ) : (
    <EmptyLayout />
  );
export default PreviewRootLayout;
