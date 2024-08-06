import { Stack, Typography, Chip } from '@mui/material';
import { ChipProps, HeroTextProps } from '../../types/Hero/Hero.types';
import { CtaButtons, Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { useTheme, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
import appleBadgeBase64 from '../Editorial/BadgeImages/appleBadgeBase64';
import googleBadgeBase64 from '../Editorial/BadgeImages/googleBadgeBase64';
import Image from 'next/image';
import { useEffect } from 'react';

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

export const HeroChips = ({
  chips,
  theme,
}: {
  chips: ReadonlyArray<ChipProps>;
  theme: 'light' | 'dark';
}) => {
  const handleChipClick = (targetID: string) => {
    const element = document.getElementById(targetID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Stack
      direction='row'
      spacing={1}
      mt={2}
      sx={{
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <Stack
        direction='row'
        spacing={1}
        sx={{
          maxWidth: '600px',
          flexWrap: 'wrap',
          rowGap: '8px',
          justifyContent: 'center',
        }}
      >
        {chips.map((chip, index) => (
          <Chip
            key={index}
            label={chip.label}
            onClick={() => handleChipClick(chip.targetID)}
            sx={{
              backgroundColor: theme === 'dark' ? '#0039CB' : '#FFFFFF',
              color: theme === 'dark' ? '#ffffff' : '#000000',
              '&:hover': {
                backgroundColor: theme === 'dark' ? '#0049EB' : '#F5F5F5',
              },
              border: theme === 'light' ? '1px solid #D0D0D0' : 'none',
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export const HeroTextContent = ({
  title,
  subtitle,
  ctaButtons,
  storeButtons,
  chips,
  theme,
  size,
  onChipsUsed,
}: HeroTextProps) => {
  const textColor = TextColor(theme);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  useEffect(() => {
    onChipsUsed(chips.length > 0);
  }, [chips.length, onChipsUsed]);

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
        {chips.length > 0 && <HeroChips chips={chips} theme={theme} />}
      </Stack>
      {storeButtons?.hrefGoogle || storeButtons?.hrefApple ? (
        <Stack direction='column' spacing={1}>
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
    </Stack>
  );
};
