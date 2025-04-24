'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Box, Typography, Link, Stack, useTheme } from '@mui/material';
import { NotFoundPageProps } from '@react-components/types/NotFoundPage/NotFoundPage.types';
import {
  SendBackgroundColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';
import EmptyImage from '@react-components/assets/Empty.png';
import { usePathname, useRouter } from 'next/navigation';

type Locale = NotFoundPageProps['defaultLocale'];

const localizedTexts = {
  it: {
    title: 'Qui non c’è nulla!',
    bodyLine1: 'La pagina che cercavi non esiste o non è più disponibile.',
    bodyLine2: 'Non preoccuparti, tornerai alla home tra pochi secondi…',
    redirectIntroText: 'Se il reindirizzamento non avviene,',
    redirectText: 'torna alla home da qui',
  },
  en: {
    title: 'There’s nothing here!',
    bodyLine1: 'The page you were looking for doesn’t exist or is no longer available.',
    bodyLine2: 'Don’t worry, you’ll be redirected to the homepage in a few seconds…',
    redirectIntroText: 'If the redirect doesn’t happen,',
    redirectText: 'go back to the homepage here',
  },
  fr: {
    title: 'Il n’y a rien ici !',
    bodyLine1: 'La page que vous cherchez n’existe pas ou n’est plus disponible.',
    bodyLine2: 'Ne vous inquiétez pas, vous serez redirigé vers la page d’accueil dans quelques secondes…',
    redirectIntroText: 'Si la redirection ne fonctionne pas,',
    redirectText: 'retournez à la page d’accueil ici',
  },
  de: {
    title: 'Hier gibt’s nichts!',
    bodyLine1: 'Die Seite, die du suchst, existiert nicht oder ist nicht mehr verfügbar.',
    bodyLine2: 'Keine Sorge, du wirst in wenigen Sekunden zur Startseite weitergeleitet…',
    redirectIntroText: 'Wenn die Weiterleitung nicht erfolgt,',
    redirectText: 'gehe hier zurück zur Startseite',
  },
  sl: {
    title: 'Tu ni ničesar!',
    bodyLine1: 'Stran, ki jo iščete, ne obstaja ali ni več na voljo.',
    bodyLine2: 'Brez skrbi, čez nekaj sekund boste preusmerjeni na domačo stran…',
    redirectIntroText: 'Če preusmeritev ne deluje,',
    redirectText: 'se tukaj vrnite na domačo stran',
  },
};

const NotFoundPage = ({
  disableRedirect,
  defaultLocale,
  validLocales,
}: NotFoundPageProps) => {
  const muiTheme = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const isValidLocale = (locale: string): boolean => {
    return validLocales.includes(locale as Locale);
  };

  const redirectUrl =
    pathname.length < 5
      ? // No locale (/x) or an invalid locale's homepage (/xx/)
        // (If it was valid, we would not be here in the 404 page)
        // Redirect to the default locale's homepage
        '/'
      : pathname[3] === '/' && isValidLocale(pathname.slice(1, 3))
        ? // If a valid locale is present in the pathname
          // Redirect to said locale's homepage
          `/${pathname.slice(1, 3) === defaultLocale ? '' : pathname.slice(1, 3)}`
        : // No locale has been specified, simply redirect to the default locale's homepage
          '/';

  const locale = redirectUrl === '/' ? defaultLocale : redirectUrl.slice(1, 3);

  useEffect(() => {
    if (disableRedirect) return;
    const timeout = setTimeout(() => {
      router.replace(redirectUrl);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const backgroundColor = SendBackgroundColor('light');
  const textColor = TextColor('light');
  const linkColor = muiTheme.palette.primary.main;

  const texts = localizedTexts[locale as Locale];

  return (
    <Box
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
          {texts.bodyLine1}
        </Typography>
        <Typography variant='body1' sx={{ color: textColor }}>
          {texts.bodyLine2}
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
