import * as t from 'io-ts';
import { extractFromResponse } from '../extractFromResponse';
import { AppEnv } from '@/AppEnv';
import {
  ThemeSchema,
  CtaButtonsSchema,
  StrapiImageSchema,
} from '@/types/io-ts-declarations';

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.intersection([
      t.strict({
        productName: t.string,
        beta: t.boolean,
        reverse: t.boolean,
        theme: ThemeSchema,
      }),
      t.partial({
        avatar: StrapiImageSchema,
        ctaButtons: t.array(CtaButtonsSchema),
      }),
    ]),
  }),
});

export type HeaderAPIResponse = t.TypeOf<typeof HeaderDataCodec>;

export const getHeader = ({
  config,
  fetchFun,
}: AppEnv): Promise<HeaderAPIResponse> =>
  extractFromResponse(
    fetchFun(`${config.STRAPI_API_BASE_URL}/api/header/?populate=*`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
      },
    }),
    HeaderDataCodec
  );
