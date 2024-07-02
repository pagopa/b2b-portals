import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { isJSX } from '../../types/common/Common.types';
import ContainerRC from '../common/ContainerRC';
import { HeroCounterProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const HeroCounter = (props: HeroCounterProps) => {
  const {
    inverse = false,
    background,
    theme = 'dark',
    counterNumber = 0,
    counterText,
    title,
    subtitle,
    linkText,
    linkUrl,
  } = props;

  const backgroundColor = BackgroundColor(theme);
  const textColor = TextColor(theme);

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

  return (
    <ContainerRC
      size='xl'
      background={!background ? backgroundColor : BackgroundImage}
      direction={inverse ? 'row-reverse' : 'row'}
      sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'space-between', py: 4 }}
    >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant='h1' color={textColor} mb={2}>
          {title}
        </Typography>
        <Typography variant='body1' color={textColor} mb={2}>
          {subtitle}
        </Typography>
        {linkText && linkUrl && (
          <Link
            href={linkUrl}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: theme === 'dark' ? '#fff' : '#0062c3',
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
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateX(2px)',
                },
              }}
            />
          </Link>
        )}
      </Box>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: { lg: 'flex-end', xs: 'flex-start' }, justifyContent: 'center', textAlign: { lg: 'right', xs: 'left' } }}>
        <Typography
          color={theme === 'light' ? 'blue' : textColor}
          sx={{ fontSize: '8rem' }}
        >
          {counterNumber}
        </Typography>
        <Typography variant='body1' color={textColor}>
          {counterText}
        </Typography>
      </Box>
    </ContainerRC>
  );
};

export default HeroCounter;
