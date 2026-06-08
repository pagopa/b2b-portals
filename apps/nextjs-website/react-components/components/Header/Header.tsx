import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Stack, SxProps } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { HeaderTitle } from './helpers/Header.HeaderTitle.helpers';
import { Navigation } from './helpers/Header.Navigation.helpers';
import menuIcon from '@react-components/assets/icons/icon-menu-white.svg';
import MobileNav from './helpers/Header.MobileNav.helpers';
import { usePathname } from 'next/navigation';
import { TopBarHeader } from './helpers/Header.TopBarHeader.helpers';
import Image from 'next/image';

const Header = ({
  product,
  menu,
  logo,
  mobileLogo,
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderTitleMobile,
  topBarHeaderLink,
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
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
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
    const el = stickyRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      setIsSticky(!entry.isIntersecting);
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    toggleAccessibility(menuOpen || openDropdownIndex == null ? false : true);
  }, [openDropdownIndex, menuOpen]);

  const headerStyle: SxProps = {
    '.header-navigation': {
      padding: '0px 32px',
      img: {
        display: 'none',
      },
    },
    '&.header-sticky': {
      '.header-title': {
        height: 0,
        maxHeight: 0,
        opacity: 0,
        position: 'absolute',
      },
      '.header-navigation': {
        padding: '0 32px 0 64px',
        img: {
          display: 'initial',
          mr: '64px',
          height: '28px',
        },
      },
    },
  };

  return (
    <>
      <TopBarHeader
        languages={languages}
        activeLanguage={activeLanguage}
        {...(topBarHeaderLink && { topBarHeaderLink })}
        {...(topBarHeaderLogo && { topBarHeaderLogo })}
        {...(topBarHeaderTitle && { topBarHeaderTitle })}
        {...(topBarHeaderTitleMobile && { topBarHeaderTitleMobile })}
        isMobile={isMobile}
      />
      <div style={{ position: 'relative' }} ref={stickyRef}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            height: 1,
            width: 1,
            pointerEvents: 'none',
          }}
        />
      </div>
      <Box
        component='header'
        role='banner'
        position='sticky'
        top={0}
        zIndex={1000}
        sx={headerStyle}
        className={isSticky && !isMobile ? 'header-sticky' : ''}
      >
        <Stack
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
            sx={{ position: 'relative' }}
            color='#FFFFFF'
          >
            <HeaderTitle
              product={product}
              {...(logo ? { logo } : {})}
              {...(mobileLogo ? { mobileLogo } : {})}
              isMobile={isMobile}
            />

            {isMobile && (
              <IconButton onClick={openHeader} sx={{ p: '0 16px 0 0' }}>
                <Image
                  width={20}
                  height={20}
                  src={menuIcon}
                  alt={labels.openMenu}
                  aria-label={labels.openMenu}
                  aria-haspopup='true'
                  aria-expanded='false'
                />
              </IconButton>
            )}
          </Stack>

          {!isMobile && (
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='center'
              className='header-navigation'
              sx={{
                height: '56px',
              }}
            >
              {logo && <img src={logo.src} alt={logo.alt} />}
              <Navigation
                labels={labels}
                menu={menu.map((menu, index) => ({
                  ...menu,
                  isOpen: openDropdownIndex === index,
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
