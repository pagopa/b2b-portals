import { Stack, Typography } from '@mui/material';
import { HeroTextProps } from '../../types/Hero/Hero.types';
import { CtaButtons } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { useTheme, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { AppStoreButton, GooglePlayButton } from '../common/StoreButtons';


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
  titleTag = 'p',
  subtitle,
  ctaButtons,
  storeButtons,
  theme,
  size,
  link,
  themeVariant,
}: HeroTextProps) => {
  const textColor = TextColor(theme);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const { palette } = useTheme();

  const linkColor =
    theme === 'light'
      ? themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.blueIO[500]
      : palette.custom.white;

  return (
    <Stack
      justifyContent={size === 'small' ? 'center' : { md: 'center' }}
      alignItems={size === 'small' ? 'center' : 'inherit'}
      sx={{
        minHeight: 'inherit',
        paddingY: size === 'small' ? '60px' : '0',
        maxWidth: { xs: '100%', md: size === 'small' ? '60%' : '100%' },
        marginTop: size === 'small' ? '0' : { xs: '3em', lg: '0' },
        ...(size === 'small' && { margin: '0 auto' }),
      }}
      component='section'
      spacing={2}
    >
      <Stack spacing={2} mb={size === 'small' ? 0 : { xs: 6, md: 4 }}>
        <Typography
          component={titleTag}
          variant='h1'
          textAlign={size === 'small' ? 'center' : 'left'}
          fontSize={size === 'small' ? '36px' : '50px'}
          color={textColor}
          mb={size === 'small' ? 0 : 2}
        >
          {title}
        </Typography>

        <Typography
          component='div'
          variant='body1'
          textAlign={size === 'small' ? 'center' : 'left'}
          sx={{
            fontSize: '18px',
            color: textColor,
            '& a': {
              color: linkColor,
              textDecoration: 'underline',
              '&:hover': {
                color: linkColor,
              },
            },
            '& p': {
              color: textColor,
            },
          }}
        >
          {subtitle}
        </Typography>
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
              <GooglePlayButton
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
                badge
              />
            )}
            {storeButtons.hrefApple && (
              <AppStoreButton
                sx={{
                  padding: '0px',
                  margin: '0px',
                  justifyContent: 'start',
                }}
                key='apple'
                href={storeButtons.hrefApple}
                badge
              />
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
            ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
              ...button,
              sx: {
                width: {
                  md: 'auto',
                  xs: '100%',
                },
              },
            })),
            theme,
            themeVariant,
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
            color: linkColor,
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
              color: linkColor,
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
