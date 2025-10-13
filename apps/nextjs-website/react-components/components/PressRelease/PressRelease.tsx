import React from 'react';
import { Box, Typography, Container, Link, Stack } from '@mui/material';
import {
  TextColor,
  BackgroundColor,
  ExtraTextColor,
  TextAlternativeColor,
} from '../common/Common.helpers';
import { PressReleaseProps } from '@react-components/types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PressRelease = (props: PressReleaseProps) => {
  const { date, title, subtitle, body, sectionID, backlink } = props;
  const textColor = TextColor('light');
  const eyeletColor = ExtraTextColor('light');
  const backgroundColor = BackgroundColor('light');
  const backlinkColor = TextAlternativeColor('light');

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
      sx={{
        width: '100%',
        maxWidth: '100vw',
        bgcolor: backgroundColor,
        color: textColor,
        py: 10,
        mx: 'auto',
      }}
      tabIndex={0}
    >
      <Container
        sx={{
          width: { xs: '96%', md: '60%' },
          mx: 'auto',
          ml: { xs: 'auto', md: 16 },
          mr: { xs: 'auto' },
        }}
      >
        {backlink && (
          <Stack direction='row' alignItems='center' spacing={1} sx={{ mb: 4 }}>
            <ArrowBackIcon sx={{ color: backlinkColor }} />
            <Link
              href={backlink.href}
              color={backlinkColor}
              underline='none'
              fontFamily='"Titillium Web",sans-serif'
              fontWeight='bold'
              fontSize='16px'
            >
              {backlink.label}
            </Link>
          </Stack>
        )}
        <Typography
          variant='overline'
          component='div'
          sx={{
            color: eyeletColor,
            fontSize: { xs: '16px', md: '16px' },
            fontWeight: 400,
          }}
        >
          {date}
        </Typography>
        <Typography
          variant='h4'
          component='h2'
          sx={{ fontSize: { xs: '32px', md: '38px' }, color: textColor, mt: 2 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant='h6'
            component='h3'
            sx={{
              fontSize: { xs: '22px', md: '24px' },
              mt: 2,
              color: textColor,
            }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          component='div'
          variant='body1'
          sx={{
            fontSize: { xs: '14px', md: '16px' },
            mt: 1,
            color: textColor,
            '& a': {
              color: textColor,
              textDecoration: 'underline',
              '&:hover': {
                color: textColor,
                textDecoration: 'underline',
              },
            },
          }}
        >
          {body}
        </Typography>
      </Container>
    </Box>
  );
};

export default PressRelease;
