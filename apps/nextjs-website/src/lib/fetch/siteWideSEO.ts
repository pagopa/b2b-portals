import * as t from 'io-ts';
import { tenantStrapiApiBaseUrl, tenantStrapiApiToken } from '../api';
import { extractFromResponse } from './extractFromResponse';
import { StrapiImageRequiredSchema } from './types/StrapiImage';
import { AppEnv } from '@/AppEnv';

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
    }),
  }),
});

export type SiteWideSEO = t.TypeOf<typeof SiteWideSEOCodec>;

export const fetchSiteWideSEO = ({
  config,
  fetchFun,
}: AppEnv): Promise<SiteWideSEO> =>
  extractFromResponse(
    fetchFun(
      `${
        tenantStrapiApiBaseUrl[config.ENVIRONMENT]
      }/api/general?populate=metaImage,favicon,appleTouchIcon,manifest`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tenantStrapiApiToken[config.ENVIRONMENT]}`,
        },
      }
    ),
    SiteWideSEOCodec
  );
