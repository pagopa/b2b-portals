'use client';
import React from 'react';
import { RichBannerSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';
import { RichBannerProps } from '@react-components/types';
import MarkdownRenderer from './MarkdownRenderer';
import { RichBanner as RichBannerRC } from '@react-components/components';

const makeRichBannerProps = ({
  locale,
  defaultLocale,
  title,
  body,
  ...rest
}: RichBannerSection & SiteWidePageData): RichBannerProps => ({
  ...(title && {
    title: MarkdownRenderer({
      markdown: title,
      locale,
      defaultLocale,
      variant: 'body1',
    }),
  }),
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

const RichBanner = (props: RichBannerSection & SiteWidePageData) => (
  <RichBannerRC {...makeRichBannerProps(props)} />
);

export default RichBanner;
