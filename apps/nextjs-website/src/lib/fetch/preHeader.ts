import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { AppEnv } from '@/AppEnv';

const CtaButtonCodec = t.intersection([
  t.strict({
    text: t.string,
    href: t.string,
    variant: t.keyof({
      text: null,
      outlined: null,
      contained: null,
    }),
    color: t.keyof({
      inherit: null,
      primary: null,
      secondary: null,
      success: null,
      error: null,
      info: null,
      warning: null,
    }),
  }),
  t.partial({
    icon: t.union([t.string, t.null]),
    size: t.keyof({
      small: null,
      medium: null,
      large: null,
    }),
  }),
]);

export const CtaGroupCodec = t.intersection([
  t.strict({
    theme: ThemeCodec,
    reverse: t.boolean,
  }),
  t.partial({
    ctaButtons: t.array(CtaButtonCodec),
  }),
]);

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
