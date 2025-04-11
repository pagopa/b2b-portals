'use client';

import { useEffect } from 'react';
import {
  Box,
  Typography,
  Link,
  Stack,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { NotFoundPageProps } from '@react-components/types/NotFoundPage/NotFoundPage.types';
import {
  IoBackgroundColor,
  SendBackgroundColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';

const safeUseRouter = () => {
  try {
    const { useRouter } = require('next/navigation');
    return useRouter();
  } catch {
    return null;
  }
};

const NotFoundPage = ({
  image,
  mobileImage,
  title = 'Qui non c’è nulla!',
  body = 'La pagina che cercavi non esiste o non è più disponibile.',
  redirectIntroText = 'Se il reindirizzamento non avviene,',
  redirectText = 'torna alla home da qui',
  redirectUrl = '/',
  disableRedirect = false,
  theme,
  themeVariant,
  sectionID,
}: NotFoundPageProps) => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const router = !disableRedirect ? safeUseRouter() : null;

  useEffect(() => {
    if (!router || disableRedirect) return;
    const timeout = setTimeout(() => {
      router.push(redirectUrl);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router, redirectUrl, disableRedirect]);

  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);

  const textColor =
    theme === 'dark' ? muiTheme.palette.primary.contrastText : TextColor(theme);

  const linkColor =
    theme === 'dark'
      ? muiTheme.palette.custom.white
      : themeVariant === 'SEND'
        ? muiTheme.palette.primary.main
        : muiTheme.palette.custom.primaryColorDark;

  return (
    <Box
      id={sectionID ?? undefined}
      minHeight={{ xs: 'auto', md: '70vh' }}
      display='flex'
      justifyContent='center'
      alignItems='center'
      textAlign='center'
      px={2}
      pt={{ xs: 6, md: 0 }}
      pb={10}
      sx={{ backgroundColor }}
    >
      <Stack spacing={3} alignItems='center' maxWidth={480} mx='auto'>
        {isMobile ? mobileImage : image}

        <Typography variant='h4' fontWeight='bold' sx={{ color: textColor }}>
          {title}
        </Typography>

        <Typography variant='body1' sx={{ color: textColor }}>
          {body}
        </Typography>

        <Typography
          variant='body2'
          sx={{
            color: textColor,
            '& a': {
              color: linkColor,
              textDecoration: 'none',
              fontWeight: 'bold',
              '&:hover': {
                color: linkColor,
                textDecoration: 'none',
              },
            },
          }}
        >
          {redirectIntroText} <Link href={redirectUrl}>{redirectText}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
