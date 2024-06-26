import * as t from 'io-ts';
import { tenantStrapiApiBaseUrl, tenantStrapiApiToken } from '../api';
import { extractFromResponse } from './extractFromResponse';
import { PreviewPageSectionCodec } from './types/Preview';
import { AppEnv, Config } from '@/AppEnv';

const PageIDsCodec = t.strict({
  data: t.array(
    t.strict({
      id: t.number,
    })
  ),
});

const PageDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(PreviewPageSectionCodec),
    }),
  }),
});

export type PageIDs = t.TypeOf<typeof PageIDsCodec>;
export type PageData = t.TypeOf<typeof PageDataCodec>;

export const fetchAllPageIDs = ({
  fetchFun,
  tenant,
}: AppEnv & { readonly tenant: Config['ENVIRONMENT'] }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${tenantStrapiApiBaseUrl[tenant]}/api/pages?publicationState=preview`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tenantStrapiApiToken[tenant]}`,
        },
        cache: 'no-cache',
      }
    ),
    PageIDsCodec
  );

export const fetchPageFromID = ({
  fetchFun,
  tenant,
  pageID,
}: AppEnv & {
  readonly tenant: Config['ENVIRONMENT'];
  readonly pageID: number;
}): Promise<PageData> =>
  extractFromResponse(
    fetchFun(
      `${tenantStrapiApiBaseUrl[tenant]}/api/pages/${pageID}?publicationState=preview&populate[sections][populate][0]=ctaButtons&populate[sections][populate][1]=image&populate[sections][populate][2]=background&populate[sections][populate][3]=items.links&populate[sections][populate][4]=link&populate[sections][populate][5]=steps&populate[sections][populate][6]=accordionItems&populate[sections][populate][7]=decoration&populate[sections][populate][8]=storeButtons`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${tenantStrapiApiToken[tenant]}`,
        },
        cache: 'no-cache',
      }
    ),
    PageDataCodec
  );
