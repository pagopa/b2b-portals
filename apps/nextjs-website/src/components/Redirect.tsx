'use client';

import { RedirectSection } from '@/lib/fetch/types/PageSection';

const Redirect = ({ redirectURL }: RedirectSection) => (
  <>
    <meta httpEquiv='refresh' content={`0; url=${redirectURL}`} />
    <p>
      Redirecting to <a href={redirectURL}>{redirectURL}</a>
    </p>
  </>
);

export default Redirect;
