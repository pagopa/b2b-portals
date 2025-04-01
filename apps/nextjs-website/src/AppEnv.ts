import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as PR from 'io-ts/lib/PathReporter';

const ConfigCodec = t.type({
  DEMO_STRAPI_API_TOKEN: t.string,
  DEMO_STRAPI_API_BASE_URL: t.string,
  SEND_STRAPI_API_TOKEN: t.string,
  SEND_STRAPI_API_BASE_URL: t.string,
  APPIO_STRAPI_API_TOKEN: t.string,
  APPIO_STRAPI_API_BASE_URL: t.string,
  INTEROP_STRAPI_API_TOKEN: t.string,
  INTEROP_STRAPI_API_BASE_URL: t.string,
  ENVIRONMENT: t.union([
    t.literal('demo'),
    t.literal('send'),
    t.literal('appio'),
    t.literal('interop'),
  ]),
  PREVIEW_MODE: t.union([t.string, t.undefined]),
  PREVIEW_TOKEN: t.union([t.string, t.undefined]),
});

export type Config = t.TypeOf<typeof ConfigCodec>;

// the environment of the application
export type AppEnv = {
  readonly config: Config;
  readonly fetchFun: typeof fetch;
};

// given env produce an AppEnv
export const makeAppEnv = (
  env: Record<string, undefined | string>,
): E.Either<string, AppEnv> =>
  pipe(
    ConfigCodec.decode(env),
    E.bimap(
      (errors) => PR.failure(errors).join('\n'),
      (config) => ({
        config,
        fetchFun: (input: RequestInfo | URL, init?: RequestInit) =>
          fetch(input, {
            ...init,
            ...(process.env.NODE_ENV === 'development' && {
              cache: 'no-store',
            }),
          }),
      }),
    ),
  );
