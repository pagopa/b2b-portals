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

export const getters: Getters =
  appEnv.config.DRY_BUILD === 'true' ? mock : real;
