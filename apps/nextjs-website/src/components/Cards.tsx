'use client';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { Cards as CardsRC } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsSection } from '@/lib/fetch/types/PageSection';
import { SiteWidePageData } from '@/lib/fetch/siteWideSEO';

export const makeCardsProps = ({
  locale,
  defaultLocale,
  items,
  title,
  subtitle,
  body,
  ctaButtons,
  ...rest
}: CardsSection & SiteWidePageData): CardsProps => ({
  text: {
    title,
    ...(subtitle && { subtitle }),
    ...(body && {
      body: MarkdownRenderer({
        markdown: body,
        locale,
        defaultLocale,
        variant: 'body2',
      }),
    }),
  },
  items: items.map(({ icon, label, text, title, links }) => ({
    title,
    ...(icon.data && {
      iconURL: icon.data.attributes.url,
    }),
    ...(label && { label }),
    ...(text && { text }),
    ...(links.length > 0 && { links }),
  })),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  ...rest,
});

const Cards = (props: CardsSection & SiteWidePageData) => (
  <CardsRC {...makeCardsProps(props)} />
);

export default Cards;
