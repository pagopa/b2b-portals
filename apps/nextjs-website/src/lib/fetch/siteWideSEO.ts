import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { StrapiImageRequiredSchema } from './types/StrapiImage';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

export const LocaleCodec = t.keyof({
  it: null,
  en: null,
  de: null,
  fr: null,
  sl: null,
});

export const ThemeVariantCodec = t.keyof({
  IO: null,
  SEND: null,
});

const MixpanelCodec = t.strict({
  token: t.string,
  apiHost: t.union([t.string, t.null]),
  cookieDomain: t.union([t.string, t.null]),
  debug: t.boolean,
  ip: t.boolean,
});

const AnalyticsCodec = t.strict({
  oneTrustDomainID: t.string,
  mixpanel: t.union([MixpanelCodec, t.null]),
  matomoID: t.union([t.string, t.null]),
});

const SiteWideSEOCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      metaImage: StrapiImageRequiredSchema,
      favicon: StrapiImageRequiredSchema,
      appleTouchIcon: StrapiImageRequiredSchema,
      themeVariant: ThemeVariantCodec,
      locales: t.strict({
        it: t.boolean,
        en: t.boolean,
        fr: t.boolean,
        de: t.boolean,
        sl: t.boolean,
      }),
      analytics: t.union([AnalyticsCodec, t.null]),
      defaultLocale: LocaleCodec,
    }),
  }),
});

export type SiteWideSEO = t.TypeOf<typeof SiteWideSEOCodec>;
export type ThemeVariant = t.TypeOf<typeof ThemeVariantCodec>;
export type Locale = t.TypeOf<typeof LocaleCodec>;
export type Analytics = t.TypeOf<typeof AnalyticsCodec>;
export type MixpanelConfig = t.TypeOf<typeof MixpanelCodec>;

export interface SiteWidePageData {
  readonly themeVariant: ThemeVariant;
  readonly locale: Locale;
  readonly defaultLocale: Locale;
}

export const fetchSiteWideSEO = ({
  config,
  fetchFun,
}: AppEnv): Promise<SiteWideSEO> =>
  extractFromResponse(
    fetchFun(
      `${extractTenantStrapiApiData(config).baseUrl}/api/general
?populate[0]=metaImage
&populate[1]=favicon
&populate[2]=appleTouchIcon
&populate[3]=locales
&populate[4]=analytics.mixpanel
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    ),
    SiteWideSEOCodec,
  );
