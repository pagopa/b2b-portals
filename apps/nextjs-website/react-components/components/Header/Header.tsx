import React, { useEffect, useRef, useState } from 'react';
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
  const headerRef = useRef<HTMLDivElement | null>(null);

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

  const toggleAccessibility = (disableAccessibility: boolean) => {
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const prefooter = document.querySelector('#prefooter');

    const elements: Array<Element | null> = [main, footer, prefooter];

    elements.forEach((el) => {
      if (el) {
        if (disableAccessibility) {
          el.setAttribute('inert', '');
        } else {
          el.removeAttribute('inert');
        }
      }
    });
  };

  useEffect(() => {
    toggleAccessibility(menuOpen || openDropdownIndex == null ? false : true);
  }, [openDropdownIndex, menuOpen]);

  return (
    <>
      <TopBarHeader
        languages={languages}
        activeLanguage={activeLanguage}
        {...(topBarHeaderLogo && { topBarHeaderLogo })}
        {...(topBarHeaderTitle && { topBarHeaderTitle })}
        {...(topBarHeaderTitleMobile && { topBarHeaderTitleMobile })}
        isMobile={isMobile}
      />
      <Box
        component='header'
        role='banner'
        position='sticky'
        top={0}
        zIndex={1}
      >
        <Stack
          ref={headerRef}
          direction='column'
          gap={{ xs: 0, md: 0 }}
          sx={{
            width: '100%',
            bgcolor: '#0066CC',
          }}
        >
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{ padding: { xs: '16px 24px', md: '16px 32px' } }}
            color='#FFFFFF'
          >
            <HeaderTitle
              product={product}
              {...(logo ? { logo } : {})}
              {...(mobileLogo ? { mobileLogo } : {})}
              isMobile={isMobile}
            />

            {isMobile && (
              <HamburgerMenu
                onOpen={openHeader}
                ariaLabels={{
                  openMenu: labels.openMenu,
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
                labelMainMenu={labels.mainMenu}
                menu={menu.map((menu, index) => ({
                  ...menu,
                  isOpen: openDropdownIndex === index,
                  onClick: () => handleMenuClick(index, menu.href),
                  onDropdownClick: () => handleDropdownToggle(index),
                  active:
                    pathname === menu.href || pathname === '/' + menu.href,
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
              labels={labels}
              anchor='left'
              menu={menu}
              theme='dark'
            />
          )}
        </Stack>
      </Box>
    </>
  );
};

export default Header;
