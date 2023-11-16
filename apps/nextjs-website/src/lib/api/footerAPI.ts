import * as t from 'io-ts';
import { extractFromResponse } from '../extractFromResponse';
import { linkTypes } from '../../types/io-ts-declarations';
import { AppEnv } from '@/AppEnv';

// Codec
const FooterLinkCodec = t.strict({
  id: t.number,
  text: t.string,
  href: t.string,
  linkType: linkTypes,
  ariaLabel: t.string,
  icon: t.union([t.string, t.null]),
});

const FooterSectionCodec = t.strict({
  id: t.number,
  title: t.string,
  links: t.array(FooterLinkCodec),
});

const FooterCodec = t.strict({
  data: t.strict({
    id: t.number,
    attributes: t.strict({
      legalInfo: t.string,
      showFundedByNextGenerationEULogo: t.boolean,
      companyLink: FooterLinkCodec,
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
