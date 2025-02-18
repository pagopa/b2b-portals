'use client';
import { PreFooterAttributes } from '@/lib/fetch/preFooter';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PreFooter as PreFooterRC } from '@react-components/components';
import { LocalizeURL } from '@/lib/linkLocalization';
import { PreFooterProps } from '@react-components/types';

const makePreFooterProps = ({
  locale,
  defaultLocale,
  storeButtons,
  background,
  ctaButtons,
  exclude,
  ...rest
}: PreFooterAttributes & SiteWidePageData): PreFooterProps => ({
  ...(background && { background: background.url }),
  ...(storeButtons && {
    storeButtons: {
      ...(storeButtons.hrefGoogle && { hrefGoogle: storeButtons.hrefGoogle }),
      ...(storeButtons.hrefApple && { hrefApple: storeButtons.hrefApple }),
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map(({ href, ...ctaButton }) => ({
      ...ctaButton,
      href: LocalizeURL({ URL: href, locale, defaultLocale }),
    })),
  }),
  ...(exclude.length > 0 && {
    excludeSlugs: exclude.map((obj) => obj.slug),
  }),
  ...rest,
});

const PreFooter = (props: PreFooterAttributes & SiteWidePageData) => (
  <PreFooterRC {...makePreFooterProps(props)} />
);

export default PreFooter;
