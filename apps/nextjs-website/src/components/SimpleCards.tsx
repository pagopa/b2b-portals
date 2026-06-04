'use client';

import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { SimpleCards as SimpleCardsRC } from '@react-components/components';
import { SimpleCardsProps } from '@react-components/types';
import { SimpleCardsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

export const makeSimpleCardsProps = ({
  locale,
  defaultLocale,
  title,
  subtitle,
  body,
  ctaButtons,
  image,
  items,
  textAlign,
  customBgColor,
  ...rest
}: SimpleCardsSection & SiteWidePageData): SimpleCardsProps => ({
  ...(customBgColor && { customBgColor }),
  ...(title && { title }),
  ...(subtitle && { subtitle }),
  ...(body && {
    body: MarkdownRenderer({
      markdown: body,
      locale,
      defaultLocale,
      variant: 'body2',
    }),
  }),
  ...(image?.url && {
    imageURL: image.url,
    imageAlt: image.alternativeText ?? '',
  }),
  ...(textAlign && { textAlign }),
  items: items.map(({ icon, label, text, title, href, ariaLabel }) => ({
    title,
    themeVariant: rest.themeVariant,
    ...(label && { label }),
    ...(text && { text }),
    ...(href && {
      href: LocalizeURL({ URL: href, locale, defaultLocale }),
    }),
    ...(ariaLabel && { ariaLabel }),
    ...(icon && {
      iconURL: icon.url,
    }),
  })),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(
        ({ icon, href, openInNewTab, ariaLabel, ...ctaBtn }) => ({
          ...ctaBtn,
          ...(openInNewTab && { openInNewTab }),
          ...(ariaLabel && { ariaLabel }),
          ...(icon && { startIcon: Icon(icon) }),
          href: LocalizeURL({ URL: href, locale, defaultLocale }),
        }),
      ),
    }),
  ...rest,
});

const SimpleCards = (props: SimpleCardsSection & SiteWidePageData) => (
  <SimpleCardsRC {...makeSimpleCardsProps(props)} />
);

export default SimpleCards;
