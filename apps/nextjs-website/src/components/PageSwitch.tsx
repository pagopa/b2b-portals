'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import { makeCardsProps } from './Cards';
import { makeBannerLinkProps } from './BannerLink';
import MarkdownRenderer from './MarkdownRenderer';
import { PageSwitch as PageSwitchRC } from '@react-components/components';
import { PageSwitchProps } from '@react-components/types';
import { PageSwitchSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';
import { PageSwitchContent } from '@react-components/types/Page-Switch/Page-Switch.types';

const makePageSwitchPageSections = (
  sections: PageSwitchSection['pages']['data'][0]['attributes']['sections'],
  themeVariant: ThemeVariant
): PageSwitchContent[] =>
  sections.map((section) => {
    // eslint-disable-next-line no-underscore-dangle
    switch (section.__component) {
      case 'sections.editorial':
        return {
          type: 'Editorial',
          props: makeEditorialProps({ ...section, themeVariant }),
        };
      case 'sections.cards':
        return {
          type: 'Cards',
          props: makeCardsProps({ ...section, themeVariant }),
        };
      case 'sections.banner-link':
        return {
          type: 'BannerLink',
          props: makeBannerLinkProps({ ...section, themeVariant }),
        };
    }
  });

const makePageSwitchProps = ({
  subtitle,
  pages,
  ...rest
}: PageSwitchSection & { themeVariant: ThemeVariant }): PageSwitchProps => ({
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  pages: pages.data.map((page) => ({
    id: page.id,
    buttonText: page.attributes.buttonText,
    sections: makePageSwitchPageSections(
      page.attributes.sections,
      rest.themeVariant
    ),
  })),
  ...rest,
});

const PageSwitch = (
  props: PageSwitchSection & { themeVariant: ThemeVariant }
) => {
  // No pages (or a single page) for PageSwitch have been input, notify of the problem in preview
  if (props.pages.data.length < 2) {
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
