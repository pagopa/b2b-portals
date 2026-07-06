import React, { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Link, Stack } from '@mui/material';
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
  topBarHeaderLogo,
  topBarHeaderTitle,
  topBarHeaderTitleMobile,
  topBarHeaderLink,
  labels,
  languages,
  activeLanguage,
  themeVariant,
  theme,
}: HeaderProps) => {
  const muiTheme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const hasScrolledRef = useRef(false);

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
    toggleAccessibility(menuOpen || openDropdownIndex == null ? false : true);
  }, [openDropdownIndex, menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolledRef.current && window.scrollY > 200) {
        hasScrolledRef.current = true;
        setIsScrolled(true);
      } else if (hasScrolledRef.current && window.scrollY < 80) {
        hasScrolledRef.current = false;
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <Box
        component='header'
        role='banner'
        position='sticky'
        top={0}
        zIndex={1000}
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
            color='#FFFFFF'
            height={88}
            sx={{
              transition: 'all .3s ease-out',
              '> *': {
                transition: 'all .3s ease-out',
              },
              padding: { xs: '16px 24px', md: isScrolled ? 0 : '16px 32px' },
              ...(isScrolled &&
                !isMobile && { '> *': { opacity: 0 }, height: 0 }),
            }}
            {...(isScrolled && !isMobile && { inert: '' })}
          >
            <HeaderTitle
              product={product}
              {...(logo ? { logo } : {})}
              isMobile={isMobile}
              themeVariant={themeVariant}
              theme={theme}
            />

            {isMobile && (
              <IconButton onClick={openHeader} sx={{ p: 0 }}>
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
              sx={{
                height: '56px',
                padding: '0px 12px',
              }}
            >
              {logo && (
                <Link
                  href={product.href}
                  p={'0 !important'}
                  my={'0 !important'}
                  marginLeft={isScrolled ? 4 : 0}
                  marginRight={isScrolled ? 5 : 0}
                  sx={{
                    transition: 'all .3s ease-out',
                    maxWidth: isScrolled ? 80 : 0,
                    opacity: isScrolled ? 1 : 0,
                  }}
                  {...(!isScrolled && { inert: '' })}
                >
                  <img src={logo.src} alt='Homepage' height={32} />
                </Link>
              )}

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
