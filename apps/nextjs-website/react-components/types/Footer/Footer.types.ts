import * as t from 'io-ts';
import { type EIconProps } from '../../components/common/EIcon';
import { Generic } from '../common/Common.types';

export interface FooterProps extends LangSwitchProps {
  companyLink: CompanyLinkType;
  legalInfo: string | Generic | Generic[];
  links: PreLoginFooterLinksType;
  showFundedByNextGenerationEULogo?: boolean;
}

export type LinkType = 'internal' | 'external';

export interface FooterLinksType {
  label: string;
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  linkType: LinkType;
  /** if defined it will override the href behavior */
  onClick?: () => void;
}

export interface PreLoginFooterSingleSectionType {
  title?: string;
  links: FooterLinksType[];
}

export interface PreLoginFooterLinksType {
  services: PreLoginFooterSingleSectionType;
  aboutUs: PreLoginFooterSingleSectionType;
  resources: PreLoginFooterSingleSectionType;
  followUs: {
    title: string;
    socialLinks: EIconProps[];
    links: FooterLinksType[];
  };
}

export interface CompanyLinkType {
  /** the url to witch the user will be redirect */
  href?: string;
  ariaLabel: string;
  /** if defined it will override the href behavior */
  onClick?: () => void;
}

export class EnumType<A> extends t.Type<A> {
  public readonly _tag = 'EnumType' as const;
  public enumObject!: object;
  public constructor(e: object, name?: string) {
    super(
      name ?? 'enum',
      (u): u is A =>
        Object.values(this.enumObject).includes(u) &&
        typeof (this.enumObject as any)[u as string] !== 'number',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity
    );
    this.enumObject = e;
  }
}
export function createEnumType<T>(e: object, name?: string) {
  return new EnumType<T>(e, name);
}

export interface FooterColumnProps {
  data: PreLoginFooterSingleSectionType;
  companyLink?: CompanyLinkType;
  icons?: EIconProps[];
}

export interface Language {
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

enum LinkTypes {
  internal = 'internal',
  external = 'external',
}

export const ProductType = t.type({
  label: t.string,
  href: t.string,
  ariaLabel: t.string,
  linkType: createEnumType<LinkType>(LinkTypes, 'LinkTypeIoTs'),
});
