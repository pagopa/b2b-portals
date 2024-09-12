'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { TextSectionSection } from '@/lib/fetch/types/PageSection';
import { TextSection as TextSectionRC } from '@react-components/components';
import { TextSectionProps } from '@react-components/types';

const makeTextSectionProps = ({
  eyelet,
  subtitle,
  body,
  title,
  link,
  ...rest
}: TextSectionSection): TextSectionProps => ({
  ...(eyelet && { eyelet }),
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  body: MarkdownRenderer({ markdown: body }),
  ...(title && { title }),
  ...(link && { link }),
  ...rest,
});

const TextSection = (props: TextSectionSection) => (
  <TextSectionRC {...makeTextSectionProps(props)} />
);

export default TextSection;
