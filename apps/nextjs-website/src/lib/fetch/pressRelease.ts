import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { PageSEOCodec } from './types/SEO';
import { PressReleaseSectionContentCodec } from './types/PageSection';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';
import { Locale } from './siteWideSEO';

const PressReleasePageCodec = t.strict({
  slug: t.string,
  seo: PageSEOCodec,
  pressRelease: PressReleaseSectionContentCodec,
});

const PressReleasesCodec = t.strict({
  data: t.readonlyArray(PressReleasePageCodec),
});

export type PressReleasePage = t.TypeOf<typeof PressReleasePageCodec>;
export type PressReleases = t.TypeOf<typeof PressReleasesCodec>;

export const getPressReleases = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<PressReleases> =>
  extractFromResponse(
    fetchFun(
      // All query parameters in the following URL indicate specific fields that would not otherwise be automatically returned by Strapi
      // The pagination[pageSize] parameter has been set to 100 to realistically not have the need to fetch multiple pages
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/press-releases?locale=${locale}&pagination[pageSize]=100
&populate[0]=seo
&populate[1]=pressRelease
        `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      },
    ),
    PressReleasesCodec,
  );
