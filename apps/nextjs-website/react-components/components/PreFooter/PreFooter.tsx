import { Box, Stack, Typography } from '@mui/material';
import { BackgroundColor } from '../common/Common.helpers';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import { useTheme, useMediaQuery } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { CtaButtons } from '../common/Common';
import { usePathname } from 'next/navigation';
import { AppStoreButton, GooglePlayButton } from '../common/StoreButtons';

const styles = {
  main: (isSmallScreen: boolean, layout: 'left' | 'center') => ({
    display: 'flex',
    alignItems: layout === 'center' ? 'center' : 'center',
    justifyContent: layout === 'center' ? 'center' : 'flex-start',
    flexDirection: layout === 'center' || isSmallScreen ? 'column' : 'row',
    textAlign: layout === 'center' ? 'center' : 'left',
    padding: { md: '64px 24px', xs: '32px 24px' },
    position: 'relative',
    zIndex: 1,
  }),

  backgroundImage: (isSmallScreen: boolean, theme: 'light' | 'dark') => ({
    backgroundColor: theme === 'dark' ? '#031344' : BackgroundColor(theme),
    backgroundSize: isSmallScreen ? 'cover' : '30%',
    backgroundPosition: isSmallScreen ? 'center' : 'right',
    backgroundRepeat: 'no-repeat',
    right: 0,
  }),
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
};

const PreFooter = (props: PreFooterProps) => {
  const {
    title,
    theme,
    layout,
    storeButtons,
    background,
    ctaButtons,
    excludeSlugs,
  } = props;
  const pathname = usePathname() ?? '';

  // Don't show PreFooter for any press release
  if (pathname && pathname.includes('press-releases')) {
    return null;
  }

  // Compare excluded slugs with current page slug (removing initial '/')
  if (excludeSlugs && pathname && excludeSlugs.includes(pathname.slice(1))) {
    return null;
  }

  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const backgroundColor = BackgroundColor(theme);

  return (
    <Box component='section' sx={styles.backgroundImage(isSmallScreen, theme)}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          role='presentation'
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 0,
            height: '100%',
            width: isSmallScreen ? '100%' : '30%',
            objectFit: 'cover',
            backgroundSize: 'cover',
            backgroundPosition: isSmallScreen ? 'center' : 'right',
            backgroundImage: `url(${background ?? ''})`,
          }}
        />
        <ContainerRC
          background={!background ? backgroundColor : 'transparent'}
          sx={styles.container}
        >
          <Box sx={styles.main(isSmallScreen, layout)}>
            <Typography
              variant='h6'
              color={theme === 'dark' ? 'white' : 'black'}
              mb={isSmallScreen || layout === 'center' ? 2 : 'unset'}
              sx={{
                fontSize: { xs: '18px', md: '24px' },
                marginRight:
                  layout === 'left' && !isSmallScreen ? '16px' : 'unset',
              }}
            >
              {title}
            </Typography>

            {storeButtons ? (
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                direction={isSmallScreen ? 'column' : 'row'}
                marginLeft={0}
              >
                {storeButtons.hrefGoogle && (
                  <GooglePlayButton
                    sx={{
                      padding: '0px',
                      justifyContent: 'start',
                      display: 'flex',
                    }}
                    key='google'
                    href={storeButtons.hrefGoogle}
                    darkTheme={theme === 'dark'}
                  />
                )}
                {storeButtons.hrefApple && (
                  <AppStoreButton
                    sx={{
                      padding: '0px',
                      justifyContent: 'start',
                      display: 'flex',
                    }}
                    key='google'
                    href={storeButtons.hrefApple}
                    darkTheme={theme === 'dark'}
                  />
                )}
              </Stack>
            ) : ctaButtons ? (
              <Stack
                justifyContent='center'
                alignItems='center'
                spacing={2}
                direction={isSmallScreen ? 'column' : 'row'}
                sx={{
                  marginLeft: isSmallScreen || layout === 'center' ? 0 : 2,
                }}
              >
                {CtaButtons({
                  ctaButtons: ctaButtons.map((button) => ({
                    ...button,
                    sx: {
                      width: 'auto',
                      marginTop: '16px',
                    },
                    ...(button.href?.startsWith('https') && {
                      target: '_blank',
                    }),
                  })),
                  theme,
                })}
              </Stack>
            ) : null}
          </Box>
        </ContainerRC>
      </Box>
    </Box>
  );
};

export default PreFooter;
