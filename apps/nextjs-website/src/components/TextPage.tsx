'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { TextPageSection } from '@/lib/fetch/types/PageSection';
import { TextPage as TextPageRC } from '@react-components/components';
import { TextPageProps } from '@react-components/types';

const makeTextPageProps = ({
  eyelet,
  subtitle,
  body,
  title,
  link,
}: TextPageSection): TextPageProps => ({
  ...(eyelet && { eyelet }),
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  ...(body && { body: MarkdownRenderer({ markdown: body }) }),
  ...(title && { title }),
  ...(link && { link }),
});

const TextPage = (props: TextPageSection) => (
  <TextPageRC {...makeTextPageProps(props)} />
);

export default TextPage;
