import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { LocalizeURL } from '@react-components/components/common/LocalizeURL';

type MarkdownRendererProps = {
  markdown: string;
  locale: 'it' | 'en';
  defaultLocale: 'it' | 'en';
  variant?: Variant;
};

interface LocalizeLinksProps {
  markdown: string;
  locale: 'it' | 'en';
  defaultLocale: 'it' | 'en';
}

// TODO: Add tests
const LocalizeLinks = ({
  markdown,
  locale,
  defaultLocale,
}: LocalizeLinksProps): string => {
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
    ])
  );
  const urlsRegex = new RegExp(
    Object.keys(urlsMap)
      .map((key) => key.replace('(', '\\(').replace(')', '\\)')) // Escape parenthesis for regex
      .join('|'),
    'gi'
  );

  return markdown.replace(urlsRegex, (matched) => urlsMap[matched] ?? matched);
};

const MarkdownRenderer = ({
  markdown,
  locale,
  defaultLocale,
  variant,
}: MarkdownRendererProps) => (
  <Typography variant={variant || 'body1'} component='div'>
    {parse(
      // @ts-expect-error: Temporary workaround until the library offers improved API. See: https://github.com/markedjs/marked/pull/3116
      marked.parse(LocalizeLinks({ markdown, locale, defaultLocale }), {
        async: false,
      })
    )}
  </Typography>
);
export default MarkdownRenderer;
