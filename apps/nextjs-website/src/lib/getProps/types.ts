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
  getFooterProps(locale: Locale): Promise<FooterData['data']>;
  getHeaderProps(
    locale: Locale,
    defaultLocale: Locale,
  ): Promise<
    HeaderData['data']['header'][0] & {
      readonly exclude: HeaderData['data']['exclude'];
    }
  >;
  getAllPages(locale: Locale): Promise<ReadonlyArray<PageData>>;
  getPageProps(
    locale: Locale,
    slugString: string | undefined,
  ): Promise<PageData | undefined>;
  getPreFooterProps(locale: Locale): Promise<PreFooterAttributes | null>;
  getPreHeaderProps(locale: Locale): Promise<PreHeaderAttributes | null>;
  getPressReleasePages(
    locale: Locale,
  ): Promise<ReadonlyArray<PressReleasePage>>;
  getAllPageIDs(
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ): Promise<PageIDs['data']>;
  getAllPageSwitchPageIDs(
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ): Promise<PageIDs['data']>;
  getAllPressReleaseIDs(
    tenant: Config['ENVIRONMENT'],
    locale: Locale,
  ): Promise<PageIDs['data']>;
  getPageDataFromID(
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ): Promise<PreviewPageData['data']>;
  getPageSwitchPageDataFromID(
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ): Promise<PreviewPageData['data']>;
  getPressReleaseDataFromID(
    tenant: Config['ENVIRONMENT'],
    documentID: string,
    locale: Locale,
  ): Promise<PreviewPageData['data']>;
  getSiteWideSEO(
    tenant?: AppEnv['config']['ENVIRONMENT'],
  ): Promise<SiteWideSEO['data']>;
}
