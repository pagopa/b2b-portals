import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { LinkTypesCodec } from './types/LinkTypes';
import { AppEnv } from '@/AppEnv';

// Codec
const CompanyLinkCodec = t.strict({
  href: t.string,
  ariaLabel: t.union([t.string, t.null]),
});

export const FooterLinkCodec = t.strict({
  text: t.union([t.string, t.null]),
  href: t.string,
  linkType: LinkTypesCodec,
  ariaLabel: t.union([t.string, t.null]),
  icon: t.union([t.string, t.null]),
});

const FooterSectionCodec = t.strict({
  title: t.union([t.string, t.null]),
  links: t.array(FooterLinkCodec),
});

const FooterCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      legalInfo: t.string,
      showFundedByNextGenerationEULogo: t.boolean,
      companyLink: CompanyLinkCodec,
      links_aboutUs: FooterSectionCodec,
      links_followUs: FooterSectionCodec,
      links_resources: FooterSectionCodec,
      links_services: FooterSectionCodec,
    }),
  }),
});

// Types
export type Footer = t.TypeOf<typeof FooterCodec>;

export const getFooter = ({ config, fetchFun }: AppEnv): Promise<Footer> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/footer/?populate[0]=companyLink,links_aboutUs.links,links_followUs.links,links_resources.links,links_services.links`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    FooterCodec
  );
