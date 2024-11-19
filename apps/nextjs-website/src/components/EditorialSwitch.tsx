'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSwitch as EditorialSwitchRC } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeEditorialSwitchProps = ({
  locale,
  defaultLocale,
  subtitle,
  sections,
  ...rest
}: EditorialSwitchSection & SiteWidePageData): EditorialSwitchProps => ({
  ...(subtitle && {
    subtitle: MarkdownRenderer({ markdown: subtitle, locale, defaultLocale }),
  }),
  sections: sections.map(({ content, ...section }) => ({
    ...section,
    content: makeEditorialProps({
      __component: 'sections.editorial',
      ...content,
      themeVariant: rest.themeVariant,
      locale,
      defaultLocale,
    }),
  })),
  ...rest,
});

const EditorialSwitch = (props: EditorialSwitchSection & SiteWidePageData) => (
  <EditorialSwitchRC {...makeEditorialSwitchProps(props)} />
);

export default EditorialSwitch;
