import React from 'react';
import { Box, Typography, Container, Stack, Link } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { PressReleaseProps } from '@react-components/types/PressRelease/PressRelease.types';
import {
  TextColor,
  ExtraTextColor,
  BackgroundColor,
} from '../common/Common.helpers';

const PressRelease = (props: PressReleaseProps) => {
  const { eyelet, title, subtitle, body, ctaText, ctaHref, theme } = props;

  const textColor = TextColor(theme);
  const eyeletColor = ExtraTextColor(theme);
  const backgroundColor = BackgroundColor(theme);

  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        bgcolor: backgroundColor,
        color: textColor,
        py: { xs: 4, md: 6 },
      }}
    >
      <Container sx={{ width: { xs: '100%', md: '75%' }, textAlign: 'left' }}>
        {eyelet && (
          <Typography
            variant='overline'
            sx={{ color: eyeletColor, fontSize: { xs: '16px', md: '16px' } }}
          >
            {eyelet}
          </Typography>
        )}
        <Typography
          variant='h1'
          sx={{ fontSize: { xs: '32px', md: '50px' }, color: textColor, mt: 2 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant='h6'
            sx={{
              fontSize: { xs: '18px', md: '18px' },
              color: textColor,
              mt: 2,
            }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          variant='body1'
          sx={{ fontSize: { xs: '16px', md: '16px' }, color: textColor, mt: 2 }}
        >
          {body}
        </Typography>
        {ctaText && ctaHref && (
          <Stack direction='row' spacing={1} alignItems='center' mt={4}>
            <Link
              href={ctaHref}
              underline='none'
              sx={{
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold',
                color: theme === 'light' ? 'primary.main' : 'background.paper',
                fontSize: '16px',
                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              <ArrowBackIcon sx={{ mr: 1 }} />
              {ctaText}
            </Link>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default PressRelease;
