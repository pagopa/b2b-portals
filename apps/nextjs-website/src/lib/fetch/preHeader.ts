import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { MUIButtonSizeCodec } from './types/MUIButtonSize';
import { MUIButtonIconCodec } from './types/icons/ButtonIcon';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

// TODO: Update all API calls to adapt to Strapi V5

const PreHeaderButtonCodec = t.strict({
  text: t.string,
  href: t.string,
  icon: t.union([MUIButtonIconCodec, t.null]),
  size: MUIButtonSizeCodec,
});

const PreHeaderAttributesCodec = t.strict({
  leftCtas: t.array(PreHeaderButtonCodec),
  rightCtas: t.array(PreHeaderButtonCodec),
});

const PreHeaderCodec = t.strict({
  data: t.union([
    t.null,
    t.strict({
      attributes: PreHeaderAttributesCodec,
    }),
  ]),
});

// Types
type PreHeaderData = t.TypeOf<typeof PreHeaderCodec>;
export type PreHeaderAttributes = t.TypeOf<typeof PreHeaderAttributesCodec>;

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
          'Strapi-Response-Format': 'v4',
        },
      }
    ),
    PreHeaderCodec
  );
