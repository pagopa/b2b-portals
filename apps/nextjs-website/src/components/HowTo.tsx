'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { HowTo as HowToRC } from '@react-components/components';
import { HowToProps } from '@react-components/types';
import { HowToSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { LocalizeURL } from '@/lib/linkLocalization';
import Icon from '@/components/Icon';

const makeHowToProps = ({
  locale,
  defaultLocale,
  link,
  ctaButton,
  steps,
  customBgColor,
  ...rest
}: HowToSection & SiteWidePageData): HowToProps => ({
  ...(customBgColor && { customBgColor }),
  ...(link && {
    link: {
      label: link.label,
      href: LocalizeURL({ URL: link.href, locale, defaultLocale }),
      ...(link.ariaLabel && { ariaLabel: link.ariaLabel }),
    },
  }),
  ...(ctaButton && {
    ctaButton: {
      text: ctaButton.text,
      variant: ctaButton.variant,
      size: ctaButton.size,
      href: LocalizeURL({ URL: ctaButton.href, locale, defaultLocale }),
      ...(ctaButton.icon && { startIcon: Icon(ctaButton.icon) }),
      ...(ctaButton.openInNewTab && { openInNewTab: ctaButton.openInNewTab }),
      ...(ctaButton.ariaLabel && { ariaLabel: ctaButton.ariaLabel }),
    },
  }),
  steps: steps.map((step) => ({
    title: step.title,
    description: MarkdownRenderer({
      markdown: step.description,
      locale,
      defaultLocale,
      sx: {
        fontSize: '16px',
        '& p': {
          fontSize: '16px',
          marginTop: 0,
        },
      },
    }),
    ...(step.icon && {
      iconURL: step.icon.url,
    }),
  })),
  ...rest,
});

const HowTo = (props: HowToSection & SiteWidePageData) => (
  <HowToRC {...makeHowToProps(props)} />
);

export default HowTo;
