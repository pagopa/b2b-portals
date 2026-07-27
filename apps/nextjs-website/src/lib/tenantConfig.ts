import { Config } from '@/AppEnv';

type Tenant = Config['ENVIRONMENT'];
type TenantEnvPrefix = Uppercase<Tenant>;
type BaseUrlKey = `${TenantEnvPrefix}_STRAPI_API_BASE_URL`;
type TokenKey = `${TenantEnvPrefix}_STRAPI_API_TOKEN`;
type FeedbackTokenKey = `${TenantEnvPrefix}_STRAPI_FEEDBACK_TOKEN`;
type TenantConfigEnvKey =
  | 'ENVIRONMENT'
  | BaseUrlKey
  | TokenKey
  | FeedbackTokenKey;

export type TenantConfigEnv = Pick<Config, TenantConfigEnvKey>;

export type TenantStrapiConfig = {
  readonly baseUrl: string;
  readonly token: string;
  readonly feedbackToken: string;
};

const tenantEnvKeys: Record<
  Tenant,
  {
    readonly baseUrl: BaseUrlKey;
    readonly token: TokenKey;
    readonly feedbackToken: FeedbackTokenKey;
  }
> = {
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
};

export const getTenantStrapiConfig = (
  config: TenantConfigEnv,
  tenant: Tenant = config.ENVIRONMENT,
): TenantStrapiConfig => {
  const keys = tenantEnvKeys[tenant];

  return {
    baseUrl: config[keys.baseUrl],
    token: config[keys.token],
    feedbackToken: config[keys.feedbackToken],
  };
};
