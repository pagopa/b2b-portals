import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { ThemeCodec } from './types/Theme';
import { StoreButtonsCodec } from './types/StoreButtons';
import { StrapiImageSchema } from './types/StrapiImage';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { AppEnv } from '@/AppEnv';

// TODO: Update all API calls to adapt to Strapi V5

const PageRelationCodec = t.strict({
  attributes: t.strict({
    slug: t.string,
  }),
});

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
  exclude: t.strict({
    data: t.array(PageRelationCodec),
  }),
});

const PreFooterDataCodec = t.strict({
  data: t.union([
    t.null,
    t.strict({
      attributes: PreFooterAttributesCodec,
    }),
  ]),
});

type PreFooterData = t.TypeOf<typeof PreFooterDataCodec>;
export type PreFooterAttributes = t.TypeOf<typeof PreFooterAttributesCodec>;

export const getPreFooter = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<PreFooterData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pre-footer/?locale=${locale}&populate=background,ctaButtons,storeButtons,exclude`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    ),
    PreFooterDataCodec,
  );
