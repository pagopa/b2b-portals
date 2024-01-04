import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

export const MarkdownRenderer = (
  markdownText: string,
  typographyVariant: Variant = 'body1'
): JSX.Element => (
  <Typography variant={typographyVariant} component='div'>
    {parse(marked.parse(markdownText, { async: false }).toString())}
  </Typography>
);
