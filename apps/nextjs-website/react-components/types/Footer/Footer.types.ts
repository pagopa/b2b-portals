import { type EIconProps } from '../../components/common/EIcon';
import { Generic } from '../common/Common.types';

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: string | Generic | Generic[];
  links: PreLoginFooterLinksType;
  showFundedByNextGenerationEULogo?: boolean;
}

interface FooterLinksType {
  label: string;
  href?: string;
  ariaLabel: string;
}

interface PreLoginFooterSingleSectionType {
  title?: string;
  links: FooterLinksType[];
}

interface PreLoginFooterLinksType {
  services: PreLoginFooterSingleSectionType;
  aboutUs: PreLoginFooterSingleSectionType;
  resources: PreLoginFooterSingleSectionType;
  followUs: {
    title: string;
    socialLinks: EIconProps[];
    links: FooterLinksType[];
  };
}

interface CompanyLinkType {
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  /** if defined it will override the href behavior */
  onClick?: () => void;
}

export interface FooterColumnProps {
  data: PreLoginFooterSingleSectionType;
  companyLink?: CompanyLinkType;
  icons?: EIconProps[];
}

interface Language {
  id: 'it' | 'en';
  value: string;
  href: string;
}

export interface LangSwitchProps {
  languages: Language[];
  activeLanguage: Language;
}

export interface LegalInfoProps {
  data?: string | Generic | Generic[];
}
