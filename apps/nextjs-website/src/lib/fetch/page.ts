import * as t from 'io-ts';
import { extractFromResponse } from './extractFromResponse';
import { ThemeCodec } from './types/Theme';
import { AppEnv } from '@/AppEnv';

const LinkCodec = t.strict({
  text: t.union([t.string, t.null]),
  href: t.string,
  linkType: t.keyof({
    internal: null,
    external: null,
    wrapper: null,
    social: null,
  }),
  ariaLabel: t.union([t.string, t.null]),
  icon: t.union([t.string, t.null]),
});

const StepCodec = t.strict({
  id: t.number,
  title: t.string,
  description: t.string,
  icon: t.union([t.string, t.null]),
  iconColor: t.keyof({
    inherit: null,
    primary: null,
    secondary: null,
    success: null,
    error: null,
    info: null,
    warning: null,
  }),
});

const HowToSectionCodec = t.strict({
  __component: t.literal('sections.how-to'),
  title: t.string,
  theme: ThemeCodec,
  rowMaxSteps: t.union([t.number, t.null]),
  stepsAlignment: t.keyof({
    center: null,
    left: null,
    right: null,
  }),
  link: t.union([LinkCodec, t.null]),
  steps: t.array(StepCodec),
});

const PageCodec = t.strict({
  data: t.strict({
    attributes: t.strict({
      sections: t.array(HowToSectionCodec),
    }),
  }),
});

// Types
export type PageData = t.TypeOf<typeof PageCodec>;
export type HowToSectionData = t.TypeOf<typeof HowToSectionCodec>;

export const getPage = ({
  config,
  fetchFun,
  id,
}: AppEnv & { readonly id: number }): Promise<Readonly<PageData>> =>
  extractFromResponse(
    fetchFun(
      `${config.STRAPI_API_BASE_URL}/api/pages/${id}?populate[sections][populate][0]=ctaButtons,image,background,items,link,steps`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.STRAPI_API_TOKEN}`,
        },
      }
    ),
    PageCodec
  );
