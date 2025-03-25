import * as t from 'io-ts';
import {
  PageSectionCodec,
  PressReleaseSectionContentCodec,
} from './types/PageSection';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';
import { Locale, LocaleCodec } from './siteWideSEO';

const PageIDsCodec = t.strict({
  data: t.array(
    t.strict({
      documentId: t.string,
    }),
  ),
});

const PreviewPageDataCodec = t.strict({
  data: t.strict({
    locale: LocaleCodec,
    sections: t.array(PageSectionCodec),
  }),
});

const PreviewPressReleaseDataCodec = t.strict({
  data: t.strict({
    locale: LocaleCodec,
    pressRelease: PressReleaseSectionContentCodec,
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
}: AppEnv & { readonly locale: Locale }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages?locale=${locale}&pagination[pageSize]=100&status=draft`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PageIDsCodec,
  );

export const fetchAllPressReleaseIDs = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/press-releases?locale=${locale}&pagination[pageSize]=100&status=draft`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PageIDsCodec,
  );

export const fetchPageFromID = ({
  config,
  fetchFun,
  documentID,
  locale,
}: AppEnv & {
  readonly documentID: string;
  readonly locale: Locale;
}): Promise<PreviewPageData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/pages/${documentID}?locale=${locale}&status=draft
&populate[1]=sections.ctaButtons,sections.image,sections.mobileImage,sections.background,sections.link,sections.accordionItems,sections.decoration,sections.storeButtons,sections.categories,sections.counter,sections.icon,sections.chips,sections.bottomCTA
&populate[2]=sections.items.links,sections.items.link,sections.items.icon,sections.items.resource,sections.items.thumbnail
&populate[3]=sections.sections.icon,sections.sections.ctaButtons
&populate[4]=sections.sections.content.image,sections.sections.content.mobileImage,sections.sections.content.ctaButtons,sections.sections.content.storeButtons
&populate[5]=sections.video.src
&populate[6]=sections.steps.icon
&populate[7]=sections.cards.image,sections.cards.link
&populate[8]=sections.text.link
&populate[9]=sections.pages.sections.ctaButtons,sections.pages.sections.image,sections.pages.sections.mobileImage,sections.pages.sections.storeButtons
&populate[10]=sections.pages.sections.items.links,sections.pages.sections.items.icon
&populate[11]=sections.pages.sections.sections.ctaButtons,sections.pages.sections.sections.icon
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PreviewPageDataCodec,
  );

export const fetchPressReleaseFromID = ({
  config,
  fetchFun,
  documentID,
  locale,
}: AppEnv & {
  readonly documentID: string;
  readonly locale: Locale;
}): Promise<PreviewPressReleaseData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/press-releases/${documentID}?locale=${locale}&status=draft
&populate[1]=pressRelease.backlink
&sort[0]=pressRelease.date:desc
        `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PreviewPressReleaseDataCodec,
  );

export const fetchAllPageSwitchPageIDs = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<PageIDs> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/page-switch-pages?locale=${locale}&pagination[pageSize]=100&status=draft`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PageIDsCodec,
  );

export const fetchPageSwitchPageFromID = ({
  config,
  fetchFun,
  documentID,
  locale,
}: AppEnv & {
  readonly documentID: string;
  readonly locale: Locale;
}): Promise<PreviewPageData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/page-switch-pages/${documentID}?locale=${locale}&status=draft
&populate[1]=sections.ctaButtons,sections.image,sections.mobileImage,sections.storeButtons
&populate[2]=sections.items.links,sections.items.icon
&populate[3]=sections.sections.ctaButtons,sections.sections.icon
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
        cache: 'no-cache',
      },
    ),
    PreviewPageDataCodec,
  );
