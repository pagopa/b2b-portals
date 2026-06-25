import {
  CompanyLinkType,
  FooterLinksType,
  LangSwitchProps,
  PreLoginFooterLinksType,
} from '@pagopa/mui-italia';

export type FooterProps = LangSwitchProps & {
  loggedUser: boolean;
  companyLink: CompanyLinkType;
  postLoginLinks: Array<FooterLinksType>;
  preLoginLinks: PreLoginFooterLinksType;
  legalInfo: JSX.Element | Array<JSX.Element>;
  onExit?: (exitAction: () => void) => void;
  productsJsonUrl?: string;
  productsTitle?: string;
  onProductsJsonFetchError?: (reason: any) => void;
  hideProductsColumn?: boolean;
};
