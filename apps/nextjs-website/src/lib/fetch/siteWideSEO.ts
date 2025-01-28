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

const SiteWideSEOCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      metaImage: StrapiImageRequiredSchema,
      favicon: StrapiImageRequiredSchema,
      appleTouchIcon: StrapiImageRequiredSchema,
      manifest: t.strict({
        name: t.string,
        shortName: t.string,
      }),
      matomoID: t.union([t.string, t.null]),
      mixpanelToken: t.union([t.string, t.null]),
      themeVariant: ThemeVariantCodec,
      locales: t.strict({
        it: t.boolean,
        en: t.boolean,
        fr: t.boolean,
        de: t.boolean,
        sl: t.boolean,
      }),
      defaultLocale: LocaleCodec,
    }),
  }),
});

export type SiteWideSEO = t.TypeOf<typeof SiteWideSEOCodec>;
export type ThemeVariant = t.TypeOf<typeof ThemeVariantCodec>;
export type Locale = t.TypeOf<typeof LocaleCodec>;

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
&populate[3]=manifest
&populate[4]=locales
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
