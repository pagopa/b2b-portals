import { CommonProps } from '../common/Common.types';

export interface FormProps extends CommonProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly privacyLinkRecaptchaPolicy: string;
  readonly privacyLinkTextRecaptchaPolicy: string;
  readonly privacyLinkRecaptchaTerms: string;
  readonly privacyLinkTextRecaptchaTerms: string;
  readonly theme: 'light' | 'dark';
  readonly formCategories: {
    label: string;
    additionalLabel?: string;
  }[];
  readonly buttonText: string;
  readonly submitURL: string;
}

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  organization?: string;
}

export interface OptionRowProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  additionalText?: string;
  color: string;
}

export interface FormCategoryProps {
  formCategories: {
    key: string;
    label: string;
    additionalLabel?: string;
  }[];
  textColor: string;
  borderColor: string;
}
