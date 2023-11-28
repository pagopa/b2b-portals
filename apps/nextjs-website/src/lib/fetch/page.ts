import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { AppEnv } from '@/AppEnv';

const FeatureSectionCodec = t.strict({
  __component: t.literal('sections.feature'),
  title: t.string,
  theme: ThemeCodec,
  showCarouselMobile: t.boolean,
  background: t.union([t.string, t.null]),
  sectionID: t.union([t.string, t.null]),
  items: t.array(
    t.strict({
      id: t.number,
      icon: t.string,
      iconColor: t.keyof({
        inherit: null,
      }),
      title: t.string,
      subtitle: t.string,
      linkText: t.string,
      linkURL: t.string,
    })
  ),
});

const PageCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(FeatureSectionCodec),
    }),
  }),
});

// Types
export type PageData = t.TypeOf<typeof PageCodec>;
export type FeatureSectionData = t.TypeOf<typeof FeatureSectionCodec>;

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
