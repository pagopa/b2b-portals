interface LocalizeURLProps {
  URL: string;
  locale: 'it' | 'en';
  defaultLocale: 'it' | 'en';
}

// TODO: This function currently treats "link" as an invalid link. Evaluate if this is desired depending on the implementation of links outside of markdown (which is the only thing that's currently implemented)
const isValidInternalLink = (URL: string): boolean => {
  // An empty string is not a link at all
  if (URL === '') {
    return false;
  }

  // Check link is not a section link
  if (URL[0] === '#') {
    return false;
  }

  // If URL starts with "/xx/" it's probably already localized
  if (URL[0] === '/' && URL[3] === '/') {
    return false;
  }

  // Do not localize links starting with http/s (external), mailto: (mail) or tel: (telephone)
  if (
    URL.toLowerCase().startsWith('http:') ||
    URL.toLowerCase().startsWith('https:') ||
    URL.toLowerCase().startsWith('mailto:') ||
    URL.toLowerCase().startsWith('tel:')
  ) {
    return false;
  }

  // At this point, if URL starts with "/" it should be a valid internal link
  if (URL[0] === '/') {
    return true;
  }

  // Any other case (whether it be an invalid or external link) won't be accepted
  return false;
};

// TODO: Add tests
export const LocalizeURL = ({
  URL,
  locale,
  defaultLocale,
}: LocalizeURLProps): string => {
  if (locale === defaultLocale) {
    return URL;
  }

  if (!isValidInternalLink(URL)) {
    return URL;
  }

  return `/${locale}${URL}`;
};
