import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';
import { Locale } from './siteWideSEO';
import { StrapiImageRequiredSchema } from './types/StrapiImage';
import PageRelationCodec from './types/PageRelation';

// Codec
const CompanyLinkCodec = t.strict({
  href: t.string,
  ariaLabel: t.string,
});

const FooterLinkCodec = t.strict({
  label: t.string,
  href: t.union([t.string, t.null]),
  page: t.union([PageRelationCodec, t.null]),
  ariaLabel: t.union([t.string, t.null]),
  showOneTrustPreferencies: t.union([t.boolean, t.null]),
});

const FooterLinkSocialCodec = t.strict({
  icon: StrapiImageRequiredSchema,
  href: t.string,
  ariaLabel: t.string,
});

const FooterLinkSocialByNameCodec = t.strict({
  icon: t.union([
    t.literal('linkedin'),
    t.literal('instagram'),
    t.literal('medium'),
    t.literal('youtube'),
    t.literal('threads'),
    t.literal('twitter'),
  ]),
  href: t.string,
  ariaLabel: t.union([t.string, t.null]),
  title: t.string,
});

const FooterLinkGroupCodec = t.strict({
  title: t.union([t.string, t.null]),
  links: t.array(FooterLinkCodec),
});

const FooterLinkAriaLabelGroupCodec = t.strict({
  ariaLabel: t.union([t.string, t.null]),
  links: t.array(FooterLinkCodec),
});

const FooterLinkGroupWithSocialCodec = t.strict({
  title: t.string,
  links: t.array(FooterLinkCodec),
  socialLinks: t.array(FooterLinkSocialByNameCodec),
});

const StandardFooterCodec = t.strict({
  __component: t.literal('footers.standard-footer'),
  legalInfo: t.string,
  showFundedByNextGenerationEULogo: t.boolean,
  companyLink: CompanyLinkCodec,
  links_resources: FooterLinkGroupCodec,
  links_aboutUs: FooterLinkGroupCodec,
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
  links: FooterLinkGroupCodec,
  bottomLinks: t.union([FooterLinkAriaLabelGroupCodec, t.null]),
  socialLinks: t.union([FooterLinkSocialGroupCodec, t.null]),
  hashtags: t.union([FooterHashtagGroupCodec, t.null]),
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
&populate[1]=footer.links_aboutUs.links.page
&populate[2]=footer.links_followUs.links.page
&populate[3]=footer.links_followUs.socialLinks.icon
&populate[4]=footer.links_resources.links.page
&populate[5]=footer.links_services.links.page
&populate[6]=footer.bottomLinks.links.page
&populate[7]=footer.links.links.page
&populate[8]=footer.socialLinks.socialLinks.icon
&populate[9]=footer.hashtags.hashtags
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
