'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import { makeCardsProps } from './Cards';
import { makeBannerLinkProps } from './BannerLink';
import MarkdownRenderer from './MarkdownRenderer';
import { PageSwitch as PageSwitchRC } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { PageSwitchSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { PageSwitchContent } from '@react-components/types/Page-Switch/Page-Switch.types';

const makePageSwitchPageSections = (
  sections: PageSwitchSection['pages'][0]['sections'],
  siteWidePageData: SiteWidePageData,
): PageSwitchContent[] =>
  sections.map((section) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (section.__component) {
      case 'sections.editorial':
        return {
          type: 'Editorial',
          props: makeEditorialProps({ ...section, ...siteWidePageData }),
        };
      case 'sections.cards':
        return {
          type: 'Cards',
          props: makeCardsProps({ ...section, ...siteWidePageData }),
        };
      case 'sections.banner-link':
        return {
          type: 'BannerLink',
          props: makeBannerLinkProps({ ...section, ...siteWidePageData }),
        };
    }
  });

const makePageSwitchProps = ({
  locale,
  defaultLocale,
  subtitle,
  pages,
  ...rest
}: PageSwitchSection & SiteWidePageData): PageSwitchProps => ({
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  pages: pages.map((page) => ({
    id: page.id,
    buttonText: page.buttonText,
    sections: makePageSwitchPageSections(page.sections, {
      themeVariant: rest.themeVariant,
      locale,
      defaultLocale,
    }),
  })),
  ...rest,
});

const PageSwitch = (props: PageSwitchSection & SiteWidePageData) => {
  // No pages (or a single page) for PageSwitch have been input, notify of the problem in preview
  if (props.pages.length < 2) {
    return (
      <section
        style={{
          height: '100vh',
          width: '40rem',
          maxWidth: '90vw',
          margin: '0 auto',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <p style={{ textAlign: 'center' }}>
          Componente PageSwitch: Inserire almeno due pagine
        </p>
      </section>
    );
  }

  return <PageSwitchRC {...makePageSwitchProps(props)} />;
};

export default PageSwitch;
