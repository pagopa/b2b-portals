import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

export const MarkdownRenderer = (
  markdownText: string,
  typographyVariant: Variant = 'body1'
): JSX.Element => (
  <Typography variant={typographyVariant} component='div'>
    {
      // @ts-expect-error: Temporary workaround until the library offers
      // improved API. See: https://github.com/markedjs/marked/pull/3116
      parse(marked.parse(markdownText, { async: false }))
    }
  </Typography>
);
