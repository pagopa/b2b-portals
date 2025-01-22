import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { StrapiImageRequiredSchema } from './types/StrapiImage';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

// TODO: Update all API calls to adapt to Strapi V5

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
      }),
    }),
  }),
});

export type SiteWideSEO = t.TypeOf<typeof SiteWideSEOCodec>;
export type ThemeVariant = t.TypeOf<typeof ThemeVariantCodec>;

export interface SiteWidePageData {
  readonly themeVariant: ThemeVariant;
  readonly locale: 'it' | 'en';
  readonly defaultLocale: 'it' | 'en';
}

export const fetchSiteWideSEO = ({
  config,
  fetchFun,
}: AppEnv): Promise<SiteWideSEO> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/general?populate=metaImage,favicon,appleTouchIcon,manifest,locales`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      }
    ),
    SiteWideSEOCodec
  );
