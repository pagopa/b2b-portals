'use client';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { Header as HeaderRC } from '@react-components/components';
import { MegaHeader as MegaHeaderRC } from '@react-components/components';
import { HeaderProps, MegaHeaderProps } from '@react-components/types';
import {
  HeaderData,
  HeaderWithMegaMenuData,
  HeaderWithMenuData,
} from '@/lib/fetch/header';

const makeHeaderProps = (
  { ctaButtons, productName, menu, logo, beta }: HeaderWithMenuData,
  pathname: string
): HeaderProps => ({
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
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  // Add active link logic
  menu: menu[0]
    ? menu[0].links.map((link) => ({
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
      }))
    : [],
  theme: 'light',
  beta,

  // TODO: add logic for B2BP
  drawerMenuTitle: '',
  ctaTitle: '',
  ctaButtonText: '',
  ctaHref: '',
  ctaBodyText: '',
  drawerCardsData: [],
});

const makeMegaHeaderProps = ({
  logo,
  ctaButtons,
  menu,
}: HeaderWithMegaMenuData): MegaHeaderProps => ({
  logoSrc: logo.data?.attributes.url ?? '',
  logoAlt: logo.data?.attributes.alternativeText ?? '',
  buttonHref: ctaButtons[0]?.href ?? '',
  ...(menu[0] && {
    menuItems: menu[0].links.map((link) => ({
      primary: link.label,
      secondary: link.sublinkGroups.map((sublinkGroup) => ({
        title: sublinkGroup.title,
        // TODO: Update the line below to pass label and (page slug + section) as href when href will be implemented into MegaHeader
        items: sublinkGroup.sublinks.map((sublink) => sublink.label),
      })),
    })),
  }),
});

const Header = (props: HeaderData['data']['attributes']) => {
  const pathname = usePathname();
  // eslint-disable-next-line
  const menuType = props.menu[0]?.__component;

  if (menuType === undefined) {
    // Disable lint for this case because we want the build to fail if user managed to not input a menu
    // eslint-disable-next-line
    throw new Error('An header menu is required to build successfully');
  }

  switch (menuType) {
    case 'menu.menu':
      return (
        <HeaderRC {...makeHeaderProps(props as HeaderWithMenuData, pathname)} />
      );
    case 'menu.mega-menu':
      return (
        <MegaHeaderRC
          {...makeMegaHeaderProps(props as HeaderWithMegaMenuData)}
        />
      );
  }
};

export default Header;
