'use client';
import { Editorial as EditorialEC } from '@pagopa/pagopa-editorial-components';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { Stack } from '@mui/material';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import MUIIcon from '@/components/Icon';

const makeEditorialProps = ({
  theme,
  eyelet,
  body,
  image,
  ctaButtons,
  ...rest
}: EditorialSection): EditorialProps => ({
  ...(eyelet && { eyelet }),
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  image: <img src={image.url} alt={image.alternativeText ?? undefined} />,
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        color: theme === 'dark' ? 'negative' : 'primary',
        ...(icon && { startIcon: MUIIcon(icon) }),
      })),
    }),
  ...rest,
});

const Editorial = (props: EditorialSection) => (
  <section id={props.sectionID || undefined}>
    <Stack
      sx={{
        img: {
          maxHeight: 490,
        },
        '.MuiTypography-root': {
          color:
            props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
          a: {
            color:
              props.theme === 'dark' ? 'primary.contrastText' : 'text.primary',
          },
        },
      }}
    >
      <EditorialEC {...makeEditorialProps(props)} />
    </Stack>
  </section>
);

export default Editorial;
