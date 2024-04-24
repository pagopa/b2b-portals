import * as t from 'io-ts';
import tenants from '../tenants';
import { extractFromResponse } from './extractFromResponse';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { StrapiImageSchema } from './types/StrapiImage';
import { AppEnv } from '@/AppEnv';

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      logo: StrapiImageSchema,
      productName: t.string,
      beta: t.boolean,
      ctaButtons: t.array(CTAButtonSimpleCodec),
    }),
  }),
});

export type Header = t.TypeOf<typeof HeaderDataCodec>;

export const getHeader = ({ config, fetchFun }: AppEnv): Promise<Header> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/${
        tenants[config.ENVIRONMENT].header
      }/?populate=ctaButtons,logo`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    HeaderDataCodec
  );
