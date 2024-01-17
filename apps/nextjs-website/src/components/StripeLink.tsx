'use client';
import React from 'react';
import { EIconProps } from '@pagopa/pagopa-editorial-components/dist/components/EIcon';
import { ReactElement } from 'react';
import { StripeLinkSection } from '@/lib/fetch/types/PageSection';
// import MarkdownRenderer from './MarkdownRenderer';

interface StripeLinkProps {
  theme: 'dark' | 'light';
  subtitle: string | ReactElement;
  icon?: EIconProps;
  buttonText: string;
}

const makeStripeLinkProps = ({
  subtitle,
  buttonText,
  ...rest
}: StripeLinkSection): StripeLinkProps => ({
  subtitle,
  buttonText,
  ...rest,
});

const StripeLink = (props: StripeLinkSection) => (
  <section>
    <StripeLinkEC {...makeStripeLinkProps(props)} />
  </section>
);

export default StripeLink;

// Versione SEND legacy

// import { Box, Button, Container, Grid, Typography } from '@mui/material';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CodeIcon from '@mui/icons-material/Code';
// export const StripeLink = () => {
//     return (
//         <Box sx={{ backgroundColor: 'info.contrastText' }} padding={2}>
//             <Container maxWidth='xl'>
//                 <Grid container spacing={2} >
//                     <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                         <Typography variant='body2' color='white' display={'flex'} justifyContent={'center'} alignItems={'center'}>
//                             <CodeIcon sx={{ fontSize: '20px', marginRight: '10px' }} />
//                             Il tuo ente ha già aderito e hai bisogno di approfondire le fasi di integrazione alla Piattaforma?
//                         </Typography>
//                     </Grid>
//                     <Grid item xs={12} md={6}>
//                         <Button variant='contained' color='primary' endIcon={<ArrowForwardIcon />} href='https://developer.pagopa.it/send/overview'>
//                             Vai alla documentazione tecnica
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };
