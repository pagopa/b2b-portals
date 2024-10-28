import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerRC from '../common/ContainerRC';
import { HeroCounterProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';

const HeroCounter = ({
  theme,
  themeVariant,
  title,
  subtitle,
  link,
  counter,
  background,
  sectionID,
}: HeroCounterProps) => {
  const backgroundColor = BackgroundColor(theme);

  const textColor = TextColor(theme);
  const { palette } = useTheme();

  const linkColor =
    theme === 'light'
      ? themeVariant === 'SEND'
        ? palette.primary.main
        : palette.custom.blueIO[500]
      : palette.custom.white;

  const BackgroundImage = (
    <Box
      role='presentation'
      sx={{
        px: 4,
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

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction='row'
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        py: 4,
      }}
      {...(sectionID && { sectionID })}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant='h1'
          color={textColor}
          mb={2}
          sx={{ fontSize: { xs: '2.25rem!important', md: '3.5rem!important' } }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            component='div'
            variant='body2'
            sx={{
              textAlign: 'left',

              '& a': {
                color: linkColor,
                textDecoration: 'underline',
                '&:hover': {
                  color: linkColor,
                },
              },
              '& p': {
                color: textColor,
                fontSize: '16px',
              },
            }}
          >
            {subtitle}
          </Typography>
        )}
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
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(2px)',
                },
              }}
            />
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: { lg: 'flex-end', xs: 'flex-start' },
          justifyContent: 'center',
          textAlign: { lg: 'right', xs: 'left' },
        }}
      >
        <Typography
          component='div'
          color={
            theme === 'light' ? palette.custom.primaryColorDark : textColor
          }
          sx={{
            fontSize: { xs: '5.625rem', md: '8rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1.1,
          }}
        >
          {counter.number}
          <Typography
            variant='body1'
            color={textColor}
            sx={{
              fontSize: '1.125rem',
              fontWeight: 600,
              padding: '0px 10px',
            }}
          >
            {counter.text}
          </Typography>
        </Typography>
      </Box>
    </ContainerRC>
  );
};

export default HeroCounter;
