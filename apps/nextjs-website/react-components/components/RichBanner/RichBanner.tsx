import React from 'react';
import { Box, Container, SxProps, Typography } from '@mui/material';
import { RichBannerProps } from '@react-components/types/RichBanner/RichBanner.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const RichBanner = (props: RichBannerProps) => {
  const { sectionID, title, body } = props;
  const textColor = TextColor('light');
  const backgroundColor = BackgroundColor('light');
  const titleSx: SxProps = {
    widh: '100%',
    textAlign: 'center',
    fontFeatureSettings: "'liga' off, 'clig' off",
    color: textColor,
    '& p': {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '24px',
      verticalAlign: 'middle',
      '& img': {
        verticalAlign: 'middle',
        display: { xs: 'block', md: 'inline' },
        height: '24px',
        m: { xs: '4px auto', md: '4px 16px' },
      },
    },
  };

  const bodySx: SxProps = {
    fontFeatureSettings: "'liga' off, 'clig' off",
    color: textColor,
    textAlign: 'center',
    '& p': {
      color: textColor,
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      '& a': {
        fontWeight: 500,
      },
    },
  };

  return (
    <Box
      component={'section'}
      {...(sectionID && { id: sectionID })}
      tabIndex={0}
      sx={{ backgroundColor, py: '32px' }}
    >
      <Container>
        {title && (
          <Typography variant='body1' component='div' sx={titleSx}>
            {title}
          </Typography>
        )}
        {body && (
          <Typography variant='body2' component={'div'} sx={bodySx}>
            {body}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default RichBanner;
