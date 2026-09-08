import { marked } from 'marked';
import parse, {
  attributesToProps,
  DOMNode,
  domToReact,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';
import { SxProps, Theme, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { LocalizeMarkdownLinks } from '@/lib/linkLocalization';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { isValidExternalLink } from '@react-components/components/common/Common';

type MarkdownRendererProps = {
  markdown: string;
  locale: Locale;
  defaultLocale: Locale;
  variant?: Variant;
  sx?: SxProps<Theme>;
};

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (
      domNode instanceof Element &&
      domNode.name === 'a' &&
      isValidExternalLink(domNode.attribs['href'])
    ) {
      return (
        <a
          {...attributesToProps(domNode.attribs)}
          target='_blank'
          rel='noopener noreferrer'
        >
          {domToReact(domNode.children as DOMNode[], parserOptions)}
        </a>
      );
    }
    return undefined;
  },
};

const MarkdownRenderer = ({
  markdown,
  locale,
  defaultLocale,
  variant,
  sx,
}: MarkdownRendererProps) => (
  <Typography variant={variant || 'body1'} component='div' {...(sx && { sx })}>
    {parse(
      // @ts-expect-error: Temporary workaround until the library offers improved API. See: https://github.com/markedjs/marked/pull/3116
      marked.parse(LocalizeMarkdownLinks({ markdown, locale, defaultLocale }), {
        async: false,
        breaks: true,
      }),
      parserOptions,
    )}
  </Typography>
);
export default MarkdownRenderer;
