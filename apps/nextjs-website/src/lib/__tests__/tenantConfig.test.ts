import { Config } from '@/AppEnv';
import { describe, expect, it } from 'vitest';
import { getTenantStrapiConfig, TenantConfigEnv } from '../tenantConfig';

const tenantConfigEnv: TenantConfigEnv = {
  APPIO_STRAPI_API_BASE_URL: 'APPIO_STRAPI_API_BASE_URL',
  APPIO_STRAPI_API_TOKEN: 'APPIO_STRAPI_API_TOKEN',
  APPIO_STRAPI_FEEDBACK_TOKEN: 'APPIO_STRAPI_FEEDBACK_TOKEN',
  DEMO_STRAPI_API_BASE_URL: 'DEMO_STRAPI_API_BASE_URL',
  DEMO_STRAPI_API_TOKEN: 'DEMO_STRAPI_API_TOKEN',
  DEMO_STRAPI_FEEDBACK_TOKEN: 'DEMO_STRAPI_FEEDBACK_TOKEN',
  INTEROP_STRAPI_API_BASE_URL: 'INTEROP_STRAPI_API_BASE_URL',
  INTEROP_STRAPI_API_TOKEN: 'INTEROP_STRAPI_API_TOKEN',
  INTEROP_STRAPI_FEEDBACK_TOKEN: 'INTEROP_STRAPI_FEEDBACK_TOKEN',
  PAGOPA_STRAPI_API_BASE_URL: 'PAGOPA_STRAPI_API_BASE_URL',
  PAGOPA_STRAPI_API_TOKEN: 'PAGOPA_STRAPI_API_TOKEN',
  PAGOPA_STRAPI_FEEDBACK_TOKEN: 'PAGOPA_STRAPI_FEEDBACK_TOKEN',
  SEND_STRAPI_API_BASE_URL: 'SEND_STRAPI_API_BASE_URL',
  SEND_STRAPI_API_TOKEN: 'SEND_STRAPI_API_TOKEN',
  SEND_STRAPI_FEEDBACK_TOKEN: 'SEND_STRAPI_FEEDBACK_TOKEN',
  WALLET_STRAPI_API_BASE_URL: 'WALLET_STRAPI_API_BASE_URL',
  WALLET_STRAPI_API_TOKEN: 'WALLET_STRAPI_API_TOKEN',
  WALLET_STRAPI_FEEDBACK_TOKEN: 'WALLET_STRAPI_FEEDBACK_TOKEN',
  ENVIRONMENT: 'demo',
};

const tenants: ReadonlyArray<Config['ENVIRONMENT']> = [
  'appio',
  'demo',
  'interop',
  'pagopa',
  'send',
  'wallet',
];

describe('getTenantStrapiConfig', () => {
  it('should return Strapi config for the selected tenant', () => {
    tenants.forEach((tenant) => {
      expect(getTenantStrapiConfig(tenantConfigEnv, tenant)).toStrictEqual({
        baseUrl:
          tenantConfigEnv[
            `${tenant.toUpperCase()}_STRAPI_API_BASE_URL` as keyof TenantConfigEnv
          ],
        token:
          tenantConfigEnv[
            `${tenant.toUpperCase()}_STRAPI_API_TOKEN` as keyof TenantConfigEnv
          ],
        feedbackToken:
          tenantConfigEnv[
            `${tenant.toUpperCase()}_STRAPI_FEEDBACK_TOKEN` as keyof TenantConfigEnv
          ],
      });
    });
  });

  it('should use ENVIRONMENT when tenant is not passed explicitly', () => {
    expect(getTenantStrapiConfig(tenantConfigEnv)).toStrictEqual({
      baseUrl: tenantConfigEnv.DEMO_STRAPI_API_BASE_URL,
      token: tenantConfigEnv.DEMO_STRAPI_API_TOKEN,
      feedbackToken: tenantConfigEnv.DEMO_STRAPI_FEEDBACK_TOKEN,
    });
  });
});
