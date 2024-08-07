'use client';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { Header as HeaderRC } from '@react-components/components';
import { MegaHeader as MegaHeaderRC } from '@react-components/components';
import { HeaderProps, MegaHeaderProps } from '@react-components/types';
import {
  HeaderData,
  StandardHeaderData,
  MegaHeaderData,
} from '@/lib/fetch/header';

const makeHeaderProps = (
  { productName, menu, logo, beta, supportLink, drawer }: StandardHeaderData,
  pathname: string
): HeaderProps => ({
  beta,
  ...(drawer && { drawer }),
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
    ...(link.sublinks.length > 0 && {
      items: link.sublinks.map((sublink) => ({
        label: sublink.label,
        href:
          sublink.page.data.attributes.slug +
          (sublink.sectionID ? `#${sublink.sectionID}` : ''),
      })),
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
      items: sublinkGroup.sublinks.map((sublink) => ({
        label: sublink.label,
        href: sublink.page.data.attributes.slug,
      })),
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
