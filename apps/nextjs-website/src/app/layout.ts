import { ReactNode } from 'react';

type RootLayoutProps = {
  readonly children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file is
// required for static builds, even if it's just passing children through.
export default function RootLayout({ children }: RootLayoutProps) {
  return children;
}
