import React, { useState } from 'react';
import {
  Box,
  Grid,
  OutlinedInput,
  Typography,
  Link,
  FormControl,
  Button,
} from '@mui/material';
import { FormData, FormProps } from '@react-components/types/Form/Form.types';
import {
  TextColor,
  BackgroundColorAlternative,
  GrayLinkColor,
} from '../common/Common.helpers';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FormCategories } from './Form.helpers';

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
    formCategories,
    categoriesTitle,
    showMandatoryInfo = true,
    showPrivacyDisclaimer = true,
  } = props;

  const backgroundColor = BackgroundColorAlternative(theme);
  const textColor = TextColor(theme);
  const graylinkColor = GrayLinkColor(theme);
  const borderColor = theme === 'light' ? graylinkColor : 'white';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    selectedOption: '',
  });

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, selectedOption: event.target.value }); // Update formData with selectedOption
  };

  const handleButtonClick = () => {
    props.onSubmit(formData);
  };

  const updatedFormCategories = formCategories.map((category, index) => ({
    ...category,
    key: `category-${index}`,
  }));

  const validateRequired = (value: string) => value.trim() !== '';
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (event: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = event.target;
    let isValid = true;
    let errorMessage = '';

    if (name === 'email') {
      isValid = validateEmail(value);
      errorMessage = 'Invalid email address';
    } else {
      isValid = validateRequired(value);
      errorMessage = 'This field is required';
    }

    if (isValid) {
      setFormData({ ...formData, [name]: value });
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    }
  };

  interface ValidationErrors {
    firstName?: string;
    lastName?: string;
    email?: string;
    organization?: string;
  }

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const formFields = [
    {
      name: 'firstName',
      placeholder: 'Nome',
      showCondition: showFirstName,
      validationErrorKey: 'firstName',
    },
    {
      name: 'lastName',
      placeholder: 'Cognome',
      showCondition: showLastName,
      validationErrorKey: 'lastName',
    },
    {
      name: 'email',
      placeholder: 'Indirizzo e-mail',
      showCondition: showEmail,
      validationErrorKey: 'email',
    },
    {
      name: 'organization',
      placeholder: 'Nome ente',
      showCondition: showOrganization,
      validationErrorKey: 'organization',
    },
  ];

  interface RenderFieldParams {
    name: string;
    placeholder: string;
    showCondition: boolean;
    validationErrorKey: string;
  }

  function isValidKey(key: any): key is keyof ValidationErrors {
    return (
      key === 'firstName' ||
      key === 'lastName' ||
      key === 'email' ||
      key === 'organization'
    );
  }

  const renderField = ({
    name,
    placeholder,
    showCondition,
    validationErrorKey,
  }: RenderFieldParams) => {
    if (!showCondition) return null;

    const isError =
      isValidKey(validationErrorKey) && !!validationErrors[validationErrorKey];
    const fieldValue = isValidKey(name) ? formData[name] : '';
    return (
      <Grid
        item
        xs={12}
        sm={name === 'firstName' || name === 'lastName' ? 6 : 12}
      >
        <FormControl fullWidth error={isError}>
          <OutlinedInput
            placeholder={placeholder}
            name={name}
            value={fieldValue}
            onChange={handleInputChange}
            sx={{ backgroundColor: 'white', color: 'black' }}
          />
          {isError && (
            <Typography
              id={`${name}-error-text`}
              variant='caption'
              sx={{ color: 'error.main' }}
            >
              {isValidKey(validationErrorKey)
                ? validationErrors[validationErrorKey]
                : ''}
            </Typography>
          )}
        </FormControl>
      </Grid>
    );
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
        {formFields.map(renderField)}
      </Grid>
      {categoriesTitle && (
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
          {categoriesTitle}
        </Typography>
      )}
      {updatedFormCategories.length > 0 && (
        <FormCategories
          formCategories={updatedFormCategories}
          textColor={textColor}
          borderColor={borderColor}
          selectedOption={formData.selectedOption}
          handleRadioChange={handleRadioChange}
        />
      )}
      {showMandatoryInfo && (
        <Typography
          variant='body2'
          sx={{
            mb: 2,
            position: 'relative',
            zIndex: 3,
            color: textColor,
            textAlign: 'start',
          }}
        >
          *Campo obbligatorio
        </Typography>
      )}
      {ctaButtons && ctaButtons.length > 0 && (
        <Button
          variant='contained'
          sx={{ width: { md: 'auto', xs: '100%' }, zIndex: 4 }}
          onClick={handleButtonClick}
          color={theme === 'dark' ? 'negative' : 'primary'}
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
