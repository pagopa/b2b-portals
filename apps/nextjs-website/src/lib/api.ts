import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import { makeAppEnv } from '../AppEnv';
import real from './getProps/index';
import mock from './getProps/mock/index';
import { Getters } from './getProps/types';
import { getTenantStrapiConfig } from './tenantConfig';

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
  return getTenantStrapiConfig(appEnv.config).feedbackToken;
};

export const getStrapiApiBaseUrl = () => {
  return getTenantStrapiConfig(appEnv.config).baseUrl;
};
export const getters: Getters =
  appEnv.config.MOCK_BUILD === 'true' ? mock : real;
