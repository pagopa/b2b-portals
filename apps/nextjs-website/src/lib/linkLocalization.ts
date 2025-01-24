interface LocalizeURLProps {
  readonly URL: string;
  readonly locale: 'it' | 'en';
  readonly defaultLocale: 'it' | 'en';
}

interface LocalizeMarkdownLinksProps {
  readonly markdown: string;
  readonly locale: 'it' | 'en';
  readonly defaultLocale: 'it' | 'en';
}

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
  // Any other case (whether it be an invalid or external link) won't be localized
  return URL[0] === '/';
};

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

export const LocalizeMarkdownLinks = ({
  markdown,
  locale,
  defaultLocale,
}: LocalizeMarkdownLinksProps): string => {
  // eslint-disable-next-line no-useless-escape
  const markdownLinkRegex = /\[([^\[\]]*)\]\((.*?)\)/gm;
  const links = [...markdown.matchAll(markdownLinkRegex)]
    .map((link) => ({
      text: link[1],
      URL: link[2],
      localizedURL: LocalizeURL({ URL: link[2] ?? '', locale, defaultLocale }),
    }))
    .filter((link) => link.URL !== link.localizedURL); // No need to replace URLs that didn't change

  if (links.length <= 0) {
    // No links have changed
    return markdown;
  }

  const urlsMap = Object.fromEntries(
    links.map((link) => [
      `(${link.URL})`, // Enclose key inside parenthesis to isolate full markdown links
      `(${link.localizedURL})`,
    ]),
  );
  const urlsRegex = new RegExp(
    Object.keys(urlsMap)
      .map((key) => key.replace('(', '\\(').replace(')', '\\)')) // Escape parenthesis for regex
      .join('|'),
    'gi',
  );

  return markdown.replace(urlsRegex, (matched) => urlsMap[matched] ?? matched);
};
