import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { HeaderTitle } from './helpers/Header.HeaderTitle.helpers';
import { Navigation } from './helpers/Header.Navigation.helpers';
import { HamburgerMenu } from './helpers/Header.HamburgerMenu.helpers';
import MobileNav from './helpers/Header.MobileNav.helpers';
import { usePathname } from 'next/navigation';
import { TopBarHeader } from './helpers/Header.TopBarHeader.helpers';

const Header = ({
  product,
  menu,
  beta,
  logo,
  mobileLogo,
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderTitleMobile,
  labels,
  languages,
  activeLanguage,
}: HeaderProps) => {
  const muiTheme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const pathname = usePathname();

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (index: number, href?: string) => {
    if (href) {
      window.location.href = href;
      handleDropdownToggle(index);
    }
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <Box bgcolor='#0066CC' component='header' role='banner'>
      <TopBarHeader
        languages={languages}
        activeLanguage={activeLanguage}
        {...(topBarHeaderLogo && { topBarHeaderLogo })}
        {...(topBarHeaderTitle && { topBarHeaderTitle })}
        {...(topBarHeaderTitleMobile && { topBarHeaderTitleMobile })}
        isMobile={isMobile}
      />
      <Stack direction='column' gap={{ xs: 0, md: 0 }} sx={{ width: '100%' }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ padding: { xs: '16px 24px', md: '24px 32px' } }}
          color='#FFFFFF'
        >
          <HeaderTitle
            product={product}
            beta={beta}
            {...(logo ? { logo } : {})}
            {...(mobileLogo ? { mobileLogo } : {})}
            isMobile={isMobile}
          />
          {isMobile && (
            <HamburgerMenu
              onOpen={openHeader}
              onClose={closeHeader}
              open={menuOpen}
              ariaLabels={{
                openMenu: labels.openMenu,
                closeMenu: labels.closeMenu,
              }}
            />
          )}
        </Stack>

        {!isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              height: '56px',
              padding: '0px 32px',
            }}
          >
            <Navigation
              menu={menu.map((menu, index) => ({
                ...menu,
                isOpen: openDropdownIndex === index,
                onClick: () => handleMenuClick(index, menu.href),
                onDropdownClick: () => handleDropdownToggle(index),
                active: pathname === menu.href || pathname === '/' + menu.href,
              }))}
              theme='dark'
              isMobile={false}
            />
          </Stack>
        )}

        {isMobile && (
          <MobileNav
            isOpen={menuOpen}
            onClose={closeHeader}
            anchor='left'
            menu={menu}
            theme='dark'
          />
        )}
      </Stack>
    </Box>
  );
};

export default Header;
