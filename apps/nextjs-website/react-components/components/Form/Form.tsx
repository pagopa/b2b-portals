import React, { useRef, useState } from 'react';
import RECAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Grid,
  OutlinedInput,
  Typography,
  FormControl,
  Button,
  Alert,
} from '@mui/material';
import { FormProps } from '@react-components/types/Form/Form.types';
import { TextColor, GrayLinkColor } from '../common/Common.helpers';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { FormCategories } from './Form.helpers';

interface ValidationErrors {
  name: string | null;
  surname: string | null;
  email: string | null;
  organization: string | null;
}

interface InputFieldData {
  name: 'name' | 'surname' | 'email' | 'organization';
  placeholder: string;
  show: boolean;
}

const Form = ({
  title,
  subtitle,
  theme,
  categoriesTitle,
  defaultCategoryID,
  categories,
  clientID,
  listID,
  showName,
  showSurname,
  showOrganization,
  recaptchaSiteKey,
  sectionID,
  buttonLabel,
  notes,
}: FormProps) => {
  const textColor = TextColor(theme);
  const graylinkColor = GrayLinkColor(theme);
  const borderColor = theme === 'light' ? graylinkColor : 'white';
  const recaptchaRef = useRef<RECAPTCHA>(null);

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    name: null,
    surname: null,
    email: null,
    organization: null,
  });

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    organization: '',
    category: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState<
    'success' | 'failure' | null
  >(null);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, category: event.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate inputs
    const inputErrors = {
      name:
        showName && !validateRequired(formData.name)
          ? 'Campo obbligatorio'
          : null,
      surname:
        showSurname && !validateRequired(formData.surname)
          ? 'Campo obbligatorio'
          : null,
      organization:
        showOrganization && !validateRequired(formData.organization)
          ? 'Campo obbligatorio'
          : null,
      email: !validateRequired(formData.email)
        ? 'Campo obbligatorio'
        : !validateEmail(formData.email)
          ? 'Email non valida'
          : null,
    };

    setValidationErrors(inputErrors);

    if (
      inputErrors.name ||
      inputErrors.surname ||
      inputErrors.organization ||
      inputErrors.email
    ) {
      alert('Si prega di compilare tutti i campi richiesti');
      return;
    }

    // Validate category
    if (categories.length > 0 && formData.category === '') {
      alert('Si prega di selezionare una delle categorie dalla lista');
      return;
    }

    try {
      if (recaptchaRef.current === null) {
        throw new Error();
      }

      const recaptchaToken = await recaptchaRef.current.executeAsync();

      if (!recaptchaToken) {
        alert('Si prega di completare ReCaptcha per continuare');
        return;
      }

      const res = await fetch(
        `https://news-p-weu-core-app-fn.azurewebsites.net/api/v1/newsletters/${clientID}/lists/${listID}/recipients`,
        {
          mode: 'cors',
          method: 'POST',
          body: JSON.stringify({
            recaptchaToken,
            groups:
              categories.length > 0 && formData.category !== ''
                ? [formData.category]
                : [defaultCategoryID],
            email: formData.email,
            ...(showName && { name: formData.name }),
            ...(showSurname && { surname: formData.surname }),
            ...(showOrganization && { organization: formData.organization }),
          }),
        }
      );

      const { email } = await res.json();

      if (res.status === 200 && email === formData.email) {
        setFormData({
          name: '',
          surname: '',
          email: '',
          organization: '',
          category: '',
        });
        setSubmissionStatus('success');
        return;
      }

      throw new Error();
    } catch (error) {
      setSubmissionStatus('failure');
    } finally {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  const validateRequired = (value: string) => value.trim() !== '';
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }): void => {
    setFormData({ ...formData, [name]: value });

    // All inputs are required so check that first
    if (!validateRequired(value)) {
      setValidationErrors({
        ...validationErrors,
        [name]: 'Campo obbligatorio',
      });
      return;
    }

    // If input is email, loosely verify its validity
    if (name === 'email' && !validateEmail(value)) {
      setValidationErrors({ ...validationErrors, [name]: 'Email non valida' });
      return;
    }

    setValidationErrors({ ...validationErrors, [name]: null });
  };

  const inputFields: InputFieldData[] = [
    {
      name: 'name',
      placeholder: 'Nome*',
      show: showName,
    },
    {
      name: 'surname',
      placeholder: 'Cognome*',
      show: showSurname,
    },
    {
      name: 'email',
      placeholder: 'Indirizzo e-mail*',
      show: true,
    },
    {
      name: 'organization',
      placeholder: 'Nome ente*',
      show: showOrganization,
    },
  ];

  const InputField = ({ name, placeholder, show }: InputFieldData) => {
    return show ? (
      <Grid item xs={12} sm={name === 'name' || name === 'surname' ? 6 : 12}>
        <FormControl fullWidth error={validationErrors[name] !== null}>
          <OutlinedInput
            placeholder={placeholder}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            sx={{ backgroundColor: 'white', color: 'black' }}
          />
          {validationErrors[name] !== null && (
            <Typography
              id={`${name}-error-text`}
              variant='caption'
              sx={{ color: 'error.main' }}
            >
              {validationErrors[name]}
            </Typography>
          )}
        </FormControl>
      </Grid>
    ) : null;
  };

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: 'auto',
        p: 4,
        textAlign: 'center',
        borderRadius: 2,
        boxShadow: 3,
        color: textColor,
        position: 'relative',
      }}
      component='section'
      {...(sectionID && { id: sectionID })}
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
      {subtitle && (
        <Typography
          variant='body1'
          gutterBottom
          sx={{ position: 'relative', zIndex: 3, mb: 4, color: textColor }}
        >
          {subtitle}
        </Typography>
      )}
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, position: 'relative', zIndex: 3 }}
      >
        {inputFields.map(InputField)}
      </Grid>
      {categoriesTitle && categories.length > 0 && (
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
      {categories.length > 0 && (
        <FormCategories
          categories={categories}
          textColor={textColor}
          borderColor={borderColor}
          selectedCategory={formData.category}
          handleRadioChange={handleRadioChange}
        />
      )}
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
      <Button
        variant='contained'
        sx={{ width: { md: 'auto', xs: '100%' }, zIndex: 4 }}
        onClick={handleSubmit}
        color={theme === 'dark' ? 'negative' : 'primary'}
      >
        {buttonLabel}
      </Button>
      {submissionStatus === 'success' && (
        <Alert
          severity='success'
          sx={{
            maxWidth: 'fit-content',
            margin: '16px auto 0px auto',
            padding: '8px 16px',
            border: 'none',
            backgroundColor: '#e1f4e1',
            textAlign: 'center',
            fontWeight: 'bold',
            '& .MuiAlert-icon': {
              display: 'none',
            },
          }}
        >
          Grazie! La tua richiesta è stata registrata
        </Alert>
      )}
      {submissionStatus === 'failure' && (
        <Alert
          severity='error'
          sx={{
            maxWidth: 'fit-content',
            margin: '16px auto 0px auto',
            padding: '8px 16px',
            border: 'none',
            backgroundColor: '#ffd9d9',
            textAlign: 'center',
            fontWeight: 'bold',
            '& .MuiAlert-icon': {
              display: 'none',
            },
          }}
        >
          Purtroppo in questo momento non è possibile registrare la tua
          richiesta
        </Alert>
      )}
      {notes && (
        <Typography
          component='div'
          variant='body2'
          sx={{
            mt: 2,
            position: 'relative',
            zIndex: 3,
            color: graylinkColor,
            '& a': {
              color: graylinkColor,
              textDecoration: 'underline',
              '&:hover': {
                color: graylinkColor,
                textDecoration: 'underline',
              },
            },
          }}
        >
          {notes}
        </Typography>
      )}

      <RECAPTCHA
        size='invisible'
        ref={recaptchaRef}
        sitekey={recaptchaSiteKey}
      />
    </Box>
  );
};

export default Form;
