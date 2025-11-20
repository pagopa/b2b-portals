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
  titleTag,
  ...rest
}: RowTextSection & SiteWidePageData): RowTextProps => ({
  ...(titleTag && { titleTag }),
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

const RowText = (props: RowTextSection & SiteWidePageData) => (
  <RowTextRC {...makeRowTextProps(props)} />
);

export default RowText;
