'use client';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import MarkdownRenderer from './MarkdownRenderer';
import { Header as HeaderRC } from '@react-components/components';
import { MegaHeader as MegaHeaderRC } from '@react-components/components';
import { HeaderProps, MegaHeaderProps } from '@react-components/types';
import {
  HeaderData,
  StandardHeaderData,
  MegaHeaderData,
  HeaderSublink,
  MegaHeaderSublink,
} from '@/lib/fetch/header';
import { Locale } from '@/lib/fetch/siteWideSEO';

const LinkLabelValues = {
  it: 'NOVITÀ',
  en: 'NEW',
  de: 'NEU',
  fr: 'NOUVEAU',
  sl: 'NOVO',
};

const makeHeaderSublink = (
  sublink: HeaderSublink,
): { label: string; href: string; badge?: string } => ({
  label: sublink.label,
  href: sublink.page.data
    ? sublink.page.data.attributes.slug +
      (sublink.sectionID ? `#${sublink.sectionID}` : '')
    : (sublink.externalURL ?? ''),
});

const makeMegaHeaderSublink = (
  sublink: MegaHeaderSublink,
  locale: Locale,
): { label: string; href: string; badge?: string } => ({
  label: sublink.label,
  href: sublink.page.data
    ? sublink.page.data.attributes.slug +
      (sublink.sectionID ? `#${sublink.sectionID}` : '')
    : (sublink.externalURL ?? ''),
  ...(sublink.isNew && { badge: LinkLabelValues[locale] }),
});

const makeHeaderProps = (
  { productName, menu, logo, beta, supportLink, drawer }: StandardHeaderData,
  pathname: string,
  locale: Locale,
  defaultLocale: Locale,
): HeaderProps => ({
  beta,
  ...(drawer && {
    drawer: {
      ...drawer,
      linkCards: drawer.linkCards.map((card) => ({
        ...card,
        subtitle: MarkdownRenderer({
          markdown: card.subtitle,
          variant: 'body2',
          locale,
          defaultLocale,
        }),
      })),
      ctaCard: {
        ...drawer.ctaCard,
        subtitle: MarkdownRenderer({
          markdown: drawer.ctaCard.subtitle,
          variant: 'body2',
          locale,
          defaultLocale,
        }),
      },
    },
  }),
  theme: 'light',
  ...(supportLink && { supportLink }),
  ...(logo.data && {
    logo: {
      src: logo.data.attributes.url,
      href: '/',
      alt: logo.data.attributes.alternativeText ?? productName,
    },
  }),
  product: {
    name: productName,
    href: '/',
  },
  menu: menu.links.map((link) => ({
    theme: 'light',
    label: link.label,
    href: link.page.data?.attributes.slug,
    alignRight: link.alignRight,
    ...(link.sublinks.length > 0 && {
      items: link.sublinks.map(makeHeaderSublink),
    }),
    ...(link.page.data && {
      sx: {
        color:
          pathname === link.page.data.attributes.slug
            ? 'primary.main'
            : 'text.secondary',
      },
    }),
  })),
});

const makeMegaHeaderProps = (
  { logo, ctaButton, menu }: MegaHeaderData,
  locale: Locale,
): MegaHeaderProps => ({
  ...(ctaButton && {
    ctaButton: {
      ...ctaButton,
      ...(ctaButton.icon && { startIcon: Icon(ctaButton.icon) }),
    },
  }),
  logoSrc: logo.data.attributes.url,
  logoAlt: logo.data.attributes.alternativeText ?? '',
  menuItems: menu.links.map((link) => ({
    primary: link.label,
    secondary: link.sublinkGroups.map((sublinkGroup) => ({
      title: sublinkGroup.title,
      items: sublinkGroup.sublinks.map((sublink) =>
        makeMegaHeaderSublink(sublink, locale),
      ),
    })),
    ...(link.ctaButton && {
      ctaButton: {
        ...link.ctaButton,
        ...(link.ctaButton.icon && { startIcon: Icon(link.ctaButton.icon) }),
      },
    }),
  })),
});

const Header = ({
  locale,
  defaultLocale,
  ...props
}: HeaderData['data']['attributes']['header'][0] & {
  locale: Locale;
  defaultLocale: Locale;
}) => {
  const pathname = usePathname();
  const menuType = props.__component;

  switch (menuType) {
    case 'headers.standard-header':
      return (
        <HeaderRC
          {...makeHeaderProps(props, pathname, locale, defaultLocale)}
        />
      );
    case 'headers.mega-header':
      return <MegaHeaderRC {...makeMegaHeaderProps(props, locale)} />;
  }
};

export default Header;
