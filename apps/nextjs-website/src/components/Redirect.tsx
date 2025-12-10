'use client';

import { useEffect } from 'react';
import type { RedirectSection as RedirectProps } from '@/lib/fetch/types/PageSection';

const Redirect = ({ redirectURL, redirectDelay }: RedirectProps) => {
  useEffect(() => {
    const safeDelay = redirectDelay > 0 ? redirectDelay : 0;

    const timeoutId = window.setTimeout(() => {
      window.location.replace(redirectURL);
    }, safeDelay);

    return () => window.clearTimeout(timeoutId);
  }, [redirectDelay, redirectURL]);

  return null;
};

export default Redirect;
