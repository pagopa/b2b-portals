import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { SocialIconCodec } from './types/icons/SocialIcon';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

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
  icon: SocialIconCodec,
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
    attributes: t.strict({
      legalInfo: t.string,
      showFundedByNextGenerationEULogo: t.boolean,
      companyLink: CompanyLinkCodec,
      links_services: FooterLinkGroupCodec,
      links_aboutUs: FooterLinkGroupCodec,
      links_resources: FooterLinkGroupCodec,
      links_followUs: FooterLinkGroupWithSocialCodec,
    }),
  }),
});

// Types
export type FooterData = t.TypeOf<typeof FooterDataCodec>;

export const getFooter = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<FooterData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/footer/?locale=${locale}&populate[0]=companyLink,links_aboutUs.links,links_followUs.links,links_followUs.socialLinks,links_resources.links,links_services.links`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    FooterDataCodec
  );
