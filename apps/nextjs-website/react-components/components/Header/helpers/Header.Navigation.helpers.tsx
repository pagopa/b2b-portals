import React from 'react';
import { Stack } from '@mui/material';
import {
  HeaderProps,
  NavigationProps,
} from '@react-components/types/Header/Header.types';
import { MenuDropdown } from './Header.MenuDropdown.helpers';

export const Navigation = ({
  menu,
  theme,
  isMobile,
  labels,
}: NavigationProps & { isMobile: boolean; labels: HeaderProps['labels'] }) => {
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
      aria-label={labels.mainMenu}
    >
      <Stack
        direction='row'
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
            labels={labels}
          />
        ))}
      </Stack>
    </Stack>
  );
};
