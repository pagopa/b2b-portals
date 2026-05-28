import React, { useEffect, useRef, useState } from 'react';
import { Box, Stack, SxProps } from '@mui/material';
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
  const [isFixed, setIsFixed] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const preHeaderRef = useRef<HTMLDivElement | null>(null);

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

  const headerStyle: SxProps = {
    width: '100%',
    bgcolor: '#0066CC',
    top: 0,
    left: 0,
    zIndex: 1,
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
    const handleScroll = () => {
      if (
        headerRef &&
        headerRef.current &&
        preHeaderRef &&
        preHeaderRef.current
      ) {
        const rectHeader = headerRef.current.getBoundingClientRect();
        setHeaderHeight(rectHeader.height);
        const rectPreHeader = preHeaderRef.current.getBoundingClientRect();
        setIsFixed(rectPreHeader.height <= window.pageYOffset);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    toggleAccessibility(menuOpen || openDropdownIndex == null ? false : true);
  }, [openDropdownIndex, menuOpen]);

  return (
    <Box component='header' role='banner'>
      <div ref={preHeaderRef}>
        <TopBarHeader
          languages={languages}
          activeLanguage={activeLanguage}
          {...(topBarHeaderLogo && { topBarHeaderLogo })}
          {...(topBarHeaderTitle && { topBarHeaderTitle })}
          {...(topBarHeaderTitleMobile && { topBarHeaderTitleMobile })}
          isMobile={isMobile}
        />
      </div>

      {isFixed && <Box sx={{ height: headerHeight, display: 'block' }}></Box>}
      <Stack
        ref={headerRef}
        direction='column'
        gap={{ xs: 0, md: 0 }}
        sx={{
          ...headerStyle,
          ...(isFixed && {
            position: 'fixed',
          }),
        }}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ padding: { xs: '16px 24px', md: '24px 32px' } }}
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
              open={menuOpen}
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
            labels={labels}
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
