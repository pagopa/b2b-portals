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
  ariaLabel: t.union([t.string, t.null]),
  showOneTrustPreferencies: t.union([t.boolean, t.null]),
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

const StandardFooterCodec = t.strict({
  __component: t.literal('footers.standard-footer'),
  legalInfo: t.string,
  showFundedByNextGenerationEULogo: t.boolean,
  companyLink: CompanyLinkCodec,
  links_services: FooterLinkGroupCodec,
  links_aboutUs: FooterLinkGroupCodec,
  links_resources: FooterLinkGroupCodec,
  links_followUs: FooterLinkGroupWithSocialCodec,
});

const FooterLinkSocialGroupCodec = t.strict({
  title: t.union([t.string, t.null]),
  socialLinks: t.array(FooterLinkSocialCodec),
});

const HashtagCodec = t.strict({
  hashtag: t.string,
});
const FooterHashtagGroupCodec = t.strict({
  title: t.union([t.string, t.null]),
  hashtags: t.array(HashtagCodec),
});

const DesignersItaliaFooterCodec = t.strict({
  __component: t.literal('footers.designers-italia-footer'),
  links_SiteIndex: FooterLinkGroupCodec,
  links_Policies: FooterLinkGroupCodec,
  links_Social: FooterLinkSocialGroupCodec,
  hashtags: FooterHashtagGroupCodec,
});

const FooterDataCodec = t.strict({
  data: t.strict({
    footer: t.array(t.union([StandardFooterCodec, DesignersItaliaFooterCodec])),
  }),
});

// Types
export type FooterData = t.TypeOf<typeof FooterDataCodec>;
export type StandardFooterData = t.TypeOf<typeof StandardFooterCodec>;
export type DesignersItaliaFooterData = t.TypeOf<
  typeof DesignersItaliaFooterCodec
>;
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
&populate[0]=footer.companyLink
&populate[1]=footer.links_aboutUs.links
&populate[2]=footer.links_followUs.links
&populate[3]=footer.links_followUs.socialLinks.icon
&populate[4]=footer.links_resources.links
&populate[5]=footer.links_services.links
&populate[6]=footer.links_Policies.links
&populate[7]=footer.links_SiteIndex.links
&populate[8]=footer.links_Social.socialLinks
&populate[9]=footer.links_Social.socialLinks.icon
&populate[10]=footer.hashtags
&populate[11]=footer.hashtags.hashtags
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
