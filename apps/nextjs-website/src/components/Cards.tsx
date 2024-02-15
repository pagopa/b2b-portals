'use client';
import { Cards as CardsEC } from '@pagopa/pagopa-editorial-components';
import { CardsProps } from '@pagopa/pagopa-editorial-components/dist/components/Cards';
import { Stack } from '@mui/material';
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
  <Stack
    sx={{
      section: {
        ...(props.theme === 'dark' && { backgroundColor: 'pagoPA.main' }),
        img: {
          display: 'none',
        },
      },
      '.MuiSvgIcon-fontSizeMedium': {
        width: '2rem',
        height: '2rem',
        marginLeft: '0.5rem',
      },
      '.MuiLink-root': {
        fontFamily: '"Titillium Web",sans-serif;',
        fontSize: '1.125rem', // 18px
        fontWeight: 700,
      },
      '.MuiTypography-body2': {
        color: props.theme === 'dark' ? 'primary.contrastText' : 'primary.main',
      },
      '.MuiTypography-body1': {
        fontSize: '1.125rem', // 18px
      },
      '.MuiTypography-h2': {
        fontSize: '2rem', // 32px
        fontWeight: 700,
      },
      '.MuiTypography-h6': {
        fontWeight: 700,
      },
    }}
  >
    <section id={props.sectionID || undefined}>
      <CardsEC {...makeCardsProps(props)} />
    </section>
  </Stack>
);

export default Cards;
