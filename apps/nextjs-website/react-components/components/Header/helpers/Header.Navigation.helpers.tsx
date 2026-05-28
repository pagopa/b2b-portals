import React from 'react';
import { Stack } from '@mui/material';
import { NavigationProps } from '@react-components/types/Header/Header.types';
import { MenuDropdown } from './Header.MenuDropdown.helpers';

export const Navigation = ({
  menu,
  theme,
  isMobile,
  labelMainMenu,
}: NavigationProps & { isMobile: boolean; labelMainMenu: string }) => {
  return (
    <Stack
      direction='row'
      component='nav'
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      role='navigation'
      aria-label={labelMainMenu}
    >
      <Stack
        direction='row'
        gap={5}
        alignItems='center'
        height='100%'
        component='ul'
        sx={{ m: 0, p: 0, listStyleType: 'none' }}
      >
        {menu.map((menu, index) => (
          <MenuDropdown
            key={index}
            {...menu}
            theme={theme}
            isMobile={isMobile}
          />
        ))}
      </Stack>
    </Stack>
  );
};
