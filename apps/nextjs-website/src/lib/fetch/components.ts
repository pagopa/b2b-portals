import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { AppEnv } from '@/AppEnv';

const AttributesCodec = t.strict({
  slug: t.string,
  sections: t.array(
    t.strict({
      id: t.number,
      __component: t.string,
    })
  ),
});

const ComponentsCodec = t.strict({
  data: t.strict({
    id: t.number,
    attributes: AttributesCodec,
  }),
});

// Types
export type Components = t.TypeOf<typeof ComponentsCodec>;

export const getComponents = ({
  config,
  fetchFun,
  id,
}: Readonly<AppEnv & { readonly id: number }>): Promise<Readonly<Components>> =>
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
    ComponentsCodec
  );
