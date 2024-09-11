'use client';
import { HighlightBoxProps } from '@react-components/types';
import { HighlightBox as HighlightBoxRC } from '@react-components/components';
import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';

const makeHighlightBoxProps = ({
  image,
  eyelet,
  link,
  ...rest
}: HighlightBoxSection): HighlightBoxProps => ({
  imageURL: image.data.attributes.url,
  ...(eyelet && { eyelet }),
  ...(link && { link }),
  ...rest,
});

const HighlightBoxComponent = (props: HighlightBoxSection) => (
  <HighlightBoxRC {...makeHighlightBoxProps(props)} />
);

export default HighlightBoxComponent;
