'use client';
import { HighlightBoxProps } from '@react-components/types';
import { HighlightBox as HighlightBoxRC } from '@react-components/components';
import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';

const makeHighlightBoxProps = ({
  eyelet,
  title,
  body,
  buttonText,
  buttonHref,
  imageUrl,
  sectionID,
}: HighlightBoxSection): HighlightBoxProps => ({
  eyelet,
  title,
  body,
  buttonText,
  buttonHref,
  imageUrl: imageUrl?.data?.attributes?.url || '',
  sectionID,
});

const HighlightBoxComponent = (props: HighlightBoxSection) => (
  <HighlightBoxRC {...makeHighlightBoxProps(props)} />
);

export default HighlightBoxComponent;
