import * as t from 'io-ts';
import { extractFromResponse } from '../extractFromResponse';
import { CtaGroupCodec } from '@/components/reusable/io-ts-declarations';
import { AppEnv } from '@/AppEnv';

const PreHeaderAPIResponseCodec = t.type({
  data: t.type({
    attributes: t.union([
      t.type({
        rightCtas: CtaGroupCodec,
        leftCtas: CtaGroupCodec,
      }),
      t.intersection([
        t.type({
          rightCtas: CtaGroupCodec,
        }),
        t.partial({
          leftCtas: CtaGroupCodec,
        }),
      ]),
      t.intersection([
        t.type({
          leftCtas: CtaGroupCodec,
        }),
        t.partial({
          rightCtas: CtaGroupCodec,
        }),
      ]),
    ]),
  }),
});

// Types
export type PreHeaderAPIResponse = t.TypeOf<typeof PreHeaderAPIResponseCodec>;

export const getPreHeader = ({
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
