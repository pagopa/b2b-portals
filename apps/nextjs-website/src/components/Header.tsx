'use client';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';
import MUIIcon from './MUIIcon';
import { HeaderWithNavigation } from '@/lib/header';

const makeHeaderProps = (
  { ctaButtons, productName, menu, logo, ...rest }: HeaderWithNavigation,
  pathname: string
): HeaderProps => ({
  ...(logo.data && { logo: logo.data.attributes.url }),
  ...(productName && {
    product: {
      name: productName,
      href: '/',
    },
  }),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: MUIIcon(icon) }),
      })),
    }),
  // Add active link logic
  menu: menu.map((link) => ({
    ...link,
    active: pathname.includes(link.href ?? ''),
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
            a: {
              display: 'flex',
              justifyContent: 'left',
            },
            '.MuiStack-root': {
              // Popup on hover
              zIndex: 10,
            },
          },
        },
        b: {
          color:
            props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
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
