import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Link, Stack, Typography, Divider } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { useMediaQuery, useTheme as useMuiTheme } from '@mui/material';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { BackgroundColor } from '@react-components/components/common/Common.helpers';
import { CtaButtons } from '../common/Common';
import { HeaderTitle } from './components/Header.HeaderTitle.helpers';
import { Navigation } from './components/Header.Navigation.helpers';
import { HamburgerMenu } from './components/Header.HamburgerMenu.helpers';
import DesktopDrawer from './components/Header.DesktopDrawer.helpers';

const Header = ({
  product,
  theme,
  menu,
  ctaButtons,
  beta,
  logo,
}: HeaderProps) => {
  const backgroundColor = BackgroundColor(theme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
  };

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpenDrawer = () => setIsDrawerOpen(true);
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    window.addEventListener('resize', closeHeader);

    return () => {
      window.removeEventListener('resize', closeHeader);
    };
  }, []);

  interface HeaderCtasProps {
    onOpenDrawer: () => void;
  }

  const HeaderCtas: React.FC<HeaderCtasProps> = ({ onOpenDrawer }) => {
    return ctaButtons && ctaButtons.length > 0 ? (
      <Stack direction='row' onClick={onOpenDrawer}>
        {CtaButtons({
          ctaButtons: ctaButtons.map((CtaButton) => ({
            ...CtaButton,
            sx: { width: { md: 'auto', xs: '100%' } },
          })),
          theme,
        })}
      </Stack>
    ) : null;
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
          <Stack
            direction='row'
            justifyContent='flex-end'
            alignItems='center'
            gap={2}
            sx={{
              display: { xs: 'flex', md: 'flex' },
              height: '100%',
            }}
          >
            <Link
              href='#serve-aiuto'
              underline='none'
              sx={{
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '14px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 8px',
              }}
            >
              Serve aiuto?
            </Link>
            <Box
              component='a'
              href='#serve-aiuto'
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
          </Stack>
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
                onClick: () =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  ),
              }))}
              theme={theme}
              isMobile={false}
            />
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <HeaderCtas onOpenDrawer={handleOpenDrawer} />
              <DesktopDrawer
                isOpen={isDrawerOpen}
                onClose={handleCloseDrawer}
                anchor='right'
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
              <HeaderCtas onOpenDrawer={handleOpenDrawer} />
            </Box>
          </Stack>
        )}

        {isMobile && menuOpen && (
          <Stack
            direction='column'
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '100%',
              alignItems: 'flex-start',
              padding: '8px 24px',
            }}
          >
            <Navigation
              menu={menu.map((menu, index) => ({
                ...menu,
                isOpen: openDropdownIndex === index,
                onClick: () =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index
                  ),
              }))}
              theme={theme}
              isMobile={true}
            />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
