import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { makeAppEnv } from '../AppEnv';
import real from './getProps/index';
import mock from './getProps/mock/index';
import { Getters } from './getProps/types';

// create AppEnv given process env
export const appEnv = pipe(
  makeAppEnv(process.env),
  E.getOrElseW((errors) => {
    // eslint-disable-next-line functional/no-throw-statements
    throw errors;
  }),
);

export const isPreviewMode = () => appEnv.config.PREVIEW_MODE === 'true';
export const getPreviewToken = () => appEnv.config.PREVIEW_TOKEN;

export const getFeedbackToken = () => {
  const tenant = appEnv.config.ENVIRONMENT;
  switch (tenant) {
    case 'demo':
      return appEnv.config.DEMO_STRAPI_FEEDBACK_TOKEN;
    case 'send':
      return appEnv.config.SEND_STRAPI_FEEDBACK_TOKEN;
    case 'appio':
      return appEnv.config.APPIO_STRAPI_FEEDBACK_TOKEN;
    case 'pagopa':
      return appEnv.config.PAGOPA_STRAPI_FEEDBACK_TOKEN;
    case 'interop':
      return appEnv.config.INTEROP_STRAPI_FEEDBACK_TOKEN;
    case 'wallet':
      return appEnv.config.WALLET_STRAPI_FEEDBACK_TOKEN;
    default:
      // eslint-disable-next-line functional/no-throw-statements
      throw new Error('Token mancante');
  }
};

export const getStrapiApiBaseUrl = () => {
  const tenant = appEnv.config.ENVIRONMENT;
  switch (tenant) {
    case 'demo':
      return appEnv.config.DEMO_STRAPI_API_BASE_URL;
    case 'send':
      return appEnv.config.SEND_STRAPI_API_BASE_URL;
    case 'appio':
      return appEnv.config.APPIO_STRAPI_API_BASE_URL;
    case 'pagopa':
      return appEnv.config.PAGOPA_STRAPI_API_BASE_URL;
    case 'interop':
      return appEnv.config.INTEROP_STRAPI_API_BASE_URL;
    case 'wallet':
      return appEnv.config.WALLET_STRAPI_API_BASE_URL;
    default:
      // eslint-disable-next-line functional/no-throw-statements
      throw new Error('URL mancante');
  }
};
export const getters: Getters =
  appEnv.config.MOCK_BUILD === 'true' ? mock : real;
