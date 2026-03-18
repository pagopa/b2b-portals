'use client';
import Image from 'next/image';
import { Box, Typography, Stack } from '@mui/material';
import {
  SendBackgroundColor,
  TextColor,
} from '@react-components/components/common/Common.helpers';
import EmptyImage from '@react-components/assets/Empty.png';
import { usePathname } from 'next/navigation';
import { ErrorPageProps } from '@react-components/types/ErrorPage/ErrorPage.types';

type Locale = ErrorPageProps['defaultLocale'];

const localizedTexts = {
  it: {
    title: 'Qualcosa non ha funzionato',
    bodyLine: 'C’è un piccolo imprevisto. Fai una pausa e riprova più tardi.',
  },
  en: {
    title: 'Something went wrong',
    bodyLine: "There's a small glitch. Take a break and try again later.",
  },
  fr: {
    title: "Quelque chose s'est mal passé",
    bodyLine:
      'Il y a un petit problème technique. Faites une pause et réessayez plus tard.',
  },
  de: {
    title: 'Etwas ist schiefgelaufen.',
    bodyLine:
      'Es gibt einen kleinen Fehler. Machen Sie eine Pause und versuchen Sie es später noch einmal.',
  },
  sl: {
    title: 'Nekaj ​​je šlo narobe',
    bodyLine:
      'Prišlo je do manjše napake. Vzemite si odmor in poskusite znova pozneje.',
  },
};

const ErrorPage = ({ defaultLocale, validLocales }: ErrorPageProps) => {
  const pathname = usePathname();

  const isValidLocale = (locale: string): boolean => {
    return validLocales.includes(locale as Locale);
  };

  const locale =
    pathname === '/error'
      ? defaultLocale
      : isValidLocale(pathname.substring(1, 3))
        ? pathname.substring(1, 3)
        : defaultLocale;

  const backgroundColor = SendBackgroundColor('light');
  const textColor = TextColor('light');
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

        <Typography
          variant='h4'
          component='h1'
          fontWeight='bold'
          sx={{ color: textColor }}
        >
          {texts.title}
        </Typography>

        <Typography variant='body1' sx={{ color: textColor }}>
          {texts.bodyLine}
        </Typography>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
