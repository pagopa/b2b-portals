import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { AppEnv } from '@/AppEnv';
import { StrapiImageSchema } from './types/StrapiImage';

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      logo: StrapiImageSchema,
      productName: t.union([t.string, t.null]),
      beta: t.boolean,
      ctaButtons: t.array(CTAButtonSimpleCodec),
    }),
  }),
});

export type Header = t.TypeOf<typeof HeaderDataCodec>;

export const getHeader = ({ config, fetchFun }: AppEnv): Promise<Header> =>
  extractFromResponse(
    fetchFun(`${config.STRAPI_API_BASE_URL}/api/header/?populate=ctaButtons,logo`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
      },
    }),
    HeaderDataCodec
  );
