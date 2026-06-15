'use client';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { Cards as CardsRC } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

export const makeCardsItemProps = ({
  icon,
  label,
  text,
  title,
  links,
  themeVariant,
  locale,
  defaultLocale,
}: CardsSection['items'][0] & SiteWidePageData): CardsProps['items'][0] => ({
  title,
  themeVariant,
  ...(icon && {
    iconURL: icon.url,
  }),
  ...(label && { label }),
  ...(text && {
    text: MarkdownRenderer({
      markdown: text,
      locale,
      defaultLocale,
      variant: 'body2',
      sx: { '> p': { margin: 0 } },
    }),
  }),
  ...(links.length > 0 && {
    links: links.map((link) => ({
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
      ...(link.ariaLabel && { ariaLabel: link.ariaLabel }),
    })),
  }),
});

export const makeCardsProps = ({
  locale,
  defaultLocale,
  items,
  title,
  titleTag,
  subtitle,
  body,
  ctaButtons,
  bottomCTA,
  customBgColor,
  cardsAlignment,
  ...rest
}: CardsSection & SiteWidePageData): CardsProps => ({
  text: {
    title,
    ...(subtitle && { subtitle }),
    ...(body && {
      body: MarkdownRenderer({
        markdown: body,
        locale,
        defaultLocale,
        variant: 'body2',
      }),
    }),
  },
  ...(titleTag && { titleTag }),
  ...(customBgColor && { customBgColor }),
  ...(cardsAlignment && { cardsAlignment }),
  items: items.map((card) =>
    makeCardsItemProps({
      ...card,
      themeVariant: rest.themeVariant,
      locale,
      defaultLocale,
    }),
  ),
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
  ...(bottomCTA && {
    bottomCTA: {
      ...bottomCTA,
      ariaLabel: bottomCTA.ariaLabel ?? '',
      openInNewTab: bottomCTA.openInNewTab ?? false,
    },
  }),
  ...rest,
});

const Cards = (props: CardsSection & SiteWidePageData) => (
  <CardsRC {...makeCardsProps(props)} />
);

export default Cards;
