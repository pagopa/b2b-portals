'use client';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { FormData } from '@react-components/types/Form/Form.types';

const makeFormProps = ({
  title,
  subtitle,
  privacyLinkRecaptchaPolicy,
  privacyLinkTextRecaptchaPolicy,
  privacyLinkRecaptchaTerms,
  privacyLinkTextRecaptchaTerms,
  formCategories,
  theme,
  ctaButtons,
  ...rest
}: FormSection): FormProps => ({
  title,
  subtitle,
  privacyLinkRecaptchaPolicy,
  privacyLinkTextRecaptchaPolicy,
  privacyLinkRecaptchaTerms,
  privacyLinkTextRecaptchaTerms,
  formCategories: formCategories.map(({ label, additionalLabel }) => ({
    label,
    additionalLabel: additionalLabel ?? '',
  })),
  theme,
  ctaButtons: ctaButtons.map(({ ...ctaBtn }) => ({
    ...ctaBtn,
  })),
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
