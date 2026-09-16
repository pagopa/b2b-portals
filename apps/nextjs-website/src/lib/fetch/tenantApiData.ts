import { Config } from '@/AppEnv';
import { getTenantStrapiConfig } from '../tenantConfig';

export type StrapiApiData = Omit<
  Config,
  'PREVIEW_MODE' | 'PREVIEW_TOKEN' | 'MOCK_BUILD'
>;
type TenantStrapiApiData = {
  readonly baseUrl: string;
  readonly token: string;
};

export const extractTenantStrapiApiData = (
  strapiData: StrapiApiData,
): TenantStrapiApiData => {
  const { baseUrl, token } = getTenantStrapiConfig(strapiData);

  return { baseUrl, token };
};
