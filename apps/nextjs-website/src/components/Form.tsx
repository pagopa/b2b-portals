'use client';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { FormData } from '@react-components/types/Form/Form.types';

const makeFormProps = ({
  subtitle,
  categories,
  recaptchaPolicyLink,
  recaptchaTermsLink,
  ...rest
}: FormSection): FormProps => ({
  formCategories: categories.map(({ label, additionalLabel }) => ({
    label,
    ...( additionalLabel && { additionalLabel }),
  })),
  ...(subtitle && { subtitle }),
  privacyLinkRecaptchaPolicy: recaptchaPolicyLink.href,
  privacyLinkTextRecaptchaPolicy: recaptchaPolicyLink.label,
  privacyLinkRecaptchaTerms: recaptchaTermsLink.href,
  privacyLinkTextRecaptchaTerms: recaptchaTermsLink.label,
  ...rest,
});

const Form = (props: FormSection) => {
  // added for lint purposes, should be managed in another way when strapi is ready
  const handleSubmit = (data: FormData) => {
    alert(data);
    return true;
  };

  return <FormRC {...makeFormProps(props)} onSubmit={handleSubmit} />;
};

export default Form;
