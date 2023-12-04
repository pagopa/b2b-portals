import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { AppEnv } from '@/AppEnv';

const PageCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(
        t.strict({
          __component: t.string,
        })
      ),
    }),
  }),
});

// Types
export type PageData = t.TypeOf<typeof PageCodec>;

export const getPage = (
  id: number,
  { config, fetchFun }: AppEnv
): Promise<PageData> =>
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
