import { Locale, SiteWideSEO } from '../fetch/siteWideSEO';
import { FooterData } from '../fetch/footer';
import { HeaderData } from '../fetch/header';
import { PageData } from '../navigation';
import { PreFooterAttributes } from '../fetch/preFooter';
import { PreHeaderAttributes } from '../fetch/preHeader';
import { PressReleasePage } from '../fetch/pressRelease';
import { PageIDs, PreviewPageData } from '../fetch/preview';
import { AppEnv, Config } from '@/AppEnv';

export interface Getters {
  readonly getFooterProps: (locale: Locale) => Promise<FooterData['data']>;
  readonly getHeaderProps: (
    locale: Locale,
    defaultLocale: Locale,
  ) => Promise<
    HeaderData['data']['header'][0] & {
      readonly exclude: HeaderData['data']['exclude'];
    }
  >;
  readonly getAllPages: (locale: Locale) => Promise<ReadonlyArray<PageData>>;
  readonly getPageProps: (
    locale: Locale,
    slugString: string | undefined,
  ) => Promise<PageData | undefined>;
  readonly getPreFooterProps: (
    locale: Locale,
  ) => Promise<PreFooterAttributes | null>;
  readonly getPreHeaderProps: (
    locale: Locale,
  ) => Promise<PreHeaderAttributes | null>;
  readonly getPressReleasePages: (
    locale: Locale,
  ) => Promise<ReadonlyArray<PressReleasePage>>;
  readonly getAllPageIDs: (
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ) => Promise<PageIDs['data']>;
  readonly getAllPageSwitchPageIDs: (
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ) => Promise<PageIDs['data']>;
  readonly getAllPressReleaseIDs: (
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ) => Promise<PageIDs['data']>;
  readonly getPageDataFromID: (
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ) => Promise<PreviewPageData['data']>;
  readonly getPageSwitchPageDataFromID: (
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ) => Promise<PreviewPageData['data']>;
  readonly getPressReleaseDataFromID: (
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ) => Promise<PreviewPageData['data']>;
  readonly getSiteWideSEO: (
    tenant?: AppEnv['config']['ENVIRONMENT'],
  ) => Promise<SiteWideSEO['data']>;
}
