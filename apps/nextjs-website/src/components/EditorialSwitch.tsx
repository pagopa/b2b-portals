'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSwitch as EditorialSwitchRC } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';
import { ThemeVariant } from '@/lib/fetch/siteWideSEO';

const makeEditorialSwitchProps = ({
  subtitle,
  sections,
  ...rest
}: EditorialSwitchSection & {
  themeVariant: ThemeVariant;
}): EditorialSwitchProps => ({
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  sections: sections.map(({ content, ...section }) => ({
    ...section,
    content: makeEditorialProps({
      __component: 'sections.editorial',
      ...content,
      themeVariant: rest.themeVariant,
    }),
  })),
  ...rest,
});

const EditorialSwitch = (
  props: EditorialSwitchSection & { themeVariant: ThemeVariant }
) => <EditorialSwitchRC {...makeEditorialSwitchProps(props)} />;

export default EditorialSwitch;
