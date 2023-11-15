import * as t from 'io-ts';
import { extractFromResponse } from '../extractFromResponse';
import { AppEnv } from '@/AppEnv';
import {
  ThemeSchema,
  CtaButtonsSchema,
} from '@/components/reusable/io-ts-declarations';

// Dropdown version
const HeaderDropdownMenuItemCodec = t.type({
  items: t.array(
    t.type({
      href: t.string,
      key: t.number,
      label: t.string,
    })
  ),
  label: t.string,
  theme: ThemeSchema,
  active: t.union([t.boolean, t.undefined]),
});

// Direct link version
const HeaderDirectLinkMenuItemCodec = t.type({
  href: t.string,
  label: t.string,
  theme: ThemeSchema,
  active: t.union([t.boolean, t.undefined]),
});

// Either only Dropdown, only Direct link, or both versions
export const HeaderMenuItemCodec = t.union([
  t.type({
    HeaderDropdownMenuItemCodec,
    HeaderDirectLinkMenuItemCodec,
  }),
  t.intersection([
    t.type({
      HeaderDropdownMenuItemCodec,
    }),
    t.partial({
      HeaderDirectLinkMenuItemCodec,
    }),
  ]),
  t.intersection([
    t.type({
      HeaderDirectLinkMenuItemCodec,
    }),
    t.partial({
      HeaderDropdownMenuItemCodec,
    }),
  ]),
]);

export const HeaderMenuItemsArrayCodec = t.array(HeaderMenuItemCodec);

export const HeaderProductCodec = t.type({
  href: t.string,
  name: t.string,
});

export const HeaderDataCodec = t.type({
  avatar: t.union([t.type({ alt: t.string, src: t.string }), t.nullType]),
  beta: t.union([t.boolean, t.undefined]),
  ctaButtons: t.union([t.array(CtaButtonsSchema), t.nullType]),
  reverse: t.union([t.boolean, t.undefined]),
  menu: HeaderMenuItemsArrayCodec,
  product: HeaderProductCodec,
  theme: ThemeSchema,
});

export type HeaderAPIResponse = t.TypeOf<typeof HeaderDataCodec>;

export const getHeaderData = ({
  config,
  fetchFun,
}: AppEnv): Promise<HeaderAPIResponse> =>
  extractFromResponse(
    fetchFun(`${config.STRAPI_API_BASE_URL}/api/header/?populate=*`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
      },
    }),
    HeaderDataCodec
  );
