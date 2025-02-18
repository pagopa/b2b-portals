import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';
import { Locale } from './siteWideSEO';
import { StrapiImageRequiredSchema } from './types/StrapiImage';

// Codec
const CompanyLinkCodec = t.strict({
  href: t.string,
  ariaLabel: t.string,
});

const FooterLinkCodec = t.strict({
  label: t.string,
  href: t.string,
  ariaLabel: t.string,
});

const FooterLinkSocialCodec = t.strict({
  icon: StrapiImageRequiredSchema,
  href: t.string,
  ariaLabel: t.string,
});

const FooterLinkGroupCodec = t.strict({
  title: t.union([t.string, t.null]),
  links: t.array(FooterLinkCodec),
});

const FooterLinkGroupWithSocialCodec = t.strict({
  title: t.string,
  links: t.array(FooterLinkCodec),
  socialLinks: t.array(FooterLinkSocialCodec),
});

const FooterDataCodec = t.strict({
  data: t.strict({
    legalInfo: t.string,
    showFundedByNextGenerationEULogo: t.boolean,
    companyLink: CompanyLinkCodec,
    links_services: FooterLinkGroupCodec,
    links_aboutUs: FooterLinkGroupCodec,
    links_resources: FooterLinkGroupCodec,
    links_followUs: FooterLinkGroupWithSocialCodec,
  }),
});

// Types
export type FooterData = t.TypeOf<typeof FooterDataCodec>;

export const getFooter = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: Locale }): Promise<FooterData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/footer/?locale=${locale}
&populate[0]=companyLink
&populate[1]=links_aboutUs.links
&populate[2]=links_followUs.links
&populate[3]=links_followUs.socialLinks.icon
&populate[4]=links_resources.links
&populate[5]=links_services.links
      `,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      },
    ),
    FooterDataCodec,
  );
