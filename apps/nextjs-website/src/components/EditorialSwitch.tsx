'use client';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSwitch as EditorialSwitchRC } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';

const makeEditorialSwitchProps = ({
  toptitle,
  topsubtitle,
  sections,
  ...rest
}: EditorialSwitchSection): EditorialSwitchProps => ({
  toptitle,
  ...(topsubtitle && { subtitle: MarkdownRenderer({ markdown: topsubtitle }) }),
  sections: sections.map(({ button, content }) => ({
    button,
    content: {
      ...content,
      body: MarkdownRenderer({ markdown: content.body, variant: 'body2' }),
    },
  })),
  ...rest,
});

const EditorialSwitch = (props: EditorialSwitchSection) => (
  <EditorialSwitchRC {...makeEditorialSwitchProps(props)} />
);

export default EditorialSwitch;
