'use client';
import React from 'react';
import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  Typography,
  Link,
  FormControl,
  Divider,
} from '@mui/material';
import { FormProps } from '@react-components/types/Form/Form.types';

const Form = ({
  title,
  subtitle,
  privacyText,
  privacyLink,
  privacyLinkText,
  buttonText,
  theme,
}: FormProps) => {
  const backgroundColor = theme === 'dark' ? '#333' : 'white';
  const textColor = theme === 'dark' ? 'white' : 'black';
  const backgroundImage =
    'https://firma.io.italia.it/static/hero-solid-light-e572933ea5002ad32c30da3444b1d1fc.jpg';

  const inputStyles = {
    backgroundColor: 'white',
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: 4,
        textAlign: 'center',
        backgroundColor,
        borderRadius: 2,
        boxShadow: 3,
        color: textColor,
        position: 'relative',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
          opacity: 1,
        },
        '::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 2,
        },
      }}
    >
      <Typography
        variant='h3'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3 }}
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3, mb: 2 }}
      >
        {subtitle}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, position: 'relative', zIndex: 3 }}
      >
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <OutlinedInput placeholder='Nome' sx={inputStyles} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <OutlinedInput placeholder='Cognome' sx={inputStyles} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <OutlinedInput
              placeholder='Indirizzo e-mail aziendale'
              sx={inputStyles}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <OutlinedInput placeholder='Nome ente' sx={inputStyles} />
          </FormControl>
        </Grid>
      </Grid>
      <Typography
        variant='body2'
        sx={{ mb: 2, position: 'relative', zIndex: 3 }}
      >
        {privacyText} <Link href={privacyLink}>{privacyLinkText}</Link>
      </Typography>
      <Divider sx={{ mb: 2, position: 'relative', zIndex: 3 }} />
      <Button
        variant='contained'
        color='primary'
        sx={{ position: 'relative', zIndex: 3 }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default Form;
