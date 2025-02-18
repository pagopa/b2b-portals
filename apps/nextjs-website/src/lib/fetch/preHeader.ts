import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { MUIButtonSizeCodec } from './types/MUIButtonSize';
import { MUIButtonIconCodec } from './types/icons/ButtonIcon';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';
import { Locale } from './siteWideSEO';

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
  data: t.union([PreHeaderAttributesCodec, t.null]),
});

// Types
type PreHeaderData = t.TypeOf<typeof PreHeaderCodec>;
export type PreHeaderAttributes = t.TypeOf<typeof PreHeaderAttributesCodec>;

export const getPreHeader = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<PreHeaderData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pre-header/?locale=${locale}
&populate[0]=leftCtas
&populate[1]=rightCtas
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      },
    ),
    PreHeaderCodec,
  );
