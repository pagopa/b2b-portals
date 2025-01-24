import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import {
  TextColor,
  BackgroundColor,
  ExtraTextColor,
} from '../common/Common.helpers';
import { PressReleaseProps } from '@react-components/types';

const PressRelease = (props: PressReleaseProps) => {
  const { date, title, subtitle, body, sectionID } = props;
  const textColor = TextColor('light');
  const eyeletColor = ExtraTextColor('light');
  const backgroundColor = BackgroundColor('light');
  const { palette } = useTheme();

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
      sx={{
        width: '100%',
        bgcolor: backgroundColor,
        color: textColor,
        py: 10,
        px: 2,
      }}
    >
      <Container
        sx={{
          width: { xs: '100%', md: '60%' },
          mx: 'auto',
          ml: { xs: 'auto', md: 16 },
          mr: { xs: 'auto' },
        }}
      >
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
              color: palette.primary.main,
              textDecoration: 'underline',
              '&:hover': {
                color: palette.primary.main,
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
