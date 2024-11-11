'use client';
import { HighlightBoxProps } from '@react-components/types';
import { HighlightBox as HighlightBoxRC } from '@react-components/components';
import { HighlightBoxSection } from '@/lib/fetch/types/PageSection';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

const makeHighlightBoxProps = ({
  image,
  eyelet,
  link,
  ...rest
}: HighlightBoxSection): HighlightBoxProps => ({
  image: {
    src: image.data.attributes.url,
    srcSet: makeSrcSetFromStrapiImageData(image.data),
  },
  ...(eyelet && { eyelet }),
  ...(link && { link }),
  ...rest,
});

const HighlightBoxComponent = (props: HighlightBoxSection) => (
  <HighlightBoxRC {...makeHighlightBoxProps(props)} />
);

export default HighlightBoxComponent;
