import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/lib/function';

export type TenantConfigEnv = {
  readonly ENVIRONMENT: string;
  readonly TENANTS_CONFIG: string;
};

export type TenantStrapiConfig = {
  readonly baseUrl: string;
  readonly token: string;
  readonly feedbackToken: string;
};

type TenantsConfig = Record<string, TenantStrapiConfig>;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isTenantStrapiConfig = (value: unknown): value is TenantStrapiConfig =>
  isRecord(value) &&
  typeof value['baseUrl'] === 'string' &&
  typeof value['token'] === 'string' &&
  typeof value['feedbackToken'] === 'string';

const parseTenantsConfig = (
  tenantsConfig: string,
): E.Either<string, TenantsConfig> => {
  try {
    const parsedConfig: unknown = JSON.parse(tenantsConfig);

    if (!isRecord(parsedConfig)) {
      return E.left('TENANTS_CONFIG must be a JSON object');
    }

    return E.right(
      Object.entries(parsedConfig).reduce<TenantsConfig>(
        (tenantsConfig, [tenant, tenantConfig]) => {
          if (!isTenantStrapiConfig(tenantConfig)) {
            throw new Error(
              `Missing or invalid Strapi config for tenant "${tenant}"`,
            );
          }

          return {
            ...tenantsConfig,
            [tenant]: tenantConfig,
          };
        },
        {},
      ),
    );
  } catch (error) {
    return E.left(
      error instanceof Error
        ? `Invalid TENANTS_CONFIG: ${error.message}`
        : 'Invalid TENANTS_CONFIG',
    );
  }
};

export const validateTenantsConfig = (
  config: TenantConfigEnv,
): E.Either<string, TenantsConfig> =>
  pipe(
    parseTenantsConfig(config.TENANTS_CONFIG),
    E.chain((tenantsConfig) =>
      tenantsConfig[config.ENVIRONMENT] === undefined
        ? E.left(
            `Missing Strapi config for ENVIRONMENT "${config.ENVIRONMENT}"`,
          )
        : E.right(tenantsConfig),
    ),
  );

export const getTenantStrapiConfig = (
  config: TenantConfigEnv,
  tenant: string = config.ENVIRONMENT,
): TenantStrapiConfig => {
  const tenantsConfig = pipe(
    validateTenantsConfig(config),
    E.getOrElseW((error) => {
      throw new Error(error);
    }),
  );
  const tenantConfig = tenantsConfig[tenant];

  if (!isTenantStrapiConfig(tenantConfig)) {
    throw new Error(`Missing or invalid Strapi config for tenant "${tenant}"`);
  }

  return tenantConfig;
};
