import path from 'path';

type ConnectionDetails = {
  connection: {
    filename?: string;
    host?: string;
    port?: number;
    database?: string;
    user?: string;
    password?: string;
    schema?: string;
    ssl?: {
      key?: string;
      cert?: string;
      ca?: string;
      capath?: string;
      cipher?: string;
      rejectUnauthorized?: boolean;
    } | boolean;
  }
  useNullAsDefault?: boolean;
  debug?: boolean;
};

type EnvFn = {
  (variableName: string, defaultValue?: string | undefined): string;
  int: (variableName: string, defaultValue?: number | undefined) => number;
  bool: (variableName: string, defaultValue?: boolean | undefined) => boolean;
}

type Params = {
  env: EnvFn;
}

export default ({ env }: Params) => {
  const client: string = env('DATABASE_CLIENT');

  const connections: {[key:string]: ConnectionDetails} = {
    sqlite: {
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
    postgres: {
      connection: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        user: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: env('DATABASE_SCHEMA'),
        ssl: env.bool('DATABASE_SSL', false) && {
          key: env('DATABASE_SSL_KEY', undefined),
          cert: env('DATABASE_SSL_CERT', undefined),
          ca: env('DATABASE_SSL_CA', undefined),
          capath: env('DATABASE_SSL_CAPATH', undefined),
          cipher: env('DATABASE_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
      },
      debug: false,
    },
  }

  return {
    connection: {
      client,
      ...(connections[client] ?? {}),
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
}