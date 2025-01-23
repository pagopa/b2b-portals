'use client';
import { PreHeader as PreHeaderRC } from '@react-components/components';
import { PreHeaderProps } from '@react-components/types';
import { PreHeaderAttributes } from '@/lib/fetch/preHeader';
import Icon from '@/components/Icon';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';

// Add styles, SEO related values and extra JS parameters for singular components
// Styling 'naked' variant for PreHeader using 'text' variant as a base
// (since editorial-components does not accept 'naked' variant)
const makeCtas = (
  ctaButtons: PreHeaderAttributes['leftCtas'],
  { themeVariant, locale, defaultLocale }: SiteWidePageData,
): CtaButtonProps[] =>
  ctaButtons.map(({ href, ...ctaButton }) => ({
    ...ctaButton,
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: 'text',
    ...(ctaButton.icon && { startIcon: Icon(ctaButton.icon) }),
    href: LocalizeURL({ URL: href, locale, defaultLocale }),
    themeVariant,
  }));

const makePreHeaderProps = ({
  leftCtas,
  rightCtas,
  themeVariant,
  locale,
  defaultLocale,
}: PreHeaderAttributes & SiteWidePageData): PreHeaderProps => ({
  leftCtas: makeCtas(leftCtas, { themeVariant, locale, defaultLocale }),
  rightCtas: makeCtas(rightCtas, { themeVariant, locale, defaultLocale }),
});

const PreHeader = (preHeaderData: PreHeaderAttributes & SiteWidePageData) => (
  <PreHeaderRC {...makePreHeaderProps(preHeaderData)} />
);

export default PreHeader;
