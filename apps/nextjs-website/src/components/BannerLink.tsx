'use client';
import { BannerLink as BannerLinkEC } from '@pagopa/pagopa-editorial-components';
import { BannerLinkProps } from '@pagopa/pagopa-editorial-components/dist/components/BannerLink';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import { BannerLinkSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

const makeBannerLinkProps = ({
  body,
  decoration,
  ctaButtons,
  ...rest
}: BannerLinkSection): BannerLinkProps => ({
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  ...(decoration && {
    decoration: {
      src: decoration.url,
      alt: decoration.alternativeText,
      width: '60px',
      height: '60px',
    },
  }),
  ...(ctaButtons.length > 0 && {
    ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
      ...ctaBtn,
      color: rest.theme === 'dark' ? 'negative' : 'primary',
      ...(icon && { startIcon: Icon(icon) }),
    })),
  }),
  ...rest,
});

const BannerLink = (props: BannerLinkSection) => (
  <section id={props.sectionID || undefined}>
    <Stack
      sx={{
        '.MuiTypography-body2': {
          color:
            props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
        },
      }}
    >
      <BannerLinkEC {...makeBannerLinkProps(props)} />
    </Stack>
  </section>
);

export default BannerLink;
