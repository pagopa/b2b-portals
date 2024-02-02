import * as t from 'io-ts';
import { NavigationProps } from '@pagopa/pagopa-editorial-components/dist/components/Header/components/Navigation';
import { extractFromResponse } from './extractFromResponse';
import { CTAButton_SimpleSchema } from './types/CTAButton';
import { AppEnv } from '@/AppEnv';

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      productName: t.string,
      beta: t.boolean,
      ctaButtons: t.array(CTAButton_SimpleSchema),
    }),
  }),
});

export type Header = t.TypeOf<typeof HeaderDataCodec>;

export type HeaderWithNavigation = Header['data']['attributes'] &
  NavigationProps;

export const getHeader = ({ config, fetchFun }: AppEnv): Promise<Header> =>
  extractFromResponse(
    fetchFun(`${config.STRAPI_API_BASE_URL}/api/header/?populate=ctaButtons`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
      },
    }),
    HeaderDataCodec
  );
