'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { Form as FormRC } from '@react-components/components';
import { FormProps } from '@react-components/types';
import { FormSection } from '@/lib/fetch/types/PageSection';
import { makeSrcSetFromStrapiImageData } from '@/lib/image';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeFormProps = ({
  locale,
  defaultLocale,
  subtitle,
  categories,
  categoriesTitle,
  buttonLabel,
  notes,
  background,
  labelName,
  labelSurname,
  labelEmail,
  labelOrganization,
  ...rest
}: FormSection & SiteWidePageData): FormProps => ({
  categories: categories.map(({ additionalInfo, ...category }) => ({
    ...(additionalInfo && { additionalInfo }),
    ...category,
  })),
  ...(subtitle && { subtitle }),
  ...(categoriesTitle && { categoriesTitle }),
  buttonLabel,
  ...(notes && {
    notes: MarkdownRenderer({ markdown: notes, locale, defaultLocale }),
  }),
  ...(background && {
    background: {
      src: background.url,
      srcSet: makeSrcSetFromStrapiImageData(background),
    },
  }),
  ...(labelName && { labelName }),
  ...(labelSurname && { labelSurname }),
  ...(labelEmail && { labelEmail }),
  ...(labelOrganization && { labelOrganization }),
  ...rest,
});

const Form = (props: FormSection & SiteWidePageData) => (
  <FormRC {...makeFormProps(props)} />
);

export default Form;
