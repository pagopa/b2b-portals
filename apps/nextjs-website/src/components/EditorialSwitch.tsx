'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import { EditorialSwitch as EditorialSwitchRC } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';
import MarkdownRenderer from './MarkdownRenderer';

const makeEditorialSwitchProps = ({
  body,
  sections,
  ...rest
}: EditorialSwitchSection): EditorialSwitchProps => ({
  body: body ? (typeof body === 'string' ? MarkdownRenderer({ markdown: body, variant: 'body2' }) : body) : null,
  sections: sections.map(({ content, ...section }) => ({
    ...section,
    content: makeEditorialProps({
      __component: 'sections.editorial',
      ...content,
    }),
  })),
  ...rest,
});

const EditorialSwitch = (props: EditorialSwitchSection) => (
  <EditorialSwitchRC {...makeEditorialSwitchProps(props)} />
);

export default EditorialSwitch;
