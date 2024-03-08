'use client';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';
import { theme } from '../app/theme';
import Icon from './Icon';
import { HeaderWithNavigation } from '@/lib/header';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      boxShadow: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      boxShadow?: string;
    };
  }
}

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

  return (
    <Stack
      sx={{
        nav: {
          '.MuiStack-root': {
            borderColor: 'primary.main',
            a: {
              display: 'flex',
              justifyContent: 'left',
              '&.MuiTypography-body1': {
                color: 'text.secondary',
              },
            },
            '.MuiTypography-root': {
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            },
            '& .MuiStack-root': {
                zIndex: 10,
                boxShadow: theme.custom.boxShadow,
              '& .MuiStack-root': {
                boxShadow: 'none',
              },
            },
          },
        },
        '.MuiChip-root': {
          width: 'auto',
          '.MuiChip-label': {
            whiteSpace: 'nowrap',
          },
        },
      }}
    >
      <HeaderEC {...makeHeaderProps(props, pathname)} />
    </Stack>
  );
};

export default Header;
