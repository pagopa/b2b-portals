import { Config } from '@/AppEnv';

type StrapiApiData = Omit<Config, 'PREVIEW_MODE' | 'PREVIEW_TOKEN'>;
type TenantStrapiApiData = {
  readonly baseUrl: string;
  readonly token: string;
};

export const extractTenantStrapiApiData = (
  strapiData: StrapiApiData,
): TenantStrapiApiData => {
  switch (strapiData.ENVIRONMENT) {
    case 'demo':
      return {
        baseUrl: strapiData.DEMO_STRAPI_API_BASE_URL,
        token: strapiData.DEMO_STRAPI_API_TOKEN,
      };
    case 'send':
      return {
        baseUrl: strapiData.SEND_STRAPI_API_BASE_URL,
        token: strapiData.SEND_STRAPI_API_TOKEN,
      };
    case 'appio':
      return {
        baseUrl: strapiData.APPIO_STRAPI_API_BASE_URL,
        token: strapiData.APPIO_STRAPI_API_TOKEN,
      };
    case 'firma':
      return {
        baseUrl: strapiData.FIRMA_STRAPI_API_BASE_URL,
        token: strapiData.FIRMA_STRAPI_API_TOKEN,
      };
    case 'interop':
      return {
        baseUrl: strapiData.INTEROP_STRAPI_API_BASE_URL,
        token: strapiData.INTEROP_STRAPI_API_TOKEN,
      };
  }
};
