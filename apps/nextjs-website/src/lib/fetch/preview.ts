import * as t from 'io-ts';
import {
  PageSectionCodec,
  PressReleaseSectionContentCodec,
} from './types/PageSection';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

const PageIDsCodec = t.strict({
  data: t.array(
    t.strict({
      id: t.number,
    })
  ),
});

const PreviewPageDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      locale: t.union([t.literal('it'), t.literal('en')]),
      sections: t.array(PageSectionCodec),
    }),
  }),
});

const PreviewPressReleaseDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      locale: t.union([t.literal('it'), t.literal('en')]),
      pressRelease: PressReleaseSectionContentCodec,
    }),
  }),
});

export type PageIDs = t.TypeOf<typeof PageIDsCodec>;
export type PreviewPageData = t.TypeOf<typeof PreviewPageDataCodec>;
export type PreviewPressReleaseData = t.TypeOf<
  typeof PreviewPressReleaseDataCodec
>;

export const fetchAllPageIDs = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages?locale=${locale}&publicationState=preview&pagination[pageSize]=100`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      }
    ),
    PageIDsCodec
  );

export const fetchAllPressReleaseIDs = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/press-releases?locale=${locale}&publicationState=preview&pagination[pageSize]=100`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      }
    ),
    PageIDsCodec
  );

export const fetchPageFromID = ({
  config,
  fetchFun,
  pageID,
}: AppEnv & { readonly pageID: number }): Promise<PreviewPageData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages/${pageID}?publicationState=preview
        &populate[sections][populate][0]=ctaButtons,image,mobileImage,background,link,accordionItems,decoration,storeButtons,categories,counter,icon,chips
        &populate[sections][populate][1]=items.links,items.link,items.icon,items.resource,items.thumbnail
        &populate[sections][populate][2]=sections.icon,sections.ctaButtons
        &populate[sections][populate][3]=sections.content.image,sections.content.mobileImage,sections.content.ctaButtons,sections.content.storeButtons
        &populate[sections][populate][4]=video.src
        &populate[sections][populate][5]=steps.icon
        &populate[sections][populate][6]=cards.image,cards.link
        &populate[sections][populate][7]=text.link
        &populate[sections][populate][8]=pages.sections.ctaButtons,pages.sections.image,pages.sections.mobileImage,pages.sections.storeButtons
        &populate[sections][populate][9]=pages.sections.items.links,pages.sections.items.icon
        &populate[sections][populate][10]=pages.sections.sections.ctaButtons,pages.sections.sections.icon
        `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      }
    ),
    PreviewPageDataCodec
  );

export const fetchPressReleaseFromID = ({
  config,
  fetchFun,
  pressReleaseID,
}: AppEnv & {
  readonly pressReleaseID: number;
}): Promise<PreviewPressReleaseData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/press-releases/${pressReleaseID}?publicationState=preview&populate[pressRelease]=*`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      }
    ),
    PreviewPressReleaseDataCodec
  );
