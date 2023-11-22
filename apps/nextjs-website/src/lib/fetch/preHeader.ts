import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { CTAGroupCodec } from './types/CTAGroup';
import { AppEnv } from '@/AppEnv';

const PreHeaderCodec = t.strict({
  data: t.strict({
    attributes: t.union([
      t.strict({
        rightCtas: CTAGroupCodec,
        leftCtas: CTAGroupCodec,
      }),
      t.intersection([
        t.strict({
          rightCtas: CTAGroupCodec,
        }),
        t.partial({
          leftCtas: CTAGroupCodec,
        }),
      ]),
      t.intersection([
        t.strict({
          leftCtas: CTAGroupCodec,
        }),
        t.partial({
          rightCtas: CTAGroupCodec,
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
