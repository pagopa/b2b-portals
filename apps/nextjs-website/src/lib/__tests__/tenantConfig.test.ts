import { describe, expect, it } from 'vitest';
import { getTenantStrapiConfig, TenantConfigEnv } from '../tenantConfig';

const tenantConfigEnv: TenantConfigEnv = {
  TENANTS_CONFIG: JSON.stringify({
    appio: {
      baseUrl: 'APPIO_STRAPI_API_BASE_URL',
      token: 'APPIO_STRAPI_API_TOKEN',
      feedbackToken: 'APPIO_STRAPI_FEEDBACK_TOKEN',
    },
    demo: {
      baseUrl: 'DEMO_STRAPI_API_BASE_URL',
      token: 'DEMO_STRAPI_API_TOKEN',
      feedbackToken: 'DEMO_STRAPI_FEEDBACK_TOKEN',
    },
    interop: {
      baseUrl: 'INTEROP_STRAPI_API_BASE_URL',
      token: 'INTEROP_STRAPI_API_TOKEN',
      feedbackToken: 'INTEROP_STRAPI_FEEDBACK_TOKEN',
    },
    pagopa: {
      baseUrl: 'PAGOPA_STRAPI_API_BASE_URL',
      token: 'PAGOPA_STRAPI_API_TOKEN',
      feedbackToken: 'PAGOPA_STRAPI_FEEDBACK_TOKEN',
    },
    send: {
      baseUrl: 'SEND_STRAPI_API_BASE_URL',
      token: 'SEND_STRAPI_API_TOKEN',
      feedbackToken: 'SEND_STRAPI_FEEDBACK_TOKEN',
    },
    wallet: {
      baseUrl: 'WALLET_STRAPI_API_BASE_URL',
      token: 'WALLET_STRAPI_API_TOKEN',
      feedbackToken: 'WALLET_STRAPI_FEEDBACK_TOKEN',
    },
  }),
  ENVIRONMENT: 'demo',
};

const tenants = ['appio', 'demo', 'interop', 'pagopa', 'send', 'wallet'];

describe('getTenantStrapiConfig', () => {
  it('should return Strapi config for the selected tenant', () => {
    tenants.forEach((tenant) => {
      expect(getTenantStrapiConfig(tenantConfigEnv, tenant)).toStrictEqual({
        baseUrl: `${tenant.toUpperCase()}_STRAPI_API_BASE_URL`,
        token: `${tenant.toUpperCase()}_STRAPI_API_TOKEN`,
        feedbackToken: `${tenant.toUpperCase()}_STRAPI_FEEDBACK_TOKEN`,
      });
    });
  });

  it('should use ENVIRONMENT when tenant is not passed explicitly', () => {
    expect(getTenantStrapiConfig(tenantConfigEnv)).toStrictEqual({
      baseUrl: 'DEMO_STRAPI_API_BASE_URL',
      token: 'DEMO_STRAPI_API_TOKEN',
      feedbackToken: 'DEMO_STRAPI_FEEDBACK_TOKEN',
    });
  });

  it('should throw when tenant is not configured', () => {
    expect(() =>
      getTenantStrapiConfig(tenantConfigEnv, 'missing-tenant'),
    ).toThrow('Missing or invalid Strapi config for tenant "missing-tenant"');
  });

  it('should throw when TENANTS_CONFIG is invalid JSON', () => {
    expect(() =>
      getTenantStrapiConfig({
        ...tenantConfigEnv,
        TENANTS_CONFIG: 'not-json',
      }),
    ).toThrow('Invalid TENANTS_CONFIG');
  });
});
