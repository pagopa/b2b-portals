import React, { useState } from 'react';
import { Box, Link, Stack, Typography, Divider } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useMediaQuery, useTheme } from '@mui/material';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { BackgroundColor } from '@react-components/components/common/Common.helpers';
import { HeaderTitle } from './helper/Header.HeaderTitle.helpers';
import { Navigation } from './helper/Header.Navigation.helpers';
import { HamburgerMenu } from './helper/Header.HamburgerMenu.helpers';
import DesktopDrawer from './helper/Header.DesktopDrawer.helpers';
import MobileDrawer from './helper/Header.MobileDrawer.helpers';
import { HeaderCtas } from './helper/Header.Ctas.helpers';
import { usePathname } from 'next/navigation';

const Header = ({
  product,
  theme,
  menu,
  ctaButtons,
  beta,
  logo,
  drawerMenuTitle,
  ctaTitle,
  ctaButtonText,
  ctaHref,
  ctaBodyText,
  drawerCardsData,
  needHelpHref,
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
            {...(beta ? { beta } : {})}
            {...(logo ? { logo } : {})}
          />
          <Link
            href={needHelpHref}
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
              component='a'
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
              <ChatBubbleOutlineIcon style={{ color: 'white', fontSize: 18 }} />
            </Box>
          </Link>
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
                active: pathname === menu.href,
              }))}
              theme={theme}
              isMobile={false}
            />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeaderCtas
                onOpenDrawer={handleOpenDrawer}
                theme={theme}
                ctaButtons={ctaButtons}
              />
              <DesktopDrawer
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                anchor='right'
                drawerMenuTitle={drawerMenuTitle}
                drawerCardsData={drawerCardsData}
                theme={'light'}
                ctaTitle={ctaTitle}
                ctaButtonText={ctaButtonText}
                ctaHref={ctaHref}
                ctaBodyText={ctaBodyText}
              />
            </Box>
          </Stack>
        )}

        {isMobile && (
          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              padding: '8px 24px',
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
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <HeaderCtas
                onOpenDrawer={handleOpenDrawer}
                theme={theme}
                ctaButtons={ctaButtons}
              />
            </Box>
          </Stack>
        )}

        {isMobile && (
          <MobileDrawer
            isOpen={menuOpen}
            onClose={closeHeader}
            anchor='left'
            menu={menu}
            theme={'light'}
          />
        )}

        {!isMobile && (
          <DesktopDrawer
            isOpen={isDrawerOpen}
            onClose={handleCloseDrawer}
            anchor='right'
            drawerMenuTitle={drawerMenuTitle}
            drawerCardsData={drawerCardsData}
            theme={'light'}
            ctaTitle={ctaTitle}
            ctaButtonText={ctaButtonText}
            ctaHref={ctaHref}
            ctaBodyText={ctaBodyText}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Header;
