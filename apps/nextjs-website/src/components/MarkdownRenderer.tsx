import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

type MarkdownRendererProps = {
  markdown: string;
  variant?: Variant;
  theme?: 'light' | 'dark';
};
const MarkdownRenderer = ({
  markdown,
  variant,
  theme,
}: MarkdownRendererProps) => (
  <Typography
    variant={variant || 'body1'}
    component='div'
    color='currentcolor' // Get color from parent
    sx={{
      a: {
        fontWeight: 'bold',
        color: theme === 'dark' ? 'currentcolor' : 'primary.main', // Prevent links being blue in dark mode
        textDecorationColor:
          theme === 'dark' ? 'currentcolor' : 'rgba(0, 115, 230, .4)', // Theme-aware properties do not work for textDecorationColor
        '&:hover': {
          textDecorationColor: 'currentcolor',
        },
      },
    }}
  >
    {
      // @ts-expect-error: Temporary workaround until the library offers
      // improved API. See: https://github.com/markedjs/marked/pull/3116
      parse(marked.parse(markdown, { async: false }))
    }
  </Typography>
);
export default MarkdownRenderer;
