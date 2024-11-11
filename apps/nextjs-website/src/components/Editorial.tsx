'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Editorial as EditorialRC } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

export const makeEditorialProps = ({
  eyelet,
  body,
  image,
  mobileImage,
  ctaButtons,
  storeButtons,
  ...rest
}: EditorialSection & { themeVariant: ThemeVariant }): EditorialProps => ({
  ...(eyelet && { eyelet }),
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  image: (
    <img
      src={image.data.attributes.url}
      srcSet={makeSrcSetFromStrapiImageData(image.data)}
      alt={image.data.attributes.alternativeText ?? ''}
      width={0}
      height={0}
    />
  ),
  mobileImage: (
    <img
      src={mobileImage.data.attributes.url}
      srcSet={makeSrcSetFromStrapiImageData(mobileImage.data)}
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

const Editorial = (
  props: EditorialSection & { themeVariant: ThemeVariant }
) => <EditorialRC {...makeEditorialProps(props)} />;

export default Editorial;
