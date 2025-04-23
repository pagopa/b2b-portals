'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Link, Stack, useTheme } from '@mui/material';
import { NotFoundPageProps } from '@react-components/types/NotFoundPage/NotFoundPage.types';
import {
  IoBackgroundColor,
  SendBackgroundColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';
import EmptyImage from '@react-components/assets/Empty.png';

const localizedTexts = {
  it: {
    title: 'Pagina non trovata',
    body: 'Oops! La pagina che stai cercando non è disponibile.',
    redirectIntroText: 'Se il reindirizzamento non avviene,',
    redirectText: 'clicca qui per tornare alla home',
  },
  en: {
    title: 'Page not found',
    body: 'Oops! The page you are looking for is not available.',
    redirectIntroText: 'If the redirect does not happen,',
    redirectText: 'click here to go back to the homepage',
  },
  fr: {
    title: 'Page non trouvée',
    body: 'Oops ! La page que vous recherchez est introuvable.',
    redirectIntroText: 'Si la redirection ne fonctionne pas,',
    redirectText: 'cliquez ici pour revenir à la page d’accueil',
  },
  de: {
    title: 'Seite nicht gefunden',
    body: 'Die Seite, die Sie suchen, ist nicht verfügbar.',
    redirectIntroText: 'Wenn die Weiterleitung nicht erfolgt,',
    redirectText: 'klicken Sie hier, um zur Startseite zurückzukehren',
  },
  sl: {
    title: 'Stran ni najdena',
    body: 'Stran, ki jo iščete, ni na voljo.',
    redirectIntroText: 'Če preusmeritev ne uspe,',
    redirectText: 'kliknite tukaj za vrnitev na domačo stran',
  },
};

const NotFoundPage = ({
  redirectUrl,
  disableRedirect,
  theme,
  themeVariant,
  sectionID,
  locale,
}: NotFoundPageProps) => {
  const muiTheme = useTheme();

  useEffect(() => {
    if (disableRedirect) return;
    const timeout = setTimeout(() => {
      window.location.href = redirectUrl;
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

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

  const texts = localizedTexts[locale];

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
        <Image
          src={EmptyImage}
          alt='404'
          width={140}
          height={140}
          style={{ display: 'block' }}
        />

        <Typography variant='h4' fontWeight='bold' sx={{ color: textColor }}>
          {texts.title}
        </Typography>

        <Typography variant='body1' sx={{ color: textColor }}>
          {texts.body}
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
          {texts.redirectIntroText}{' '}
          <Link href={redirectUrl}>{texts.redirectText}</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
