'use client';
import { Cards as CardsEC } from '@pagopa/pagopa-editorial-components';
import { CardsProps } from '@pagopa/pagopa-editorial-components/dist/components/Cards';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import Icon from './Icon';
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
        color: rest.theme === 'dark' ? 'negative' : 'primary',
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  ...rest,
});

const Cards = (props: CardsSection) => (
  <section id={props.sectionID || undefined}>
    <Stack
      sx={{
        section: {
          ...(props.theme === 'dark' && {
            backgroundColor: 'custom.color',
          }),
          img: {
            display: 'none',
          },
        },
        '.MuiCardContent-root': {
          '.MuiSvgIcon-fontSizeMedium': {
            width: '2rem',
            height: '2rem',
            marginLeft: '0.5rem',
          },
        },
        '.MuiButton-root': {
          marginTop: '1rem',
        },
        '.MuiLink-root': {
          fontFamily: '"Titillium Web",sans-serif;',
          fontSize: '1.125rem', // 18px
          fontWeight: 700,
        },
        '.MuiTypography-body2': {
          color:
            props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
          a: {
            fontWeight: 700,
            color:
              props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
          },
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
      <CardsEC {...makeCardsProps(props)} />
    </Stack>
  </section>
);

export default Cards;
