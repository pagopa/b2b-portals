'use client';
import { Cards as CardsEC } from '@pagopa/pagopa-editorial-components';
import { CardsProps } from '@pagopa/pagopa-editorial-components/dist/components/Cards';
import { Icon } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import { CardsSection } from '@/lib/fetch/types/PageSection';
import { formatValidMuiIcon, isValidMuiIcon } from '@/components/Icons';

const makeCardsProps = ({
  theme,
  text,
  items,
  ...rest
}: CardsSection): CardsProps => ({
  theme,
  text: {
    title: text.title,
    subtitle: text.subtitle,
    body: MarkdownRenderer({ markdown: text.body, variant: 'body2' }),
  },
  items: items.map((item) => ({
    cardIcon: {
      ...(isValidMuiIcon(item.cardIcon) && {
        icon: <Icon>{formatValidMuiIcon(item.cardIcon)}</Icon>,
      }),
    },
    title: item.title,
    text: item.text,
    link: {
      href: item.link.href,
      title: item.link.title,
      text: item.link.text,
    },
  })),
  ...rest,
});

const Cards = (props: CardsSection) => (
  <section>
    <CardsEC {...makeCardsProps(props)} />
  </section>
);

export default Cards;
