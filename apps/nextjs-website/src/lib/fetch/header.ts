import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { CTAButtonSimpleCodec } from './types/CTAButton';
import { StrapiImageSchema } from './types/StrapiImage';
import { extractTenantStrapiApiData } from './tenantApiData';
import { AppEnv } from '@/AppEnv';

const HeaderPageDataCodec = t.strict({
  attributes: t.strict({
    slug: t.string,
  }),
});

const HeaderPageCodec = t.strict({
  data: t.union([HeaderPageDataCodec, t.null]),
});

const HeaderRequiredPageCodec = t.strict({
  data: HeaderPageDataCodec,
});

const HeaderSublinkCodec = t.strict({
  label: t.string,
  sectionID: t.union([t.string, t.null]),
  page: HeaderRequiredPageCodec,
});

const HeaderSublinkGroupCodec = t.strict({
  title: t.string,
  sublinks: t.array(HeaderSublinkCodec),
});

const MenuCodec = t.array(
  t.strict({
    __component: t.literal('menu.menu'),
    links: t.array(
      t.strict({
        label: t.string,
        alignRight: t.boolean,
        page: HeaderPageCodec,
        sectionID: t.union([t.string, t.null]),
        sublinks: t.array(HeaderSublinkCodec),
      })
    ),
  })
);

const MegaMenuCodec = t.array(
  t.strict({
    __component: t.literal('menu.mega-menu'),
    links: t.array(
      t.strict({
        label: t.string,
        sublinkGroups: t.array(HeaderSublinkGroupCodec),
      })
    ),
  })
);

const HeaderWithMenuDataCodec = t.strict({
  logo: StrapiImageSchema,
  productName: t.string,
  beta: t.boolean,
  ctaButtons: t.array(CTAButtonSimpleCodec),
  menu: MenuCodec,
});

const HeaderWithMegaMenuDataCodec = t.strict({
  logo: StrapiImageSchema,
  productName: t.string,
  beta: t.boolean,
  ctaButtons: t.array(CTAButtonSimpleCodec),
  menu: MegaMenuCodec,
});

export const HeaderDataCodec = t.strict({
  data: t.strict({
    attributes: t.union([HeaderWithMenuDataCodec, HeaderWithMegaMenuDataCodec]),
  }),
});

export type HeaderSublink = t.TypeOf<typeof HeaderSublinkCodec>;
export type HeaderData = t.TypeOf<typeof HeaderDataCodec>;
export type HeaderWithMenuData = t.TypeOf<typeof HeaderWithMenuDataCodec>;
export type HeaderWithMegaMenuData = t.TypeOf<
  typeof HeaderWithMegaMenuDataCodec
>;

export const getHeader = ({ config, fetchFun }: AppEnv): Promise<HeaderData> =>
  extractFromResponse(
    fetchFun(
      `${
        extractTenantStrapiApiData(config).baseUrl
      }/api/header?populate=ctaButtons,logo,menu.links.page,menu.links.sublinks.page,menu.links.sublinkGroups.sublinks.page`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${extractTenantStrapiApiData(config).token}`,
        },
      }
    ),
    HeaderDataCodec
  );
