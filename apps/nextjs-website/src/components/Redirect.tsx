'use client';

import type { RedirectProps } from '@react-components/types/Redirect/Redirect.types';

const Redirect = ({ redirectURL }: RedirectProps) => (
  <>
    <meta httpEquiv='refresh' content={`0; url=${redirectURL}`} />
    <p>
      Redirecting to <a href={redirectURL}>{redirectURL}</a>
    </p>
  </>
);

export default Redirect;
