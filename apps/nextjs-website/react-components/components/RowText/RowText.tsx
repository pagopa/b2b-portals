import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { RowTextProps } from '../../types/RowText/RowText.types';
import { TextColor, BackgroundColor } from '../common/Common.helpers';
import { resolveThemeVariant } from '../../theme';

const RowText = (props: RowTextProps) => {
  const { title, subtitle, body, layout, sectionID, titleTag, themeVariant } =
    props;
  const textColor = TextColor('light', themeVariant);
  const backgroundColor = BackgroundColor('light', themeVariant);
  const { palette } = useTheme();
  const richTextLinkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    { palette, theme: 'light' },
  );

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
      sx={{
        width: '100%',
        bgcolor: backgroundColor,
        color: textColor,
        py: 8,
      }}
    >
      <Container
        sx={{
          width: { xs: '100%', md: '60%' },
          maxWidth: { md: 684 },
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
                  color: richTextLinkHoverColor,
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
