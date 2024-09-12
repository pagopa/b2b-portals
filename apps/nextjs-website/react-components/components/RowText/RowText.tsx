import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { RowTextProps } from '../../types/RowText/RowText.types';
import { TextColor, BackgroundColor } from '../common/Common.helpers';

const RowText = (props: RowTextProps) => {
  const { title, subtitle, body, layout, sectionID } = props;
  const textColor = TextColor('light');
  const backgroundColor = BackgroundColor('light');

  return (
    <Box
      component="section"
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
          textAlign: layout, 
          ml: { xs: 'auto', md: layout === 'left' ? 16 : 'auto' }, 
          mr: { xs: 'auto' }, 
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontSize: { xs: '32px', md: '38px' }, color: textColor }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontSize: { xs: '22px', md: '24px' },
              mt: 2,
              color: textColor,
            }}
          >
            {subtitle}
          </Typography>
        )}
        {body && (
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', md: '16px' },
              mt: 1,
              color: textColor,
            }}
          >
            {body}
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default RowText;
