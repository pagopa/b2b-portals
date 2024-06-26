import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { HamburgerMenu } from './components/HamburgerMenu';
import { Navigation } from './components/Navigation';
import { HeaderTitle } from './components/Title';
import { HeaderProps } from '@react-components/types/Header/Header.types';
import { CtaButtons } from '../common/Common';
import { BackgroundColor } from '../common/Common.helpers';

const Header = ({
  product,
  theme,
  menu,
  ctaButtons,
  avatar,
  beta,
  logo,
}: HeaderProps) => {
  const backgroundColor = BackgroundColor(theme);

  const [menuOpen, setMenuOpen] = useState(false);

  const openHeader = () => {
    setMenuOpen(true);
  };

  const closeHeader = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('resize', closeHeader);

    return () => {
      window.removeEventListener('resize', closeHeader);
    };
  }, []);

  const HeaderCtas = () => {
    return ctaButtons && ctaButtons.length > 0 ? (
      <Stack direction='row'>
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
      sx={{ height: { xs: 'auto', md: 130 } }}
    >
      <Stack
        direction={{ md: 'row' }}
        paddingY={{ xs: 1, sm: 3, md: 0 }}
        gap={{ xs: 2, md: 2 }}
        sx={{ height:'100%' }}
      >
        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <HeaderTitle
            theme={theme}
            product={product}
            {...(beta ? { beta } : {})}
            {...(avatar ? { avatar } : {})}
            {...(logo ? { logo } : {})}
          />

          <Stack
            sx={{ 
              display: { md: 'none' },
              marginRight: { xs: 4, md: 0 },
            }}
            direction='row'
            alignItems='center'
            gap={2}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' }, backgroundColor:'red' }}>
              <HeaderCtas />
            </Box>

            <HamburgerMenu
              onOpen={openHeader}
              onClose={closeHeader}
              open={menuOpen}
            />
          </Stack>
        </Stack>

        <Stack
          sx={{
            justifyContent: 'space-between',
            height: '100%',
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center', xs: 'flex-start' },
            gap: { xs: 2 },
            display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' }
          }}
        >
          <Navigation {...{ menu, theme }} />

          <Box sx={{ display: { sm: 'none', md: 'block' } }}>
            <HeaderCtas />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
