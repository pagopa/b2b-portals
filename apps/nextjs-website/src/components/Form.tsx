'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';

const makeFormProps = ({
  subtitle,
  categories,
  categoriesTitle,
  buttonLabel,
  notes,
  background,
  ...rest
}: FormSection & { themeVariant: ThemeVariant }): FormProps => ({
  categories: categories.map(({ additionalInfo, ...category }) => ({
    ...(additionalInfo && { additionalInfo }),
    ...category,
  })),
  ...(subtitle && { subtitle }),
  ...(categoriesTitle && { categoriesTitle }),
  buttonLabel,
  ...(notes && { notes: MarkdownRenderer({ markdown: notes }) }),
  ...(background.data && {
    background: {
      src: background.data.attributes.url,
      srcSet: makeSrcSetFromStrapiImageData(background.data),
    },
  }),
  ...rest,
});

const Form = (props: FormSection & { themeVariant: ThemeVariant }) => (
  <FormRC {...makeFormProps(props)} />
);

export default Form;
