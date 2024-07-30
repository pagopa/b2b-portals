'use client';
import Image from 'next/image';
import MarkdownRenderer from './MarkdownRenderer';
import { Editorial as EditorialRC } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

export const makeEditorialProps = ({
  eyelet,
  body,
  image,
  mobileImage,
  ctaButtons,
  storeButtons,
  ...rest
}: EditorialSection): EditorialProps => ({
  ...(eyelet && { eyelet }),
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  image: (
    <Image
      src={image.data.attributes.url}
      alt={image.data.attributes.alternativeText ?? ''}
      width={0}
      height={0}
    />
  ),
  mobileImage: (
    <Image
      src={mobileImage.data.attributes.url} // Ensure mobileImage is correctly used here
      alt={mobileImage.data.attributes.alternativeText ?? ''}
      width={0}
      height={0}
    />
  ),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  ...(storeButtons && {
    storeButtons: {
      ...(storeButtons.hrefGoogle && { hrefGoogle: storeButtons.hrefGoogle }),
      ...(storeButtons.hrefApple && { hrefApple: storeButtons.hrefApple }),
    },
  }),
  ...rest,
});

const Editorial = (props: EditorialSection) => (
  <EditorialRC {...makeEditorialProps(props)} />
);

export default Editorial;
