import React, { useState } from 'react';
import {
  Box,
  Grid,
  OutlinedInput,
  Typography,
  Link,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from '@mui/material';
import { FormData, FormProps } from '@react-components/types/Form/Form.types';
import {
  TextColor,
  BackgroundColorAlternative,
  GrayLinkColor,
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

  const [selectedOption, setSelectedOption] = useState<'citizen' | 'publicEmployee' | 'techPartner' | 'developer' | 'journalist' | ''>('');

  const backgroundColor = BackgroundColorAlternative(theme);
  const textColor = TextColor(theme);
  const graylinkColor = GrayLinkColor(theme);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value as 'citizen' | 'publicEmployee' | 'techPartner' | 'developer' | 'journalist');
  };

  const handleButtonClick = () => {
    const allData: FormData = { ...formData, selectedOption };
    console.log(allData);
    props.onSubmit(allData);
  };

  const borderColor = theme === 'light' ? graylinkColor : 'white';

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
      <MailOutlineIcon
        sx={{ fontSize: 50, mb: 2, color: textColor, zIndex: 3 }}
      />
      <Typography
        variant='h4'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3, color: textColor, mb: 4 }}
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        sx={{ position: 'relative', zIndex: 3, mb: 4, color: textColor }}
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
                placeholder='Indirizzo e-mail'
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
          sx={{
            position: 'relative',
            zIndex: 3,
            mb: 2,
            mt: 4,
            color: textColor,
            fontWeight: '700',
          }}
        >
          {checkboxTitle}
        </Typography>
      )}
      <RadioGroup value={selectedOption} onChange={handleRadioChange}>
        <Grid
          container
          spacing={1}
          sx={{ mb: 2, position: 'relative', zIndex: 3, textAlign: 'left' }}
        >
          {showCitizen && (
            <>
              <Grid container alignItems='center' justifyContent='space-between' sx={{ borderBottom: `1px solid ${borderColor}` }}>
                <Grid item xs>
                  <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                    Cittadino
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <FormControlLabel
                    value='citizen'
                    control={<Radio sx={{ color: textColor, '&.Mui-checked': { color: textColor }, '&:hover': { bgcolor: 'transparent' } }} />}
                    label=''
                    labelPlacement='end'
                    sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {showPublicEmployee && (
            <>
              <Grid container alignItems='center' justifyContent='space-between' sx={{ borderBottom: `1px solid ${borderColor}` }}>
                <Grid item xs>
                  <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                    Dipendente / Consulente di un ente pubblico
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <FormControlLabel
                    value='publicEmployee'
                    control={<Radio sx={{ color: textColor, '&.Mui-checked': { color: textColor }, '&:hover': { bgcolor: 'transparent' } }} />}
                    label=''
                    labelPlacement='end'
                    sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {showTechPartner && (
            <>
              <Grid container alignItems='center' justifyContent='space-between' sx={{ borderBottom: `1px solid ${borderColor}` }}>
                <Grid item xs>
                  <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                    Partner tecnologico di un ente pubblico
                  </Typography>
                  <Typography variant='body2' sx={{ color: textColor }}>
                    (presso società in-house, software house, ecc.)
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <FormControlLabel
                    value='techPartner'
                    control={<Radio sx={{ color: textColor, '&.Mui-checked': { color: textColor }, '&:hover': { bgcolor: 'transparent' } }} />}
                    label=''
                    labelPlacement='end'
                    sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {showDeveloper && (
            <>
              <Grid container alignItems='center' justifyContent='space-between' sx={{ borderBottom: `1px solid ${borderColor}` }}>
                <Grid item xs>
                  <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                    Sviluppatore
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <FormControlLabel
                    value='developer'
                    control={<Radio sx={{ color: textColor, '&.Mui-checked': { color: textColor }, '&:hover': { bgcolor: 'transparent' } }} />}
                    label=''
                    labelPlacement='end'
                    sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
                  />
                </Grid>
              </Grid>
            </>
          )}
          {showJournalist && (
            <>
              <Grid container alignItems='center' justifyContent='space-between' sx={{ borderBottom: `1px solid ${borderColor}` }}>
                <Grid item xs>
                  <Typography variant='body1' fontWeight='bold' sx={{ color: textColor }}>
                    Giornalista
                  </Typography>
                </Grid>
                <Grid item sx={{ textAlign: 'right' }}>
                  <FormControlLabel
                    value='journalist'
                    control={<Radio sx={{ color: textColor, '&.Mui-checked': { color: textColor }, '&:hover': { bgcolor: 'transparent' } }} />}
                    label=''
                    labelPlacement='end'
                    sx={{ ml: 0, pr: 0, mr: 0, py: 1 }}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </RadioGroup>
      {showCheckboxInfo && (
        <Typography
          variant='body2'
          sx={{ mb: 2, position: 'relative', zIndex: 3, color: textColor, textAlign: 'start' }}
        >
          *Campo obbligatorio
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
          Inserendo il tuo indirizzo email stai accettando la nostra informativa
          sul trattamento dei dati personali per la newsletter.
        </Typography>
      )}
      <Typography
        variant='body2'
        sx={{ mt: 2, position: 'relative', zIndex: 3, color: graylinkColor }}
      >
        Form protetto tramite reCAPTCHA e Google{' '}
        <Link
          href={privacyLinkRecaptchaPolicy}
          sx={{
            color: graylinkColor,
            textDecorationColor: graylinkColor,
            textDecoration: 'underline',
          }}
        >
          {privacyLinkTextRecaptchaPolicy}
        </Link>{' '}
        e{' '}
        <Link
          href={privacyLinkRecaptchaTerms}
          sx={{
            color: graylinkColor,
            textDecorationColor: graylinkColor,
            textDecoration: 'underline',
          }}
        >
          {privacyLinkTextRecaptchaTerms}
        </Link>{' '}
        applicati.
      </Typography>
    </Box>
  );
};

export default Form;
