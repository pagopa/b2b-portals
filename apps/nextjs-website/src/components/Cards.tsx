'use client';
import React from 'react';
import { ReactElement } from 'react';
import { CardsSection } from '@/lib/fetch/types/PageSection';

interface CardsProps {
  theme: 'dark' | 'light';
  text: {
    title: string;
    subtitle?: string | undefined;
    body?: string | ReactElement;
  };
  items: {
    cardIcon: string | null;
    title: string;
    text: string;
    link: {
      href: string;
      title: string;
      text: string;
    };
  }[];
}

const makeCardsProps = ({ theme, text, items }: CardsSection): CardsProps => ({
  theme,
  text: {
    title: text.title,
    subtitle: text.subtitle,
    body: text.body,
  },
  items: items.map((item) => ({
    cardIcon: item.cardIcon,
    title: item.title,
    text: item.text,
    link: {
      href: item.link.href,
      title: item.link.title,
      text: item.link.text,
    },
  })),
});

const Cards = (props: CardsSection) => <CardsEC {...makeCardsProps(props)} />;

export default Cards;

// Cards SEND legacy

// import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CodeIcon from '@mui/icons-material/Code';

// export const Cards1 = () => {
//     const cards1Data = [
//         {
//             title: '1. Termini e Condizioni di adesione e uso',
//             buttons: [
//                 {
//                     label: 'Leggi i Termini e Condizioni',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/documento-1-termini-condizioni-di-adesione-e-uso/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '2. Atto di Nomina a Responsabile Trattamento Dati Personali',
//             buttons: [
//                 {
//                     label: 'Leggi l’Atto di Nomina',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/doc.2-atto-di-nomina-a-responsabile-trattamento-da/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '3. Documentazione tecnica',
//             buttons: [
//                 {
//                     label: 'Vai al documento',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/documento-3-documentazione-tecnica/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//                 {
//                     label: 'Leggi il manuale operativo',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/manuale-operativo/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//                 {
//                     label: 'API b2b per le pubbliche amministrazioni e per l'avanzamento delle notifiche',
//                     color: 'primary',
//                     link: 'https://developer.pagopa.it/send/api#/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//                 {
//                     label: 'Vai alle API B2B per l’avanzamento delle notifiche',
//                     color: 'primary',
//                     link: '#',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '4. Ciclo attivo',
//             buttons: [
//                 {
//                     label: 'Vai al documento',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/documento-4-ciclo-attivo-pn',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '5. Modulo di Profilazione',
//             description: 'Necessario per l’avvio in esercizio',
//             buttons: [
//                 {
//                     label: 'Apri il documento',
//                     color: 'primary',
//                     link: '/static/documents/Modulo preventivo di fornitura.xlsx',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '6. Modulo di Commessa',
//             description: 'Necessario per la fatturazione',
//             buttons: [
//                 {
//                     label: 'Compila il modulo',
//                     color: 'primary',
//                     link: '/static/documents/Modulo Ordinativo Commessa per Anticipazione.xlsx',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },
//         {
//             title: '7. SLA di servizio',
//             buttons: [
//                 {
//                     label: 'Vai al documento',
//                     color: 'primary',
//                     link: 'https://docs.pagopa.it/sla-di-servizio/',
//                     icon: <ArrowForwardIcon sx={{ color: 'primary.main' }} />,
//                 },
//             ],
//         },

//     ];

//     return (

//         <Box pb={8} pt={8}>
//             <Container maxWidth='xl' className='documentiCustomCard'>
//                 <Stack direction={{ lg: 'row', xs: 'column' }} spacing={2} justifyContent='center' sx={{ alignItems: { lg: 'flex-start', md: 'center', sm: 'center', xs: 'center' } }}>

//                     {/* Stack per il testo */}
//                     <Stack sx={{ width: { lg: '25%', md: '85%', sm: '100%', xs: '100%' }, mb: { xs: 4, lg: 0 }, ml: { lg: 0, xs: 0 }, mr: { lg: '10%', xs: 0 } }}>
//                         <Typography variant='h4' tabIndex={0} aria-label='Come aderire a SEND' sx={{ color: 'primary.contrastText' }}
//                             pb={2}>
//                             Come aderire a SEND
//                         </Typography>
//                         <Typography variant='h6' tabIndex={0} aria-label='Per gli enti' sx={{ color: 'primary.contrastText' }} pb={2}>
//                             Per gli enti
//                         </Typography>
//                         <Typography variant='body2' tabIndex={0} aria-label='' sx={{ color: 'primary.contrastText' }} pb={2}>
//                             Per aderire a SEND è necessario scegliere come integrarsi, direttamente o avvalendosi di uno dei{' '}
//                             <Link href='https://docs.pagopa.it/lista-partner-tecnologici-pn_pagopa-s.p.a./' target='_blank'
//                                 rel='noopener noreferrer' aria-label='' sx={{
//                                     color: 'primary.contrastText', textDecoration: 'underline'
//                                     , fontWeight: 'bold'
//                                 }}>
//                                 Partner e Intermediari tecnologici
//                             </Link>
//                             , e sottoscrivere l’accordo di adesione.
//                         </Typography>
//                         <Typography variant='body2' tabIndex={0} aria-label='' sx={{ color: 'primary.contrastText' }} pb={2}>
//                             Per ricevere l'accordo di adesione, l'ente deve accedere all'
//                             <Link href='https://selfcare.pagopa.it/auth/login?onSuccess=%2Fonboarding%2Fprod-pn' target='_blank'
//                                 rel='noopener noreferrer' aria-label='' sx={{
//                                     color: 'primary.contrastText', textDecoration: 'underline'
//                                     , fontWeight: 'bold'
//                                 }}>
//                                 Area Riservata
//                             </Link>
//                             {' '}e seguire i passaggi descritti in{' '}
//                             <Link href='https://docs.pagopa.it/area-riservata-enti-piattaforma-notifiche/' target='_blank'
//                                 rel='noopener noreferrer' aria-label='' sx={{
//                                     color: 'primary.contrastText', textDecoration: 'underline'
//                                     , fontWeight: 'bold'
//                                 }}>
//                                 questa guida
//                             </Link>
//                             .
//                         </Typography>
//                         <Typography variant='body2' tabIndex={0} aria-label='' sx={{ color: 'primary.contrastText' }} pb={2}>
//                             Una volta sottoscritto l'accordo in digitale, l'ente dovrà caricarlo e inviarlo a PagoPA S.p.A. sempre
//                             dall'Area Riservata integrando i seguenti documenti e moduli debitamente compilati ove richiesto.
//                         </Typography>
//                         <Typography variant='body2' tabIndex={0} aria-label='' sx={{ color: 'primary.contrastText' }} pb={4}>
//                             Per ulteriori informazioni e chiarimenti, è possibile{' '}
//                             <Link href='https://docs.pagopa.it/faq-enti' target='_blank' rel='noopener noreferrer' aria-label='' sx={{
//                                 color: 'primary.contrastText', textDecoration: 'underline', fontWeight: 'bold'
//                             }}>
//                                 consultare le FAQ
//                             </Link>
//                             {' '}dedicate agli enti.
//                         </Typography>
//                         <Button variant='contained' sx={{
//                             width: 'max-content', backgroundColor: 'background.paper',
//                             color: 'primary.main', '&:hover': { backgroundColor: 'background.paper', color: 'primary.main' }
//                         }}
//                             href='https://selfcare.pagopa.it/auth/login?onSuccess=%2Fonboarding%2Fprod-pn'>
//                             Aderisci a SEND
//                         </Button>
//                     </Stack>

//                     {/* Stack per le cards */}
//                     <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2} sx={{ width: { lg: '50%', md: '85%', sm: '100%', xs: '100%' }, ml: { lg: '12.5%', xs: 0 }, mr: { lg: '12.5%', xs: 0 } }}>

//                         {/* Stack Cards 1 */}
//                         <Stack sx={{ width: { sm: '50%', xs: '100%' } }} spacing={2} direction='column' >
//                             {cards1Data.slice(0, Math.ceil(cards1Data.length / 2)).map((card, index) => (
//                                 <Box key={index} sx={{ width: '100%' }}>
//                                     <Card className='documentiCustomCardContent'>
//                                         <CardContent sx={{ textAlign: 'left' }}>
//                                             <Typography variant='h5' component='div'>
//                                                 {card.title}
//                                             </Typography>
//                                             {card.description && (
//                                                 <Typography variant='body2'>
//                                                     {card.description}
//                                                 </Typography>
//                                             )}
//                                         </CardContent>
//                                         <CardActions>
//                                             <Stack direction='column' spacing={1}>
//                                                 {card.buttons.map((button, buttonIndex) => (
//                                                     <Button
//                                                         key={buttonIndex}
//                                                         size='small'
//                                                         color='primary'
//                                                         href={button.link}
//                                                         endIcon={button.icon || <ArrowForwardIcon />}
//                                                         sx={{ justifyContent: 'start' }}
//                                                         disableRipple={true}
//                                                     >
//                                                         {button.label}
//                                                     </Button>
//                                                 ))}
//                                             </Stack>
//                                         </CardActions>
//                                     </Card>
//                                 </Box>
//                             ))}
//                         </Stack>

//                         {/* Stack Cards 2 */}
//                         <Stack sx={{ width: { sm: '50%', xs: '100%' } }} spacing={2} direction='column' >
//                             {cards1Data.slice(Math.ceil(cards1Data.length / 2)).map((card, index) => (
//                                 <Box key={index} sx={{ width: '100%' }}>
//                                     <Card className='documentiCustomCardContent'>
//                                         <CardContent sx={{ textAlign: 'left' }}>
//                                             <Typography variant='h5' component='div'>
//                                                 {card.title}
//                                             </Typography>
//                                             {card.description && (
//                                                 <Typography variant='body2'>
//                                                     {card.description}
//                                                 </Typography>
//                                             )}
//                                         </CardContent>
//                                         <CardActions>
//                                             <Stack direction='column' spacing={1}>
//                                                 {card.buttons.map((button, buttonIndex) => (
//                                                     <Button
//                                                         key={buttonIndex}
//                                                         size='small'
//                                                         color='primary'
//                                                         href={button.link}
//                                                         endIcon={button.icon || <ArrowForwardIcon />}
//                                                         sx={{ justifyContent: 'start' }}
//                                                         disableRipple={true}
//                                                     >
//                                                         {button.label}
//                                                     </Button>
//                                                 ))}
//                                             </Stack>
//                                         </CardActions>
//                                     </Card>
//                                 </Box>
//                             ))}
//                         </Stack>

//                     </Stack>

//                 </Stack>
//             </Container>
//         </Box>
//     );
// };