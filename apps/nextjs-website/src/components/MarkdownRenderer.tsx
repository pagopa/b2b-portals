import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type MarkdownRendererProps = {
  markdown: string;
  variant?: Variant;
};
const MarkdownRenderer = ({ markdown, variant }: MarkdownRendererProps) => (
  <Typography variant={variant || 'body1'} component='div'>
    {
      // @ts-expect-error: Temporary workaround until the library offers
      // improved API. See: https://github.com/markedjs/marked/pull/3116
      parse(marked.parse(markdown, { async: false }))
    }
  </Typography>
);
export default MarkdownRenderer;
