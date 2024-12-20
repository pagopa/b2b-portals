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
} from '@/lib/fetch/header';

const makeSublink = (
  sublink: HeaderSublink
): {
  label: string;
  href: string;
} => ({
  label: sublink.label,
  href:
    sublink.page.data.attributes.slug +
    (sublink.sectionID ? `#${sublink.sectionID}` : ''),
});

const makeHeaderProps = (
  { productName, menu, logo, beta, supportLink, drawer }: StandardHeaderData,
  pathname: string
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
          locale: 'en',
          defaultLocale: 'en',
        }),
      })),
      ctaCard: {
        ...drawer.ctaCard,
        subtitle: MarkdownRenderer({
          markdown: drawer.ctaCard.subtitle,
          variant: 'body2',
          locale: 'en',
          defaultLocale: 'en',
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
  // Add active link logic
  menu: menu.links.map((link) => ({
    theme: 'light',
    label: link.label,
    href: link.page.data?.attributes.slug,
    alignRight: link.alignRight,
    ...(link.sublinks.length > 0 && {
      items: link.sublinks.map((sublink) => makeSublink(sublink)),
    }),
    ...(link.page.data && {
      active: pathname === link.page.data.attributes.slug,
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

const makeMegaHeaderProps = ({
  logo,
  ctaButton,
  menu,
}: MegaHeaderData): MegaHeaderProps => ({
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
      items: sublinkGroup.sublinks.map((sublink) => makeSublink(sublink)),
    })),
  })),
});

const Header = (props: HeaderData['data']['attributes']['header'][0]) => {
  const pathname = usePathname();
  // eslint-disable-next-line
  const menuType = props.__component;

  switch (menuType) {
    case 'headers.standard-header':
      return <HeaderRC {...makeHeaderProps(props, pathname)} />;
    case 'headers.mega-header':
      return <MegaHeaderRC {...makeMegaHeaderProps(props)} />;
  }
};

export default Header;
