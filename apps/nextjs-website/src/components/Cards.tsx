'use client';
import { Cards as CardsEC } from '@pagopa/pagopa-editorial-components';
import { CardsProps } from '@pagopa/pagopa-editorial-components/dist/components/Cards';
import MarkdownRenderer from './MarkdownRenderer';
import { CardsSection } from '@/lib/fetch/types/PageSection';

const makeCardsProps = ({
  items,
  title,
  subtitle,
  body,
  ...rest
}: CardsSection): CardsProps => ({
  text: {
    title,
    ...(subtitle && { subtitle }),
    ...(body && {
      body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
    }),
  },
  items: items.map(
    ({ icon, label, linkHref, linkText, linkTitle, ...item }) => ({
      ...(icon && {
        cardIcon: {
          icon,
        },
      }),
      ...(label && { label }),
      ...(linkHref &&
        linkText &&
        linkTitle && {
          link: {
            href: linkHref,
            text: linkText,
            title: linkTitle,
          },
        }),
      ...item,
    })
  ),
  ...rest,
});

const Cards = (props: CardsSection) => (
  <section id={props.sectionID || undefined}>
    <CardsEC {...makeCardsProps(props)} />
  </section>
);

export default Cards;
