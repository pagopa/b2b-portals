import { marked } from 'marked';
import parse from 'html-react-parser';

export const MDtoJSX = (markdownText: string): JSX.Element => (
  <div className='markdown'>
    {parse(marked.parse(markdownText, { async: false }) as string)}
  </div>
);
