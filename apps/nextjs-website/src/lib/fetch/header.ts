import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { CtaButtonsSchema } from './types/ctaButtons';
import { StrapiImageSchema } from './types/StrapiImage';
import { AppEnv } from '@/AppEnv';

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.intersection([
      t.strict({
        productName: t.string,
        beta: t.boolean,
        reverse: t.boolean,
        theme: ThemeCodec,
      }),
      t.partial({
        avatar: StrapiImageSchema,
        ctaButtons: t.array(CtaButtonsSchema),
      }),
    ]),
  }),
});

export type Header = t.TypeOf<typeof HeaderDataCodec>;

export const getHeader = ({ config, fetchFun }: AppEnv): Promise<Header> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/header/?populate=avatar,ctaButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    HeaderDataCodec
  );
