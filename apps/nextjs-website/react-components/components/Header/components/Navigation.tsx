import { Stack } from '@mui/material';
import { MenuDropdown } from './MenuDropdown';
import { NavigationProps } from '../../../types/Header/Header.types';

export const Navigation = ({ menu, theme }: NavigationProps) => (
  <Stack
    gap={{ md: 4, xs: 2 }}
    direction={{ md: 'row', xs: 'column' }}
    component="nav"
    aria-label="main"
  >
    {menu.map((menu, index) => (
      <MenuDropdown key={index} {...menu} theme={theme} />
    ))}
  </Stack>
);
