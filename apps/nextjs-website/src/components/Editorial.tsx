'use client';
import Image from 'next/image';
import MarkdownRenderer from './MarkdownRenderer';
import { Editorial as EditorialEC } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

const makeEditorialProps = ({
  theme,
  eyelet,
  body,
  image,
  ctaButtons,
  storeButtons,
  ...rest
}: EditorialSection): EditorialProps => ({
  theme,
  ...(eyelet && { eyelet }),
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  image: (
    <Image
      src={`http://localhost:1337${image.url}`}
      alt={image.alternativeText ?? ''}
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
  <EditorialEC {...makeEditorialProps(props)} />
);

export default Editorial;
