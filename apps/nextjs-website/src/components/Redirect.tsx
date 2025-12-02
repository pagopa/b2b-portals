import { permanentRedirect, redirect as nextRedirect } from 'next/navigation';
import { RedirectSection } from '@/lib/fetch/types/PageSection';

const RedirectSectionComponent = ({
  redirectCode,
  redirectURL,
}: RedirectSection) => {
  if (redirectURL.trim().length === 0) {
    return null;
  }

  if (redirectCode === '301') {
    permanentRedirect(redirectURL);
  }

  return nextRedirect(redirectURL);
};

export default RedirectSectionComponent;
