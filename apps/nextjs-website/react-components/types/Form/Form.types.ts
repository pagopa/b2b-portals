import { CtaButtonProps, type CommonProps } from '../common/Common.types';

export interface FormProps extends CommonProps {
  readonly title: string;
  readonly subtitle: string;
  readonly privacyLinkRecaptchaPolicy: string;
  readonly privacyLinkTextRecaptchaPolicy: string;
  readonly privacyLinkRecaptchaTerms: string;
  readonly privacyLinkTextRecaptchaTerms: string;
  readonly theme: 'light' | 'dark';
  readonly backgroundImage?: string;
  readonly ctaButtons: ReadonlyArray<CtaButtonProps>;
  readonly showFirstName?: boolean;
  readonly showLastName?: boolean;
  readonly showEmail?: boolean;
  readonly showOrganization?: boolean;
  readonly showCitizen?: boolean;
  readonly showPublicEmployee?: boolean;
  readonly showTechPartner?: boolean;
  readonly showDeveloper?: boolean;
  readonly showJournalist?: boolean;
  readonly checkboxTitle?: string;
  readonly showCheckboxInfo?: boolean;
  readonly showPrivacyDisclaimer?: boolean;
  readonly privacyDisclaimerText?: string;
}



export interface FormData {
  firstName?: string;
  lastName?: string;
  email: string;
  organization?: string;
  citizen: boolean;
  publicEmployee: boolean;
  techPartner: boolean;
  developer: boolean;
  journalist: boolean;
}
