import { Box, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { BackgroundColor } from '../common/Common.helpers';
import { isJSX } from '../../types/common/Common.types';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import { useTheme, useMediaQuery } from '@mui/material';
import googleBadgeLightBase64 from './BadgeImages/googleBadgeLightBase64';
import appleBadgeLightBase64 from './BadgeImages/appleBadgeLightBase64';
import googleBadgeDarkBase64 from './BadgeImages/googleBadgeDarkBase64';
import appleBadgeDarkBase64 from './BadgeImages/appleBadgeDarkBase64';
import ContainerRC from '../common/ContainerRC';

const styles = {
  main: (isSmallScreen: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isSmallScreen ? 'column' : 'row',
    padding: { md: '64px 24px', xs: '32px 24px' },
  }),
  backgroundImage: (isSmallScreen: boolean, theme: 'light' | 'dark') => ({
    backgroundColor: theme === 'dark' ? '#031344' : BackgroundColor(theme),
    backgroundSize: isSmallScreen ? 'cover' : '30%',
    backgroundPosition: isSmallScreen ? 'center' : 'right',
    backgroundRepeat: 'no-repeat',
  }),
};

const PreFooter = (props: PreFooterProps) => {
  const { theme, title, storeButtons, background } = props;
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const googleBadgeBase64 =
    theme === 'dark' ? googleBadgeLightBase64 : googleBadgeDarkBase64;
  const appleBadgeBase64 =
    theme === 'dark' ? appleBadgeLightBase64 : appleBadgeDarkBase64;

  const BackgroundImage = isJSX(background) ? (
    background
  ) : (
    <Box
      role='presentation'
      sx={{
        px: { xs: 4 },
        position: 'absolute',
        inset: 0,
        zIndex: -10,
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${background ?? ''})`,
      }}
    />
  );
  
  const backgroundColor = BackgroundColor(theme);

  return (
    <Box component='section' sx={styles.backgroundImage(isSmallScreen, theme)}>
      <ContainerRC background={!background ? backgroundColor : BackgroundImage}>
        <Box sx={styles.main(isSmallScreen)}>
          <Typography
            variant='h4'
            color={theme === 'dark' ? 'white' : 'black'}
            mb={isSmallScreen ? 2 : 'unset'}
          >
            {title}
          </Typography>
          {storeButtons?.hrefGoogle || storeButtons?.hrefApple ? (
            <Stack
              justifyContent='center'
              alignItems='center'
              spacing={2}
              direction={isSmallScreen ? 'column' : 'row'}
              sx={{ marginLeft: isSmallScreen ? 0 : 2 }}
            >
              {storeButtons.hrefGoogle && (
                <Button
                  sx={{
                    padding: '0px',
                    marginLeft: isSmallScreen ? '0px' : '16px',
                    justifyContent: 'start',
                  }}
                  key='google'
                  href={storeButtons.hrefGoogle}
                >
                  <Image
                    src={googleBadgeBase64}
                    alt='Download on Google Play'
                    height={0}
                    width={0}
                    style={{ height: '3em', width: 'auto' }}
                  />
                </Button>
              )}
              {storeButtons.hrefApple && (
                <Button
                  sx={{
                    padding: '0px',
                    marginLeft: isSmallScreen ? '0px' : '16px',
                    justifyContent: 'start',
                  }}
                  key='apple'
                  href={storeButtons.hrefApple}
                >
                  <Image
                    src={appleBadgeBase64}
                    alt='Download on App store'
                    height={0}
                    width={0}
                    style={{ height: '3em', width: 'auto' }}
                  />
                </Button>
              )}
            </Stack>
          ) : null}
        </Box>
      </ContainerRC>
    </Box>
  );
};

export default PreFooter;
