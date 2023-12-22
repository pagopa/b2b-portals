'use client';
import React, { useEffect, useState } from 'react';
import { Header as HeaderEC } from '@pagopa/pagopa-editorial-components/dist/components/Header';
import { HeaderProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/Header';
import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';

const Header: React.FC<HeaderProps> = (headerData) => {
  const pathname = usePathname();
  const [headerDataWithActiveLink, setHeaderDataWithActiveLink] =
    useState(headerData);

  // eslint-disable-next-line functional/no-return-void
  useEffect(() => {
    setHeaderDataWithActiveLink({
      ...headerData,
      menu: headerData.menu.map((link) => ({
        ...link,
        active: pathname.includes(link.href ?? ''),
      })),
    });
  }, [pathname]);

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
            headerData.theme === 'dark'
              ? 'primary.contrastText'
              : 'text.primary',
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
