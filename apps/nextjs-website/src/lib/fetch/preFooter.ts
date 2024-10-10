import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { ThemeCodec } from './types/Theme';
import { StoreButtonsCodec } from './types/StoreButtons';
import { StrapiImageSchema } from './types/StrapiImage';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { AppEnv } from '@/AppEnv';

// TODO: Add tests for PreFooter

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
  // TODO: Implement "exclude" field
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
}: AppEnv): Promise<PreFooterData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pre-footer/?populate=background,ctaButtons,storeButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    PreFooterDataCodec
  );
