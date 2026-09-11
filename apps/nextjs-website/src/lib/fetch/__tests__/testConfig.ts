import { Config } from '@/AppEnv';
import { vi } from 'vitest';

export const demoStrapiApiBaseUrl = 'demoStrapiApiBaseUrl';
export const demoStrapiApiToken = 'demoStrapiToken';

const tenantsConfig = JSON.stringify({
  appio: {
    baseUrl: 'appioStrapiApiBaseUrl',
    token: 'appioStrapiToken',
    feedbackToken: 'appioFeedbackToken',
  },
  demo: {
    baseUrl: demoStrapiApiBaseUrl,
    token: demoStrapiApiToken,
    feedbackToken: 'demoFeedbackToken',
  },
  interop: {
    baseUrl: 'interopStrapiApiBaseUrl',
    token: 'interopStrapiToken',
    feedbackToken: 'interopFeedbackToken',
  },
  pagopa: {
    baseUrl: 'pagopaStrapiApiBaseUrl',
    token: 'pagopaStrapiToken',
    feedbackToken: 'pagopaFeedbackToken',
  },
  send: {
    baseUrl: 'sendStrapiApiBaseUrl',
    token: 'sendStrapiToken',
    feedbackToken: 'sendFeedbackToken',
  },
  wallet: {
    baseUrl: 'walletStrapiApiBaseUrl',
    token: 'walletStrapiToken',
    feedbackToken: 'walletFeedbackToken',
  },
});

export const makeTestAppEnv = () => {
  const config: Config = {
    TENANTS_CONFIG: tenantsConfig,
    ENVIRONMENT: 'demo',
    PREVIEW_MODE: undefined,
    PREVIEW_TOKEN: undefined,
    MOCK_BUILD: undefined,
  };
  const fetchMock = vi.fn(fetch);
  const appEnv = { config, fetchFun: fetchMock };

  return { appEnv, fetchMock };
};
