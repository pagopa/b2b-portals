import React, { useState } from 'react';
import { Box, Link, Stack, Typography, Divider } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useMediaQuery, useTheme } from '@mui/material';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { BackgroundColor } from '@react-components/components/common/Common.helpers';
import { HeaderTitle } from './helpers/Header.HeaderTitle.helpers';
import { Navigation } from './helpers/Header.Navigation.helpers';
import { HamburgerMenu } from './helpers/Header.HamburgerMenu.helpers';
import SideDrawer from './helpers/Header.SideDrawer.helpers';
import MobileNav from './helpers/Header.MobileNav.helpers';
import { HeaderCtas } from './helpers/Header.Ctas.helpers';
import { usePathname } from 'next/navigation';

const Header = ({
  product,
  theme,
  menu,
  beta,
  logo,
  drawer,
  supportLink,
}: HeaderProps) => {
  const muiTheme = useTheme();
  const backgroundColor = BackgroundColor(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));
  const pathname = usePathname();

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
  };

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const handleMenuClick = (index: number, href?: string) => {
    if (href) {
      window.location.href = href;
      setIsDrawerOpen(false);
      handleDropdownToggle(index);
    }
  };

  const handleDropdownToggle = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  return (
    <Box
      bgcolor={backgroundColor}
      component='header'
      role='banner'
      sx={{ height: { xs: 'auto', md: 'auto' } }}
    >
      <Stack direction='column' gap={{ xs: 0, md: 0 }} sx={{ width: '100%' }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          sx={{ padding: '16px 24px' }}
        >
          <HeaderTitle
            theme={theme}
            product={product}
            beta={beta}
            {...(logo ? { logo } : {})}
          />
          {supportLink && (
            <Link
              href={supportLink}
              underline='none'
              display='flex'
              flexDirection='row'
              justifyContent='flex-end'
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '14px',
                height: '100%',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              Serve aiuto?
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  textDecoration: 'none',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
              >
                <ChatBubbleOutlineIcon
                  style={{ color: 'white', fontSize: 18 }}
                />
              </Box>
            </Link>
          )}
        </Stack>

        <Divider />

        {!isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              height: '64px',
              padding: '0px 24px',
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
              theme={theme}
              isMobile={false}
            />
            {drawer && (
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <HeaderCtas
                  onOpenDrawer={handleOpenDrawer}
                  theme={theme}
                  buttonText={drawer.buttonText}
                />
              </Box>
            )}
          </Stack>
        )}

        {isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              display: { xs: 'flex', md: 'none' },
              padding: '0.5rem 1.5rem',
            }}
          >
            <Stack direction='row' alignItems='center' gap={1}>
              <HamburgerMenu
                onOpen={openHeader}
                onClose={closeHeader}
                open={menuOpen}
              />
              <Typography
                variant='body1'
                color='text.secondary'
                sx={{ fontWeight: 600 }}
              >
                Menu
              </Typography>
            </Stack>
            {drawer && (
              <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <HeaderCtas
                  onOpenDrawer={handleOpenDrawer}
                  theme={theme}
                  buttonText={drawer.buttonText}
                />
              </Box>
            )}
          </Stack>
        )}

        {isMobile && (
          <MobileNav
            isOpen={menuOpen}
            onClose={closeHeader}
            anchor='left'
            menu={menu}
            theme={'light'}
          />
        )}

        {drawer && (
          <SideDrawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            anchor='right'
            theme='light'
            drawerMenuTitle={drawer.title}
            ctaCard={drawer.ctaCard}
            linkCards={drawer.linkCards}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Header;
