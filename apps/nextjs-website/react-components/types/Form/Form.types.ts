import { SectionProps } from '../common/Common.types';

interface FormFields {
  readonly showName: boolean;
  readonly showSurname: boolean;
  readonly showOrganization: boolean;
}

interface FormCategories {
  readonly categoriesTitle?: string;
  readonly defaultCategoryID: string;
  readonly categories: {
    categoryID: string;
    label: string;
    additionalInfo?: string;
  }[];
}

export interface FormProps extends SectionProps, FormFields, FormCategories {
  readonly title: string;
  readonly titleTag?: 'h1' | 'h2';
  readonly subtitle?: string;
  readonly clientID: 'io' | 'pagopa';
  readonly listID: string;
  readonly recaptchaSiteKey: string;
  readonly buttonLabel: string;
  readonly notes?: JSX.Element;
  readonly background?: {
    src: string;
    srcSet: string;
    sizes: string;
  };
  readonly placeholderName?: string;
  readonly placeholderSurname?: string;
  readonly placeholderEmail?: string;
  readonly placeholderOrganization?: string;
  readonly labels: {
    insertName: string;
    insertSurname: string;
    insertEmail: string;
    insertOrganization: string;
    insertValidEmail: string;
    name: string;
    surname: string;
    email: string;
    organization: string;
  };
}

export interface FormData {
  name?: string;
  surname?: string;
  email?: string;
  organization?: string;
}

export interface FormCategoryProps {
  categories: {
    categoryID: string;
    label: string;
    additionalInfo?: string;
  }[];
  selectedCategory: string;
  textColor: string;
  borderColor: string;
  handleRadioChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  categoryError?: string;
}
