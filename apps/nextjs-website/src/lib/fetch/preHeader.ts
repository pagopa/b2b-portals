import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { MUIButtonSizeCodec } from './types/MUIButtonSize';
import { MUIButtonIconCodec } from './types/icons/ButtonIcon';
import { extractTenantStrapiApiData } from './tenantApiData';
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
export type PreHeaderData = t.TypeOf<typeof PreHeaderCodec>;

export const getPreHeader = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<PreHeaderData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pre-header/?locale=${locale}&populate=leftCtas,rightCtas`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    PreHeaderCodec
  );
