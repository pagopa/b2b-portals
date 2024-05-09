import * as t from 'io-ts';
import tenants from '../tenants';
import { extractFromResponse } from './extractFromResponse';
import { MUIButtonSizeCodec } from './types/MUIButtonSize';
import { MUIButtonIconCodec } from './types/icons/ButtonIcon';
import { AppEnv } from '@/AppEnv';

const PreHeaderButtonCodec = t.strict({
  text: t.string,
  href: t.string,
  icon: t.union([MUIButtonIconCodec, t.null]),
  size: MUIButtonSizeCodec,
});

const PreHeaderCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      leftCtas: t.array(PreHeaderButtonCodec),
      rightCtas: t.array(PreHeaderButtonCodec),
    }),
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
      `${config.STRAPI_API_BASE_URL}/api/${
        tenants[config.ENVIRONMENT].preHeader
      }/?populate=leftCtas,rightCtas`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    PreHeaderCodec
  );
