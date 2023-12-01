import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { AppEnv } from '@/AppEnv';

// This codec is only temporary, we will probably use the PageCodec once it's merged into main
const HomeDataCodec = t.strict({
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
export type HomeData = t.TypeOf<typeof HomeDataCodec>;

export const getHome = ({ config, fetchFun }: AppEnv): Promise<HomeData> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/home/?populate[sections][populate][0]=ctaButtons,image,background,items,link,steps`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    HomeDataCodec
  );
