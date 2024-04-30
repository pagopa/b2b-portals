import { type EIconProps } from '../../components/common/EIcon';
import { Generic } from '../common/Common.types';

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: string | Generic | Generic[];
  links: PreLoginFooterLinksType;
  showFundedByNextGenerationEULogo?: boolean;
}

type LinkType = 'internal' | 'external';

interface FooterLinksType {
  label: string;
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  linkType: LinkType;
  /** if defined it will override the href behavior */
  onClick?: () => void;
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
  id: string | number;
  value: string;
}

export interface LangSwitchProps {
  languages: Language[];
  onLanguageChanged: (lang: Language) => void;
  activeLanguage: Language;
}

export interface LegalInfoProps {
  data?: string | Generic | Generic[];
}
