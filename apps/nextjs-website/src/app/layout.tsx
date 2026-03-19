import { ReactNode } from 'react';

type RootLayoutProps = {
  readonly children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file is
// required for static builds, even if it's just passing children through.
const RootLayout = ({ children }: RootLayoutProps) => (
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
);

export default RootLayout;
