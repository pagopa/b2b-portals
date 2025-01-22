import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import {
  StrapiImageRequiredSchema,
  StrapiImageSchema,
} from './types/StrapiImage';
import { HeaderMUIIconCodec } from './types/icons/HeaderIcon';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

// TODO: Update all API calls to adapt to Strapi V5

const HeaderPageDataCodec = t.strict({
  attributes: t.strict({
    slug: t.string,
  }),
});

const HeaderPageCodec = t.strict({
  data: t.union([HeaderPageDataCodec, t.null]),
});

const HeaderSublinkCodec = t.strict({
  label: t.string,
  sectionID: t.union([t.string, t.null]),
  page: HeaderPageCodec,
  externalURL: t.union([t.string, t.null]),
});

const HeaderSublinkGroupCodec = t.strict({
  title: t.string,
  sublinks: t.array(HeaderSublinkCodec),
});

const MenuCodec = t.strict({
  links: t.array(
    t.strict({
      label: t.string,
      alignRight: t.boolean,
      page: HeaderPageCodec,
      sectionID: t.union([t.string, t.null]),
      sublinks: t.array(HeaderSublinkCodec),
    }),
  ),
});

const MegaMenuCodec = t.strict({
  links: t.array(
    t.strict({
      label: t.string,
      sublinkGroups: t.array(HeaderSublinkGroupCodec),
    }),
  ),
});

const DrawerLinkCardCodec = t.strict({
  title: t.string,
  subtitle: t.string,
  stackIcon: HeaderMUIIconCodec,
  buttonText: t.string,
  href: t.string,
});

const DrawerCtaCardCodec = t.strict({
  title: t.string,
  subtitle: t.string,
  buttonText: t.string,
  href: t.string,
});

const SideDrawerCodec = t.strict({
  buttonText: t.string,
  title: t.string,
  ctaCard: DrawerCtaCardCodec,
  linkCards: t.array(DrawerLinkCardCodec),
});

const StandardHeaderCodec = t.strict({
  __component: t.literal('headers.standard-header'),
  logo: StrapiImageSchema,
  productName: t.string,
  beta: t.boolean,
  supportLink: t.union([t.string, t.null]),
  menu: MenuCodec,
  drawer: t.union([SideDrawerCodec, t.null]),
});

const MegaHeaderCodec = t.strict({
  __component: t.literal('headers.mega-header'),
  logo: StrapiImageRequiredSchema,
  ctaButton: t.union([CTAButtonSimpleCodec, t.null]),
  menu: MegaMenuCodec,
});

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      header: t.array(t.union([StandardHeaderCodec, MegaHeaderCodec])),
    }),
  }),
});

export type HeaderSublink = t.TypeOf<typeof HeaderSublinkCodec>;
export type HeaderSideDrawer = t.TypeOf<typeof SideDrawerCodec>;
export type HeaderSideDrawerCtaCard = t.TypeOf<typeof DrawerCtaCardCodec>;
export type HeaderSideDrawerLinkCard = t.TypeOf<typeof DrawerLinkCardCodec>;
export type HeaderData = t.TypeOf<typeof HeaderDataCodec>;
export type StandardHeaderData = t.TypeOf<typeof StandardHeaderCodec>;
export type MegaHeaderData = t.TypeOf<typeof MegaHeaderCodec>;

export const getHeader = ({
  config,
  fetchFun,
  locale,
}: AppEnv & { readonly locale: 'it' | 'en' }): Promise<HeaderData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/header?locale=${locale}&populate=header.logo,header.ctaButton,header.menu.links.page,header.menu.links.sublinks.page,header.menu.links.sublinkGroups.sublinks.page,header.drawer.ctaCard,header.drawer.linkCards`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
          'Strapi-Response-Format': 'v4',
        },
      },
    ),
    HeaderDataCodec,
  );
