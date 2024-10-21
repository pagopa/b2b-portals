import { ReactNode } from 'react';

type Props = {
  readonly children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file(s)
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}

// TODO: Evaluate if we need a not-found.tsx (and RootLayout as a consequence)
