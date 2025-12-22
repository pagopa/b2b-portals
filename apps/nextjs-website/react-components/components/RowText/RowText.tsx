import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { RowTextProps } from '../../types/RowText/RowText.types';
import { TextColor, BackgroundColor } from '../common/Common.helpers';

const RowText = (props: RowTextProps) => {
  const { title, subtitle, body, layout, sectionID, titleTag } = props;
  const textColor = TextColor('light');
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
      }}
      tabIndex={0}
    >
      <Container
        sx={{
          width: { xs: '100%', md: '60%' },
          mx: 'auto',
          textAlign: layout,
          ml: { xs: 'auto', md: layout === 'left' ? 32 : 'auto' },
          mr: { xs: 'auto' },
        }}
      >
        <Typography
          variant='h4'
          component={titleTag ?? 'h2'}
          sx={{ fontSize: { xs: '32px', md: '38px' }, color: textColor }}
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
        {body && (
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
        )}
      </Container>
    </Box>
  );
};

export default RowText;
