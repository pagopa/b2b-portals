import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { AppEnv } from '@/AppEnv';

const BannerlinkSectionCodec = t.strict({
  __component: t.literal('sections.banner-link'),
  title: t.string,
  body: t.string,
  theme: ThemeCodec,
  reverse: t.boolean,
  ctaButtons: t.array(
    // TODO: Replace with CTAButtonSchema when merged
    t.intersection([
      t.type({
        text: t.string,
        href: t.string,
        variant: t.keyof({
          text: null,
          outlined: null,
          contained: null,
        }),
        color: t.keyof({
          inherit: null,
          primary: null,
          secondary: null,
          success: null,
          error: null,
          info: null,
          warning: null,
        }),
      }),
      t.partial({
        icon: t.union([t.string, t.null]),
        size: t.keyof({
          small: null,
          medium: null,
          large: null,
        }),
      }),
    ])
  ),
});

const PageCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(BannerlinkSectionCodec),
    }),
  }),
});

// Types
export type PageData = t.TypeOf<typeof PageCodec>;
export type BannerlinkSectionData = t.TypeOf<typeof BannerlinkSectionCodec>;

export const getPage = ({
  config,
  fetchFun,
  id,
}: AppEnv & { readonly id: number }): Promise<Readonly<PageData>> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/pages/${id}?populate[sections][populate][0]=ctaButtons,image,background,items,link,steps`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    PageCodec
  );
