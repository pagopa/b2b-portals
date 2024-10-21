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

const makePageSwitchProps = ({
  subtitle,
  sections,
  themeVariant,
  ...rest
}: PageSwitchSection & { themeVariant: ThemeVariant }): PageSwitchProps => ({
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  sections: sections.map((section) => ({
    id: section.id,
    buttonText: section.buttonText,
    contents: section.contents.map((props) => {
      // eslint-disable-next-line no-underscore-dangle
      switch (props.__component) {
        case 'sections.editorial':
          return {
            type: 'Editorial',
            props: makeEditorialProps({ ...props, themeVariant }),
          };
        case 'sections.cards':
          return {
            type: 'Cards',
            props: makeCardsProps({ ...props, themeVariant }),
          };
        case 'sections.banner-link':
          return {
            type: 'BannerLink',
            props: makeBannerLinkProps({ ...props, themeVariant }),
          };
      }
    }),
  })),
  ...rest,
});

const PageSwitch = (
  props: PageSwitchSection & { themeVariant: ThemeVariant }
) => <PageSwitchRC {...makePageSwitchProps(props)} />;

export default PageSwitch;
