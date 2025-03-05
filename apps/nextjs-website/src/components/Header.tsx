/* eslint-disable functional/no-return-void */
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
import { LocalizeURL } from '@/lib/linkLocalization';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    opera: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    MSStream: any;
  }
}

const LinkLabelValues = {
  it: 'NOVITÀ',
  en: 'NEW',
  de: 'NEU',
  fr: 'NOUVEAU',
  sl: 'NOVO',
};

const openAppStore = ({
  appStoreLink,
  googleStoreLink,
  fallbackLink,
}: {
  appStoreLink: string;
  googleStoreLink: string;
  fallbackLink: string;
}): void => {
  // Detect OS
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isWindowsPhone = /windows phone/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
  const isAndroid = /android/i.test(userAgent);

  if (isWindowsPhone) {
    // Check windows phone first because recent windows phone user agents contain "Android" and "iPhone"
    // eslint-disable-next-line functional/immutable-data
    window.location.href = fallbackLink;
  } else if (isIOS) {
    // eslint-disable-next-line functional/immutable-data
    window.location.href = appStoreLink;
  } else if (isAndroid) {
    // eslint-disable-next-line functional/immutable-data
    window.location.href = googleStoreLink;
  } else {
    // eslint-disable-next-line functional/immutable-data
    window.location.href = fallbackLink;
  }
};

const makeHeaderSublink = (
  sublink: HeaderSublink,
): { label: string; href: string; badge?: string } => ({
  label: sublink.label,
  href: sublink.page
    ? sublink.page.slug + (sublink.sectionID ? `#${sublink.sectionID}` : '')
    : (sublink.externalURL ?? ''),
});

const makeMegaHeaderSublink = (
  sublink: MegaHeaderSublink,
  locale: Locale,
): { label: string; href: string; badge?: string } => ({
  label: sublink.label,
  href: sublink.page
    ? sublink.page.slug + (sublink.sectionID ? `#${sublink.sectionID}` : '')
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
      title: drawer.title,
      ...(drawer.subtitle && { subtitle: drawer.subtitle }),
      buttonText: drawer.buttonText,
      linkCards: drawer.linkCards.map(({ icons, ...card }) => ({
        ...card,
        subtitle: MarkdownRenderer({
          markdown: card.subtitle,
          variant: 'body2',
          locale,
          defaultLocale,
        }),
        icons: icons.map((icon) => icon.url),
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
  ...(logo && {
    logo: {
      src: logo.url,
      href: '/',
      alt: logo.alternativeText ?? productName,
    },
  }),
  product: {
    name: productName,
    href: '/',
  },
  menu: menu.links.map((link) => ({
    theme: 'light',
    label: link.label,
    href: link.page?.slug,
    alignRight: link.alignRight,
    ...(link.sublinks.length > 0 && {
      items: link.sublinks.map(makeHeaderSublink),
    }),
    ...(link.page && {
      sx: {
        color: pathname === link.page.slug ? 'primary.main' : 'text.secondary',
      },
    }),
  })),
});

const makeMegaHeaderProps = (
  {
    logo,
    ctaButton,
    menu,
    drawer,
    appCtaButton,
    mixpanelCtaClickEvent,
  }: MegaHeaderData,
  locale: Locale,
  defaultLocale: Locale,
): MegaHeaderProps => ({
  ...(ctaButton && {
    ctaButton: {
      ...ctaButton,
      ...(ctaButton.icon && { startIcon: Icon(ctaButton.icon) }),
      ...(mixpanelCtaClickEvent && { trackEvent: mixpanelCtaClickEvent }),
    },
  }),
  ...(appCtaButton && {
    appCtaButton: {
      text: appCtaButton.text,
      variant: appCtaButton.variant,
      size: appCtaButton.size,
      onClick: () => openAppStore(appCtaButton),
      ...(mixpanelCtaClickEvent && { trackEvent: mixpanelCtaClickEvent }),
    },
  }),
  ...(drawer && {
    drawer: {
      title: drawer.title,
      ...(drawer.subtitle && { subtitle: drawer.subtitle }),
      buttonText: drawer.buttonText,
      linkCards: drawer.linkCards.map(({ icons, ...card }) => ({
        ...card,
        subtitle: MarkdownRenderer({
          markdown: card.subtitle,
          variant: 'body2',
          locale,
          defaultLocale,
        }),
        icons: icons.map((icon) => icon.url),
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
  logo: {
    src: logo.url,
    alt: logo.alternativeText ?? '',
    href: LocalizeURL({
      URL: '/',
      locale,
      defaultLocale,
    }),
  },
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
  ...(menu.trackSublinkClickEvent && {
    trackSublinkClickEvent: menu.trackSublinkClickEvent,
  }),
});

const Header = ({
  locale,
  defaultLocale,
  ...props
}: HeaderData['data']['header'][0] & {
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
      return (
        <MegaHeaderRC {...makeMegaHeaderProps(props, locale, defaultLocale)} />
      );
  }
};

export default Header;
