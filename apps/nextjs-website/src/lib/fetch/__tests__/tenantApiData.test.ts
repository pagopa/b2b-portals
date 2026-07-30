import { describe, it, expect } from 'vitest';
import { extractTenantStrapiApiData, StrapiApiData } from '../tenantApiData';

const strapiApiData: Omit<StrapiApiData, 'ENVIRONMENT'> = {
  TENANTS_CONFIG: JSON.stringify({
    appio: {
      baseUrl: 'APPIO_STRAPI_API_BASE_URL',
      token: 'APPIO_STRAPI_API_TOKEN',
      feedbackToken: 'appioFeedbackToken',
    },
    demo: {
      baseUrl: 'DEMO_STRAPI_API_BASE_URL',
      token: 'DEMO_STRAPI_API_TOKEN',
      feedbackToken: 'demoFeedbackToken',
    },
    interop: {
      baseUrl: 'INTEROP_STRAPI_API_BASE_URL',
      token: 'INTEROP_STRAPI_API_TOKEN',
      feedbackToken: 'interopFeedbackToken',
    },
    pagopa: {
      baseUrl: 'pagopaStrapiToken',
      token: 'pagopaStrapiApiBaseUrl',
      feedbackToken: 'pagopaFeedbackToken',
    },
    send: {
      baseUrl: 'SEND_STRAPI_API_BASE_URL',
      token: 'SEND_STRAPI_API_TOKEN',
      feedbackToken: 'sendFeedbackToken',
    },
    wallet: {
      baseUrl: 'walletStrapiToken',
      token: 'walletStrapiApiBaseUrl',
      feedbackToken: 'walletFeedbackToken',
    },
  }),
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
      interop: extractTenantStrapiApiData({
        ENVIRONMENT: 'interop',
        ...strapiApiData,
      }),
      send: extractTenantStrapiApiData({
        ENVIRONMENT: 'send',
        ...strapiApiData,
      }),
      pagopa: extractTenantStrapiApiData({
        ENVIRONMENT: 'pagopa',
        ...strapiApiData,
      }),
      wallet: extractTenantStrapiApiData({
        ENVIRONMENT: 'wallet',
        ...strapiApiData,
      }),
    };

    expect(actual.appio).toStrictEqual({
      baseUrl: 'APPIO_STRAPI_API_BASE_URL',
      token: 'APPIO_STRAPI_API_TOKEN',
    });
    expect(actual.demo).toStrictEqual({
      baseUrl: 'DEMO_STRAPI_API_BASE_URL',
      token: 'DEMO_STRAPI_API_TOKEN',
    });
    expect(actual.interop).toStrictEqual({
      baseUrl: 'INTEROP_STRAPI_API_BASE_URL',
      token: 'INTEROP_STRAPI_API_TOKEN',
    });
    expect(actual.send).toStrictEqual({
      baseUrl: 'SEND_STRAPI_API_BASE_URL',
      token: 'SEND_STRAPI_API_TOKEN',
    });
    expect(actual.pagopa).toStrictEqual({
      baseUrl: 'pagopaStrapiToken',
      token: 'pagopaStrapiApiBaseUrl',
    });
  });
});
