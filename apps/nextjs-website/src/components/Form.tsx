'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';

const makeFormProps = ({
  title,
  subtitle,
  privacyText,
  privacyLink,
  privacyLinkText,
  theme,
  ctaButtons,
  ...rest
}: FormSection): FormProps => ({
  ...rest,
  title,
  subtitle,
  privacyText: MarkdownRenderer({ markdown: privacyText, variant: 'body2' }),
  privacyLink,
  privacyLinkText,
  theme,
  ctaButtons,
});

const Form = (props: FormSection) => <FormRC {...makeFormProps(props)} />;

export default Form;
