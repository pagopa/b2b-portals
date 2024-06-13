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
} from '@mui/material';
import { FormProps } from '@react-components/types/Form/Form.types';
import {
  TextColor,
  BackgroundColorAlternative,
  LinkColor,
} from '../common/Common.helpers';

const Form = (props: FormProps) => {
  const {
    title,
    subtitle,
    privacyText,
    privacyLink,
    privacyLinkText,
    theme,
    backgroundImage,
    ctaButtons,
  } = props;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
  });

  const backgroundColor = BackgroundColorAlternative(theme);
  const textColor = TextColor(theme);
  const linkColor = LinkColor(theme);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    console.log(formData);
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
      <Typography
        variant='h3'
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
      </Grid>
      <Typography
        variant='body2'
        sx={{ mb: 2, position: 'relative', zIndex: 3, color: textColor }}
      >
        {privacyText}{' '}
        <Link
          href={privacyLink}
          sx={{ color: linkColor, textDecorationColor: linkColor }}
        >
          {privacyLinkText}
        </Link>
      </Typography>
      <Divider
        sx={{
          mb: 2,
          position: 'relative',
          zIndex: 3,
          backgroundColor: textColor,
        }}
      />
      {ctaButtons && ctaButtons.length > 0 && (
        <Button
          variant='contained'
          sx={{ width: { md: 'auto', xs: '100%' }, zIndex: 4 }}
          onClick={handleButtonClick}
        >
          {ctaButtons[0]?.text}
        </Button>
      )}
    </Box>
  );
};

export default Form;
