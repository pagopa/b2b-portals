'use client';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import { Header as HeaderRC } from '@react-components/components';
import { HeaderProps } from '@react-components/types';
import { HeaderWithNavigation } from '@/lib/header';

const makeHeaderProps = (
  { ctaButtons, productName, menu, logo, ...rest }: HeaderWithNavigation,
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
  menu: menu.map((link) => ({
    ...link,
    active: pathname === link.href,
    sx: {
      color: pathname === link.href ? 'primary.main' : 'text.secondary',
    },
  })),
  ...rest,
});

const Header = (props: HeaderWithNavigation) => {
  const pathname = usePathname();

  return <HeaderRC {...makeHeaderProps(props, pathname)} />;
};

export default Header;
