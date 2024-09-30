'use client';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';

const makeFormProps = ({
  subtitle,
  categories,
  categoriesTitle,
  buttonLabel,
  ...rest
}: FormSection): FormProps => ({
  categories: categories.map(({ additionalInfo, ...category }) => ({
    ...(additionalInfo && { additionalInfo }),
    ...category,
  })),
  ...(subtitle && { subtitle }),
  ...(categoriesTitle && { categoriesTitle }),
  buttonLabel,
  ...rest,
});

const Form = (props: FormSection) => <FormRC {...makeFormProps(props)} />;

export default Form;
