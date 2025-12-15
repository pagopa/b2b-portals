import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

const OneTrustTokenCodec = t.strict({
  data: t.strict({
    oneTrustToken: t.union([t.string, t.null]),
  }),
});

export const fetchOneTrustToken = ({ config, fetchFun }: AppEnv) =>
  extractFromResponse(
    fetchFun(
      `${extractTenantStrapiApiData(config).baseUrl}/api/general?fields[0]=oneTrustToken`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      },
    ),
    OneTrustTokenCodec,
  );
