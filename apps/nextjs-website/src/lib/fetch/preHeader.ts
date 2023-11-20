import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { CtaGroupCodec } from './types/ctaButtons';
import { AppEnv } from '@/AppEnv';

const PreHeaderCodec = t.strict({
  data: t.strict({
    attributes: t.union([
      t.strict({
        rightCtas: CtaGroupCodec,
        leftCtas: CtaGroupCodec,
      }),
      t.intersection([
        t.strict({
          rightCtas: CtaGroupCodec,
        }),
        t.partial({
          leftCtas: CtaGroupCodec,
        }),
      ]),
      t.intersection([
        t.strict({
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
export type PreHeader = t.TypeOf<typeof PreHeaderCodec>;

export const getPreHeader = ({
  config,
  fetchFun,
}: AppEnv): Promise<PreHeader> =>
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
    PreHeaderCodec
  );
