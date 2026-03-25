import React, { useRef, useState } from 'react';
import RECAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Grid,
  Typography,
  Button,
  Alert,
  useTheme,
  TextField,
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
  category?: string;
}

interface InputFieldData {
  name: 'name' | 'surname' | 'email' | 'organization';
  placeholder: string;
  show: boolean;
}

const Form = ({
  title,
  titleTag,
  subtitle,
  theme,
  themeVariant,
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
  background,
  placeholderName,
  placeholderSurname,
  placeholderEmail,
  placeholderOrganization,
}: FormProps) => {
  const textColor = TextColor(theme);
  const graylinkColor = GrayLinkColor(theme);
  const borderColor = theme === 'light' ? graylinkColor : 'white';
  const recaptchaRef = useRef<RECAPTCHA>(null);
  const { palette } = useTheme();

  const requiredMessages: Record<InputFieldData['name'], string> = {
    name: 'Inserisci il nome',
    surname: 'Inserisci il cognome',
    email: 'Inserisci l’indirizzo email',
    organization: 'Inserisci il nome dell’ente',
  };

  const invalidMessages: Record<'email', string> = {
    email: 'Inserisci un indirizzo email valido',
  };

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
    const { category, ...restErrors } = validationErrors;
    setValidationErrors(restErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const inputErrors = {
      name:
        showName && !validateRequired(formData.name)
          ? requiredMessages.name
          : null,
      surname:
        showSurname && !validateRequired(formData.surname)
          ? requiredMessages.surname
          : null,
      organization:
        showOrganization && !validateRequired(formData.organization)
          ? requiredMessages.organization
          : null,
      email: !validateRequired(formData.email)
        ? requiredMessages.email
        : !validateEmail(formData.email)
          ? invalidMessages.email
          : null,
    };

    const categoryError =
      categories.length > 0 && formData.category === ''
        ? 'Seleziona una categoria dalla lista per cui vuoi ricevere aggiornamenti'
        : undefined;

    setValidationErrors({
      ...inputErrors,
      ...(categoryError ? { category: categoryError } : {}),
    });

    if (
      inputErrors.name ||
      inputErrors.surname ||
      inputErrors.organization ||
      inputErrors.email ||
      categoryError
    ) {
      alert('Si prega di compilare tutti i campi richiesti');
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
            // Optional fields must be all present or all absent (default values are inconsequential)
            ...((showName || showSurname || showOrganization) && {
              name: showName ? formData.name : 'none',
              surname: showSurname ? formData.surname : 'none',
              organization: showOrganization ? formData.organization : 'none',
            }),
          }),
        },
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
        setValidationErrors({
          name: null,
          surname: null,
          email: null,
          organization: null,
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

    if (!validateRequired(value)) {
      setValidationErrors({
        ...validationErrors,
        [name]: requiredMessages[name as InputFieldData['name']],
      });
      return;
    }

    if (name === 'email' && !validateEmail(value)) {
      setValidationErrors({
        ...validationErrors,
        [name]: invalidMessages.email,
      });
      return;
    }

    setValidationErrors({ ...validationErrors, [name]: null });
  };

  const inputFields: InputFieldData[] = [
    {
      name: 'name',
      placeholder: `${placeholderName ?? 'Nome'}*`,
      show: showName,
    },
    {
      name: 'surname',
      placeholder: `${placeholderSurname ?? 'Cognome'}*`,
      show: showSurname,
    },
    {
      name: 'email',
      placeholder: `${placeholderEmail ?? 'Indirizzo e-mail'}*`,
      show: true,
    },
    {
      name: 'organization',
      placeholder: `${placeholderOrganization ?? 'Nome ente'}*`,
      show: showOrganization,
    },
  ];

  const autocompleteMap: Record<InputFieldData['name'], string> = {
    name: 'given-name',
    surname: 'family-name',
    email: 'email',
    organization: 'organization',
  };

  const InputField = ({ name, placeholder, show }: InputFieldData) => {
    return show ? (
      <Grid item xs={12} sm={name === 'name' || name === 'surname' ? 6 : 12}>
        <TextField
          fullWidth
          variant='outlined'
          name={name}
          id={name}
          label={placeholder}
          placeholder={placeholder}
          value={formData[name]}
          onChange={handleInputChange}
          autoComplete={autocompleteMap[name]}
          error={validationErrors[name] !== null}
          FormHelperTextProps={{
            id: `${name}-error-text`,
          }}
          inputProps={{
            'aria-invalid': validationErrors[name] !== null ? 'true' : 'false',
            'aria-errormessage':
              validationErrors[name] !== null
                ? `${name}-error-text`
                : undefined,
            'aria-describedby':
              validationErrors[name] !== null
                ? `${name}-error-text`
                : undefined,
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'white',
              color: 'black',
            },
            '& .MuiInputLabel-root': {
              color: '#949494',
            },
            '& .MuiInputLabel-root.Mui-error': {
              color: '#949494',
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: 'transparent',
              opacity: 1,
            },
          }}
        />

        {validationErrors[name] !== null && (
          <Typography
            id={`${name}-error-text`}
            variant='caption'
            sx={{ color: 'error.main', display: 'block', mt: '0px' }}
          >
            {validationErrors[name]}
          </Typography>
        )}
      </Grid>
    ) : null;
  };

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
      }}
    >
      {background && (
        <img
          src={background.src}
          srcSet={background.srcSet}
          sizes={background.sizes}
          width={0}
          height={0}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            zIndex: -10,
          }}
        />
      )}
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
          component={titleTag ?? 'h2'}
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
            {...(validationErrors.category
              ? { categoryError: validationErrors.category }
              : {})}
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
          I campi contrassegnati con * sono obbligatori
        </Typography>
        <Button
          variant='contained'
          sx={{
            width: { md: 'auto', xs: '100%' },
            zIndex: 4,
            backgroundColor:
              theme === 'dark'
                ? palette.custom.white
                : themeVariant === 'SEND'
                  ? palette.primary.main
                  : palette.custom.blueIO[500],
            color:
              theme === 'dark'
                ? themeVariant === 'SEND'
                  ? palette.primary.main
                  : palette.custom.blueIO[500]
                : palette.custom.white,
            '&:hover': {
              backgroundColor:
                theme === 'dark'
                  ? palette.custom.white
                  : themeVariant === 'SEND'
                    ? palette.primary.main
                    : palette.custom.blueIO[500],
            },
          }}
          onClick={handleSubmit}
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
    </Box>
  );
};

export default Form;
