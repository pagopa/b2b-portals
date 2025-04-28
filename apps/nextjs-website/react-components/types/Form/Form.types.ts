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
  readonly subtitle?: string;
  readonly clientID: 'io' | 'pagopa';
  readonly listID: string;
  readonly recaptchaSiteKey: string;
  readonly buttonLabel: string;
  readonly notes?: JSX.Element;
  readonly background?: {
    src: string;
    srcSet: string;
  };
  readonly labelName?: string;
  readonly labelSurname?: string;
  readonly labelEmail?: string;
  readonly labelOrganization?: string;
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
}
