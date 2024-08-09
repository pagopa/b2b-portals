import { Stack, Typography } from '@mui/material';
import { HeroTextProps } from '../../types/Hero/Hero.types';
import { CtaButtons, Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { useTheme, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import appleBadgeBase64 from '../Editorial/BadgeImages/appleBadgeBase64';
import googleBadgeBase64 from '../Editorial/BadgeImages/googleBadgeBase64';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

export const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  storeButtons,
  theme,
  size,
  link,
}: HeroTextProps) => {
  const textColor = TextColor(theme);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const { palette } = useTheme();

  return (
    <Stack
      justifyContent={size === 'small' ? 'center' : { md: 'center' }}
      alignItems={size === 'small' ? 'center' : 'inherit'}
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
      component='section'
      spacing={2}
    >
      <Stack spacing={2} mb={size === 'small' ? 0 : { xs: 6, md: 4 }}>
        <Title
          variant='h1'
          textColor={textColor}
          title={title}
          textAlign={size === 'small' ? 'center' : 'left'}
          marginBottom={size === 'small' ? 0 : 2}
        />
        <Subtitle
          variant='body1'
          textColor={textColor}
          subtitle={subtitle}
          textAlign={size === 'small' ? 'center' : 'left'}
        />
      </Stack>
      {storeButtons?.hrefGoogle || storeButtons?.hrefApple ? (
        <Stack direction='column' spacing={2}>
          <Typography color={textColor} fontWeight={700}>
            Scarica l'app
          </Typography>
          <Stack
            justifyContent='left'
            alignItems='baseline'
            spacing={2}
            direction={isSmallScreen ? 'column' : 'row'}
          >
            {storeButtons.hrefGoogle && (
              <Button
                sx={{
                  padding: '0px',
                  marginLeft: '0px',
                  '@media screen and (min-width: 420px)': {
                    marginLeft: '16px',
                  },
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
                  margin: '0px',
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
        </Stack>
      ) : ctaButtons && ctaButtons.length > 0 ? (
        <Stack
          direction={isSmallScreen ? 'column' : 'row'}
          justifyContent='left'
          spacing={2}
        >
          {CtaButtons({
            ctaButtons: ctaButtons.map((button) => ({
              ...button,
              sx: { width: { md: 'auto', xs: '100%' } },
            })),
            theme,
          })}
        </Stack>
      ) : null}

      {link && (
        <Typography
          component='a'
          href={link.href}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color:
              theme === 'dark'
                ? textColor
                : palette.custom.primaryColorDark,
            mt: 2,
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}
        >
          {link.label}
          <ArrowForwardIcon
            sx={{
              display: 'inline-block',
              ml: 1,
              fontSize: '1rem',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateX(2px)',
              },
            }}
          />
        </Typography>
      )}
    </Stack>
  );
};
