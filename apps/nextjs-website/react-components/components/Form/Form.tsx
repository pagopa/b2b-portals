'use client';
import React, { useState } from 'react';
import {
  Box,
  Grid,
  OutlinedInput,
  Typography,
  Link,
  FormControl,
  Divider,
  Button,
  Checkbox,
} from '@mui/material';
import { FormData, FormProps } from '@react-components/types/Form/Form.types';
import {
  TextColor,
  BackgroundColorAlternative,
} from '../common/Common.helpers';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Form = (props: FormProps & { onSubmit: (data: FormData) => void }) => {
  const {
    title,
    subtitle,
    privacyLinkRecaptchaPolicy,
    privacyLinkTextRecaptchaPolicy,
    privacyLinkRecaptchaTerms,
    privacyLinkTextRecaptchaTerms,
    theme,
    backgroundImage,
    ctaButtons,
    showFirstName = true,
    showLastName = true,
    showEmail = true,
    showOrganization = true,
    showCitizen = true,
    showPublicEmployee = true,
    showTechPartner = true,
    showDeveloper = true,
    showJournalist = true,
    checkboxTitle,
    showCheckboxInfo = true,
    showPrivacyDisclaimer = true,
  } = props;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
  });

  const [checkboxes, setCheckboxes] = useState({
    citizen: false,
    publicEmployee: false,
    techPartner: false,
    developer: false,
    journalist: false,
  });

  const backgroundColor = BackgroundColorAlternative(theme);
  const textColor = TextColor(theme);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCheckboxes((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleButtonClick = () => {
    props.onSubmit({ ...formData, ...checkboxes });
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
          backgroundImage: `url(${backgroundImage ?? ''})`,
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
      <MailOutlineIcon sx={{ fontSize: 50, mb: 2, color: textColor, zIndex: 3 }} />
      <Typography
        variant='h4'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3, color: textColor }}
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3, mb: 2, color: textColor }}
      >
        {subtitle}
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, position: 'relative', zIndex: 3 }}
      >
        {showFirstName && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder='Nome'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </FormControl>
          </Grid>
        )}
        {showLastName && (
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder='Cognome'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </FormControl>
          </Grid>
        )}
        {showEmail && (
          <Grid item xs={12}>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder='Indirizzo e-mail aziendale'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </FormControl>
          </Grid>
        )}
        {showOrganization && (
          <Grid item xs={12}>
            <FormControl fullWidth>
              <OutlinedInput
                placeholder='Nome ente'
                name='organization'
                value={formData.organization}
                onChange={handleInputChange}
                sx={{ backgroundColor: 'white', color: 'black' }}
              />
            </FormControl>
          </Grid>
        )}
      </Grid>
      {checkboxTitle && (
        <Typography
          variant='h6'
          gutterBottom
          sx={{ position: 'relative', zIndex: 3, mb: 2, color: textColor, fontWeight: "700" }}
        >
          {checkboxTitle}
        </Typography>
      )}
      <Grid
        container
        spacing={1}
        sx={{ mb: 2, position: 'relative', zIndex: 3, textAlign: 'left' }}
      >
        {showCitizen && (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs>
              <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                Cittadino
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={checkboxes.citizen}
                onChange={handleCheckboxChange}
                name='citizen'
              />
            </Grid>
            <Divider sx={{ width: '100%' }} />
          </Grid>
        )}
        {showPublicEmployee && (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs>
              <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                Dipendente / Consulente di un ente pubblico
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={checkboxes.publicEmployee}
                onChange={handleCheckboxChange}
                name='publicEmployee'
              />
            </Grid>
            <Divider sx={{ width: '100%' }} />
          </Grid>
        )}
        {showTechPartner && (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs={10}>
              <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                Partner tecnologico di un ente pubblico
              </Typography>
              <Typography variant='body2' sx={{ color: textColor }}>
                (presso società in-house, software house, ecc.)
              </Typography>
            </Grid>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Checkbox
                checked={checkboxes.techPartner}
                onChange={handleCheckboxChange}
                name='techPartner'
              />
            </Grid>
            <Divider sx={{ width: '100%' }} />
          </Grid>
        )}
        {showDeveloper && (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs>
              <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                Sviluppatore
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={checkboxes.developer}
                onChange={handleCheckboxChange}
                name='developer'
              />
            </Grid>
            <Divider sx={{ width: '100%' }} />
          </Grid>
        )}
        {showJournalist && (
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item xs>
              <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                Giornalista
              </Typography>
            </Grid>
            <Grid item>
              <Checkbox
                checked={checkboxes.journalist}
                onChange={handleCheckboxChange}
                name='journalist'
              />
            </Grid>
            <Divider sx={{ width: '100%' }} />
          </Grid>
        )}
      </Grid>
      {showCheckboxInfo && (
        <Typography
          variant='body2'
          sx={{ mb: 2, position: 'relative', zIndex: 3, color: textColor, textAlign: "start" }}
        >
          *Campo obbligatorio, con possibilità di risposta multipla
        </Typography>
      )}
      {ctaButtons && ctaButtons.length > 0 && (
        <Button
          variant='contained'
          sx={{ width: { md: 'auto', xs: '100%' }, zIndex: 4 }}
          onClick={handleButtonClick}
        >
          {ctaButtons[0]?.text}
        </Button>
      )}
      {showPrivacyDisclaimer && (
        <Typography
          variant='body2'
          fontWeight='bold'
          sx={{ mt: 2, position: 'relative', zIndex: 3, color: textColor }}
        >
          Inserendo il tuo indirizzo email stai accettando la nostra informativa sul trattamento dei dati personali per la newsletter.
        </Typography>
      )}
      <Typography
        variant='body2'
        sx={{ mt: 2, position: 'relative', zIndex: 3, color: 'grey.600' }}
      >
        Form protetto tramite reCAPTCHA e Google{' '}
        <Link
          href={privacyLinkRecaptchaPolicy}
          sx={{ color: 'grey.600', textDecorationColor: 'grey.600' }}
        >
          {privacyLinkTextRecaptchaPolicy}
        </Link>{' '}
        e{' '}
        <Link
          href={privacyLinkRecaptchaTerms}
          sx={{ color: 'grey.600', textDecorationColor: 'grey.600' }}
        >
          {privacyLinkTextRecaptchaTerms}
        </Link>{' '}
        applicati.
      </Typography>
    </Box>
  );
};

export default Form;