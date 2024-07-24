import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContainerRC from '../common/ContainerRC';
import { HeroCounterProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { useTheme } from '@mui/material/styles';

const HeroCounter = (props: HeroCounterProps) => {
  const {
    background,
    theme = 'dark',
    counterNumber,
    counterText,
    title,
    subtitle,
    linkText,
    linkUrl,
  } = props;

  const backgroundColor = BackgroundColor(theme);
  const textColor = TextColor(theme);

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

  const { palette } = useTheme();

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
          sx={{ fontSize: { xs: '2.25rem!important', md: '3.5rem!important' }}}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant='body1'
            color={textColor}
            mb={2}
            sx={{ fontSize: '1rem' }}
          >
            {subtitle}
          </Typography>
        )}
        {linkText && linkUrl && (
          <Link
            href={linkUrl}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color:
                theme === 'dark' ? textColor : palette.custom.primaryColorDark,
              mt: 2,
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            {linkText}
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
          </Link>
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
          {counterNumber}
          <Typography
            variant='body1'
            color={textColor}
            sx={{
              fontSize: '1.125rem',
              fontWeight: 600,
              padding: '0px 10px',
            }}
          >
            {counterText}
          </Typography>
        </Typography>
      </Box>
    </ContainerRC>
  );
};

export default HeroCounter;
