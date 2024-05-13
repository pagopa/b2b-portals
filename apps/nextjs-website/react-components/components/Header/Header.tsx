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
      paddingX={{ xs: 1, sm: 3 }}
      component='header'
      role='banner'
    >
      <Stack
        direction={{ md: 'row' }}
        paddingY={{ xs: 2, sm: 3, md: 0 }}
        gap={4}
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
            sx={{ display: { md: 'none' } }}
            direction='row'
            alignItems='center'
            gap={4}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
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
            width: '100%',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { md: 'center', xs: 'flex-start' },
            gap: { xs: 2 },
            display: { xs: menuOpen ? 'flex' : 'none', md: 'flex' },
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
