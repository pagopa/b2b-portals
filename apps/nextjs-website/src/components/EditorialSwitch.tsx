'use client';
import React from 'react';
import { makeEditorialProps } from './Editorial';
import { EditorialSwitch as EditorialSwitchRC } from '@react-components/components';
import { EditorialSwitchProps } from '@react-components/types';
import { EditorialSwitchSection } from '@/lib/fetch/types/PageSection';

const makeEditorialSwitchProps = ({
  subtitle,
  sections,
  ...rest
}: EditorialSwitchSection): EditorialSwitchProps => ({
  ...(subtitle && { subtitle }),
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
