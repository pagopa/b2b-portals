'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Editorial as EditorialRC } from '@react-components/components';
import { EditorialProps } from '@react-components/types';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

export const makeEditorialProps = ({
  locale,
  defaultLocale,
  eyelet,
  body,
  image,
  mobileImage,
  ctaButtons,
  storeButtons,
  titleTag,
  ...rest
}: EditorialSection & SiteWidePageData): EditorialProps => ({
  ...(eyelet && { eyelet }),
  ...(titleTag && { titleTag }),
  body: MarkdownRenderer({
    markdown: body,
    locale,
    defaultLocale,
    variant: 'body2',
  }),
  image: (
    <img
      src={image.url}
      srcSet={makeSrcSetFromStrapiImageData(image)}
      alt={image.alternativeText ?? ''}
      width={0}
      height={0}
    />
  ),
  mobileImage: (
    <img
      src={mobileImage.url}
      srcSet={makeSrcSetFromStrapiImageData(mobileImage)}
      alt={mobileImage.alternativeText ?? ''}
      width={0}
      height={0}
    />
  ),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, href, openInNewTab, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(openInNewTab && { openInNewTab }),
        ...(icon && { startIcon: Icon(icon) }),
        href: LocalizeURL({ URL: href, locale, defaultLocale }),
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

const Editorial = (props: EditorialSection & SiteWidePageData) => (
  <EditorialRC {...makeEditorialProps(props)} />
);

export default Editorial;
