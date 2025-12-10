'use client';

import { useEffect } from 'react';
import type { RedirectSection as RedirectProps } from '@/lib/fetch/types/PageSection';

const Redirect = ({ redirectURL, redirectDelay }: RedirectProps) => (
  <meta httpEquiv='refresh' content={`${Math.abs(redirectDelay)}; url=${redirectURL}`} />
);

export default Redirect;
