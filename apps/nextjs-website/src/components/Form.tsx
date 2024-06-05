'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';

const makeFormProps = ({
  privacyText,
  privacyLink,
  buttonText,
  privacyLinkText,
  ...rest
}: FormSection): FormProps => ({
  ...rest,
  privacyText: MarkdownRenderer({ markdown: privacyText, variant: 'body2' }),
  privacyLink,
  buttonText,
  privacyLinkText,
});

const Form = (props: FormSection) => <FormRC {...makeFormProps(props)} />;

export default Form;
