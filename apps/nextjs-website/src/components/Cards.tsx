'use client';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
import { Cards as CardsRC } from '@react-components/components';
import { CardsProps } from '@react-components/types';
import { CardsSection } from '@/lib/fetch/types/PageSection';

const makeCardsProps = ({
  items,
  title,
  subtitle,
  body,
  ctaButtons,
  ...rest
}: CardsSection): CardsProps => ({
  text: {
    title,
    ...(subtitle && { subtitle }),
    ...(body && {
      body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
    }),
  },
  items: items.map(({ icon, label, text, title, links }) => ({
    title,
    ...(icon && {
      cardIcon: { icon },
    }),
    ...(label && { label }),
    ...(text && { text }),
    ...(links.length > 0 && {
      links: links.map((link) => ({ href: link.href, text: link.label })),
    }),
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

const Cards = (props: CardsSection) => <CardsRC {...makeCardsProps(props)} />;

export default Cards;
