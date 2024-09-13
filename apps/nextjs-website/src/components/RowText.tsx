'use client';
import React from 'react';
import { RowText as RowTextRC } from '@react-components/components';
import { RowTextProps } from '@react-components/types';
import { RowTextSection } from '@/lib/fetch/types/PageSection';

const makeRowTextProps = ({
  subtitle,
  body,
  ...rest
}: RowTextSection): RowTextProps => ({
  ...(subtitle && { subtitle }),
  ...(body && { body }),
  ...rest,
});

const RowText = (props: RowTextSection) => (
  <RowTextRC {...makeRowTextProps(props)} />
);

export default RowText;
