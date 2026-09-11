import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as PR from 'io-ts/lib/PathReporter';
import { validateTenantsConfig } from './lib/tenantConfig';

const ConfigCodec = t.type({
  TENANTS_CONFIG: t.string,
  ENVIRONMENT: t.string,
  PREVIEW_MODE: t.union([t.string, t.undefined]),
  PREVIEW_TOKEN: t.union([t.string, t.undefined]),
  MOCK_BUILD: t.union([t.string, t.undefined]),
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
    E.mapLeft((errors) => PR.failure(errors).join('\n')),
    E.chain((config) =>
      pipe(
        validateTenantsConfig(config),
        E.mapLeft((error) => error),
        E.map(() => config),
      ),
    ),
    E.bimap(
      (errors) => errors,
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
