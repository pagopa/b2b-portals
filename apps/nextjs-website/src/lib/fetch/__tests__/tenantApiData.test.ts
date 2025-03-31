import { describe, it, expect } from 'vitest';
import { extractTenantStrapiApiData, StrapiApiData } from '../tenantApiData';

const strapiApiData: Omit<StrapiApiData, 'ENVIRONMENT'> = {
  APPIO_STRAPI_API_BASE_URL: 'APPIO_STRAPI_API_BASE_URL',
  APPIO_STRAPI_API_TOKEN: 'APPIO_STRAPI_API_TOKEN',
  DEMO_STRAPI_API_BASE_URL: 'DEMO_STRAPI_API_BASE_URL',
  DEMO_STRAPI_API_TOKEN: 'DEMO_STRAPI_API_TOKEN',
  FIRMA_STRAPI_API_BASE_URL: 'FIRMA_STRAPI_API_BASE_URL',
  FIRMA_STRAPI_API_TOKEN: 'FIRMA_STRAPI_API_TOKEN',
  INTEROP_STRAPI_API_BASE_URL: 'INTEROP_STRAPI_API_BASE_URL',
  INTEROP_STRAPI_API_TOKEN: 'INTEROP_STRAPI_API_TOKEN',
  SEND_STRAPI_API_BASE_URL: 'SEND_STRAPI_API_BASE_URL',
  SEND_STRAPI_API_TOKEN: 'SEND_STRAPI_API_TOKEN',
};

describe('extractTenantStrapiApiData', () => {
  it("should return the appropriate tenant's data", () => {
    const actual = {
      appio: extractTenantStrapiApiData({
        ENVIRONMENT: 'appio',
        ...strapiApiData,
      }),
      demo: extractTenantStrapiApiData({
        ENVIRONMENT: 'demo',
        ...strapiApiData,
      }),
      firma: extractTenantStrapiApiData({
        ENVIRONMENT: 'firma',
        ...strapiApiData,
      }),
      interop: extractTenantStrapiApiData({
        ENVIRONMENT: 'interop',
        ...strapiApiData,
      }),
      send: extractTenantStrapiApiData({
        ENVIRONMENT: 'send',
        ...strapiApiData,
      }),
    };

    expect(actual.appio).toStrictEqual({
      baseUrl: strapiApiData.APPIO_STRAPI_API_BASE_URL,
      token: strapiApiData.APPIO_STRAPI_API_TOKEN,
    });
    expect(actual.demo).toStrictEqual({
      baseUrl: strapiApiData.DEMO_STRAPI_API_BASE_URL,
      token: strapiApiData.DEMO_STRAPI_API_TOKEN,
    });
    expect(actual.firma).toStrictEqual({
      baseUrl: strapiApiData.FIRMA_STRAPI_API_BASE_URL,
      token: strapiApiData.FIRMA_STRAPI_API_TOKEN,
    });
    expect(actual.interop).toStrictEqual({
      baseUrl: strapiApiData.INTEROP_STRAPI_API_BASE_URL,
      token: strapiApiData.INTEROP_STRAPI_API_TOKEN,
    });
    expect(actual.send).toStrictEqual({
      baseUrl: strapiApiData.SEND_STRAPI_API_BASE_URL,
      token: strapiApiData.SEND_STRAPI_API_TOKEN,
    });
  });
});
