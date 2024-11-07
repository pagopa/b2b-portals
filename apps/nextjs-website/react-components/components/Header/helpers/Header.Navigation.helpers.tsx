import React from 'react';
import { Stack } from '@mui/material';
import { NavigationProps } from '@react-components/types/Header/Header.types';
import { MenuDropdown } from './Header.MenuDropdown.helpers';

export const Navigation = ({
  menu,
  theme,
  isMobile,
}: NavigationProps & { isMobile: boolean }) => {
  const leftItems = menu.filter((item) => !item.alignRight);
  const rightItems = menu.filter((item) => item.alignRight);

  return (
    <Stack
      direction='row'
      component='nav'
      aria-label='main'
      className='desktop-menu'
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction='row' gap={4} alignItems='center' height='100%'>
        {leftItems.map((menu, index) => (
          <MenuDropdown
            key={index}
            {...menu}
            theme={theme}
            isMobile={isMobile}
          />
        ))}
      </Stack>
      <Stack direction='row' gap={4} alignItems='center' height='100%'>
        {rightItems.map((menu, index) => (
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
