import { ReactNode } from 'react';

type RootLayoutProps = {
  readonly children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file is
// required for static builds, even if it's just passing children through.
const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='it'>
    <body style={{ margin: 0, scrollBehavior: 'smooth' }}>{children}</body>
  </html>
);

export default RootLayout;
