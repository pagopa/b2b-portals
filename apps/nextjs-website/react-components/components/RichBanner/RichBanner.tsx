import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { RichBannerProps } from '@react-components/types/RichBanner/RichBanner.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const RichBanner = (props: RichBannerProps) => {
  const { sectionID, title, body } = props;
  const textColor = TextColor('light');
  const backgroundColor = BackgroundColor('light');

  return (
    <Box
      component={'section'}
      {...(sectionID && { id: sectionID })}
      tabIndex={0}
      sx={{ backgroundColor }}
    >
      <Container>
        Blah
        {title && (
          <Typography variant='body1' component='h2' sx={{ color: textColor }}>
            {title}
          </Typography>
        )}
        {body && (
          <Typography variant='body2' sx={{ color: textColor }}>
            {body}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default RichBanner;
