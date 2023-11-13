import * as t from 'io-ts';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/lib/Either';
import * as PR from 'io-ts/lib/PathReporter';

const ConfigCodec = t.type({
  STRAPI_API_TOKEN: t.string,
  STRAPI_API_BASE_URL: t.string,
});

export type Config = t.TypeOf<typeof ConfigCodec>;

// the environment of the application
export type AppEnv = {
  readonly config: Config;
  readonly fetchFun: typeof fetch;
};

// given env produce an AppEnv
export const makeAppEnv = (
  env: Record<string, undefined | string>
): E.Either<string, AppEnv> =>
  pipe(
    ConfigCodec.decode(env),
    E.bimap(
      (errors) => PR.failure(errors).join('\n'),
      (config) => ({ config, fetchFun: fetch })
    )
  );
