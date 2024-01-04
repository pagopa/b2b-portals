'use client';
import React from 'react';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';

const Header = (props: HeaderProps) => {
  const pathname = usePathname();

  const headerDataWithActiveLink = {
    ...props,
    menu: props.menu.map((link) => ({
      ...link,
      active: pathname.includes(link.href ?? ''),
    })),
  };

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
      <HeaderEC {...headerDataWithActiveLink} />
    </Stack>
  );
};

export default Header;
