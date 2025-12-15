import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { ThemeCodec } from './types/Theme';
import { StoreButtonsCodec } from './types/StoreButtons';
import { StrapiImageSchema } from './types/StrapiImage';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { AppEnv } from '@/AppEnv';
import { Locale } from './siteWideSEO';
import PageRelationCodec from './types/PageRelation';

const PreFooterAttributesCodec = t.strict({
  title: t.string,
  theme: ThemeCodec,
  layout: t.keyof({
    left: null,
    center: null,
  }),
  background: StrapiImageSchema,
  ctaButtons: t.array(CTAButtonSimpleCodec),
  storeButtons: t.union([StoreButtonsCodec, t.null]),
  exclude: t.array(PageRelationCodec),
});

const PreFooterDataCodec = t.strict({
  data: t.union([PreFooterAttributesCodec, t.null]),
});

type PreFooterData = t.TypeOf<typeof PreFooterDataCodec>;
export type PreFooterAttributes = t.TypeOf<typeof PreFooterAttributesCodec>;

export const getPreFooter = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<PreFooterData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pre-footer/?locale=${locale}
&populate[0]=background
&populate[1]=ctaButtons
&populate[2]=storeButtons
&populate[3]=exclude
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      },
    ),
    PreFooterDataCodec,
  );
