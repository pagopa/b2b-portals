import { Stack } from '@mui/material';
import { MenuDropdown } from './MenuDropdown';
import { NavigationProps } from '../../../types/Header/Header.types';

export const Navigation = ({ menu, theme }: NavigationProps) => (
  <Stack
    gap={{ md: 4, xs: 0 }}
    direction={{ md: 'row', xs: 'column' }}
    component="nav"
    aria-label="main"
    sx={{ width: { xs: '100%', md: 'auto' }, height: { xs: 'auto', md: '100%' } }}
  >
    {menu.map((menu, index) => (
      <MenuDropdown key={index} {...menu} theme={theme} sx={{ py: { xs: 1, sm: 0 } }} />
    ))}
  </Stack>
);
