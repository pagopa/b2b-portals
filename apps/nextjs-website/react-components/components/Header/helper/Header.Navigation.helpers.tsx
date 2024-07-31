import React from 'react';
import { Stack } from '@mui/material';
import { NavigationProps } from '@react-components/types/Header/Header.types';
import { MenuDropdown } from './Header.MenuDropdown.helpers';

export const Navigation = ({
  menu,
  theme,
  isMobile,
}: NavigationProps & { isMobile: boolean }) => (
  <Stack
    gap={{ md: 4, xs: 0 }}
    direction={{ md: 'row', xs: 'column' }}
    component='nav'
    aria-label='main'
    className='desktop-menu'
    sx={{
      width: { xs: '100%', md: 'auto' },
      height: '100%',
      alignItems: 'flex-end',
    }}
  >
    {menu.map((menu, index) => (
      <MenuDropdown
        key={index}
        {...menu}
        theme={theme}
        isMobile={isMobile}
        sx={{ py: { xs: 1, sm: 0 }, alignItems: 'flex-end' }}
      />
    ))}
  </Stack>
);
