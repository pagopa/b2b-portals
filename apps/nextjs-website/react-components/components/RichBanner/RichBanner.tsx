import React from 'react';
import {
  Box,
  Container,
  SxProps,
  Typography,
  useTheme,
} from '@mui/material';
import { RichBannerProps } from '@react-components/types/RichBanner/RichBanner.types';
import { BackgroundColor, TextColor } from '../common/Common.helpers';
import { resolveThemeVariant } from '../../theme';

const RichBanner = (props: RichBannerProps) => {
  const { sectionID, title, body, themeVariant } = props;
  const textColor = TextColor('light', themeVariant);
  const backgroundColor = BackgroundColor('light', themeVariant);
  const { palette } = useTheme();
  const richTextLinkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    { palette, theme: 'light' },
  );
  const titleSx: SxProps = {
    widh: '100%',
    textAlign: 'center',
    color: textColor,
    '& a:hover': {
      color: richTextLinkHoverColor,
    },
    '& p': {
      fontWeight: 600,
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
    color: textColor,
    textAlign: 'center',
    '& p': {
      color: textColor,
      fontSize: '14px',
      lineHeight: '18px',
      '& a': {
        fontWeight: 500,
        '&:hover': {
          color: richTextLinkHoverColor,
        },
      },
    },
  };

  return (
    <Box
      component={'section'}
      {...(sectionID && { id: sectionID })}
      sx={{ backgroundColor, py: '32px' }}
    >
      <Container>
        {title && (
          <Typography variant='body1' component='h2' sx={titleSx}>
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
