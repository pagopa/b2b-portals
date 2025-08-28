'use client';
import { TextAndImage as TextAndImageRC } from '@react-components/components';
import { TextAndImageSection } from '@/lib/fetch/types/PageSection';
import { TextAndImageProps } from '@react-components/types';

const makeTextAndImageProps = ({
  image,
  imageLinkTitle,
  imageLinkUrl,
  ...rest
}: TextAndImageSection): TextAndImageProps => ({
  image: {
    src: image.url,
    ...(imageLinkUrl && { href: imageLinkUrl }),
    ...(imageLinkTitle && { title: imageLinkTitle }),
  },
  ...rest,
});

const TextAndImage = (props: TextAndImageSection) => (
  <TextAndImageRC {...makeTextAndImageProps(props)} />
);

export default TextAndImage;
