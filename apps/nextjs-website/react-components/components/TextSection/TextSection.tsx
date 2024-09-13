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

const TextSection = ({
  eyelet,
  title,
  subtitle,
  body,
  link,
  sectionID,
}: TextSectionProps) => {
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
            component='div'
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
              color: palette.custom.black,
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
                color: textColor,
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
                underline='none'
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  color: palette.custom.primaryColorDark,
                  fontSize: '16px',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <ArrowBackIcon
                  sx={{ mr: 1, color: palette.custom.primaryColorDark }}
                />
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
