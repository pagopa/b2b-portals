import { marked } from 'marked';
import parse from 'html-react-parser';
import { Typography } from '@mui/material';

export const MDtoJSX = (markdownText: string): JSX.Element => (
  <Typography>
    {parse(marked.parse(markdownText, { async: false }) as string)}
  </Typography>
);
