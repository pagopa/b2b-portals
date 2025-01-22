import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { LocalizeMarkdownLinks } from '@/lib/linkLocalization';

type MarkdownRendererProps = {
  markdown: string;
  locale: 'it' | 'en';
  defaultLocale: 'it' | 'en';
  variant?: Variant;
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
      marked.parse(LocalizeMarkdownLinks({ markdown, locale, defaultLocale }), {
        async: false,
      }),
    )}
  </Typography>
);
export default MarkdownRenderer;
