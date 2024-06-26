import * as t from 'io-ts';
import { tenantStrapiApiBaseUrl, tenantStrapiApiToken } from '../api';
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
      `${
        tenantStrapiApiBaseUrl[config.ENVIRONMENT]
      }/api/pre-header/?populate=leftCtas,rightCtas`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tenantStrapiApiToken[config.ENVIRONMENT]}`,
        },
      }
    ),
    PreHeaderCodec
  );
