import * as t from 'io-ts';
import { extractFromResponse } from '../extractFromResponse';
import {
  ThemeSchema,
  CtaButtonsSchema,
} from '@/components/reusable/io-ts-declarations';
import { AppEnv } from '@/AppEnv';

// Codecs
const CtaGroupCodec = t.type({
  theme: ThemeSchema,
  ctaButtons: t.union([t.array(CtaButtonsSchema), t.nullType]),
});

const PreHeaderAPIResponseCodec = t.type({
  data: t.type({
    attributes: t.type({
      leftCtas: CtaGroupCodec,
      rightCtas: CtaGroupCodec,
    }),
  }),
});

// Types
export type CtaGroup = t.TypeOf<typeof CtaGroupCodec>;
export type PreHeaderAPIResponse = t.TypeOf<typeof PreHeaderAPIResponseCodec>;

export const getPreHeaderData = ({
  config,
  fetchFun,
}: AppEnv): Promise<PreHeaderAPIResponse> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/pre-header/?populate=leftCtas.ctaButtons,rightCtas.ctaButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    PreHeaderAPIResponseCodec
  );
