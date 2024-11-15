'use client';
import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';
import { RowText as RowTextRC } from '@react-components/components';
import { RowTextProps } from '@react-components/types';
import { RowTextSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

const makeRowTextProps = ({
  locale,
  defaultLocale,
  subtitle,
  body,
  ...rest
}: RowTextSection & Omit<SiteWidePageData, 'themeVariant'>): RowTextProps => ({
  ...(subtitle && { subtitle }),
  ...(body && {
    body: MarkdownRenderer({
      markdown: body,
      locale,
      defaultLocale,
      variant: 'body2',
    }),
  }),
  ...rest,
});

const RowText = (
  props: RowTextSection & Omit<SiteWidePageData, 'themeVariant'>
) => <RowTextRC {...makeRowTextProps(props)} />;

export default RowText;
