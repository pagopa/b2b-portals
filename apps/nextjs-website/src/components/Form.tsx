'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { FormData } from '@react-components/types/Form/Form.types';

const makeFormProps = ({ privacyText, ...rest }: FormSection): FormProps => ({
  ...rest,
  privacyText: MarkdownRenderer({ markdown: privacyText, variant: 'body2' }),
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
