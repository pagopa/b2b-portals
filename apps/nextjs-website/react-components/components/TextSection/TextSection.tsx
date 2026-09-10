import React from 'react';
import {
  Box,
  Typography,
  Container,
  Stack,
  Link,
  useTheme,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import {
  TextColor,
  ExtraTextColor,
  BackgroundColor,
} from '../common/Common.helpers';
import { TextSectionProps } from '@react-components/types';
import { resolveThemeVariant, ThemeContext } from '../../theme';

const TextSection = ({
  eyelet,
  title,
  subtitle,
  body,
  link,
  sectionID,
  themeVariant,
}: TextSectionProps) => {
  const textColor = TextColor('light', themeVariant);
  const eyeletColor = ExtraTextColor('light', themeVariant);
  const backgroundColor = BackgroundColor('light', themeVariant);
  const { palette } = useTheme();

  const ctx: ThemeContext = {
    palette,
    theme: 'light',
  };

  const subtitleColor = resolveThemeVariant<string>(
    'textSectionSubtitleColor',
    themeVariant,
    ctx,
  );

  const linkColor = resolveThemeVariant<string>(
    'actionColor',
    themeVariant,
    ctx,
  );
  const richTextLinkHoverColor = resolveThemeVariant<string>(
    'richTextLinkHoverColor',
    themeVariant,
    ctx,
  );

  return (
    <Box
      component='section'
      {...(sectionID && { id: sectionID })}
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
            component='div'
            sx={{
              color: eyeletColor,
              fontSize: { xs: '16px', md: '16px' },
              fontWeight: 400,
            }}
          >
            {eyelet}
          </Typography>
        )}
        {title && (
          <Typography
            variant='h1'
            component='h2'
            sx={{
              fontSize: { xs: '32px', md: '50px' },
              color: textColor,
              mt: 2,
            }}
          >
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontSize: { xs: '18px', md: '18px' },
              fontWeight: 400,
              color: subtitleColor,
              mt: 2,
            }}
          >
            {subtitle}
          </Typography>
        )}
        <Typography
          variant='body1'
          component='div'
          sx={{
            fontSize: { xs: '16px', md: '16px' },
            color: textColor,
            mt: 2,
            '& a': {
              color: textColor,
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
        {link && (
          <Stack direction='row' spacing={1} alignItems='center' mt={4}>
            <Typography component='div'>
              <Link
                href={link.href}
                {...(link.ariaLabel && { 'aria-label': link.ariaLabel })}
                underline='none'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: linkColor,
                  fontSize: '16px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <ArrowBackIcon sx={{ mr: 1, color: linkColor }} />
                {link.label}
              </Link>
            </Typography>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default TextSection;
