'use client';
import { Editorial as EditorialEC } from '@pagopa/pagopa-editorial-components';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import { Stack } from '@mui/material';
import Image from 'next/image';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSection } from '@/lib/fetch/types/PageSection';
import Icon from '@/components/Icon';

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
  image: (
    <Image
      src={image.url}
      alt={image.alternativeText ?? ''}
      // Needed by Image, will be overwritten
      width={0}
      height={0}
    />
  ),
  ...(ctaButtons &&
    ctaButtons.length > 0 && {
      ctaButtons: ctaButtons.map(({ icon, ...ctaBtn }) => ({
        ...ctaBtn,
        color: theme === 'dark' ? 'negative' : 'primary',
        ...(icon && { startIcon: Icon(icon) }),
      })),
    }),
  ...rest,
});

const Editorial = (props: EditorialSection) => {
  const themeColor =
    props.theme === 'dark' ? 'primary.contrastText' : 'text.primary';

  return (
    <section id={props.sectionID || undefined}>
      <Stack
        sx={{
          section: {
            ...(props.theme === 'dark' && {
              backgroundColor: 'custom.backgroundColorDark',
            }),
          },
          img: {
            maxHeight: 490,
            width: '100%',
          },
          '.MuiTypography-root': {
            color: themeColor,
            a: {
              color: themeColor,
              fontWeight: 'bold',
            },
          },
          '.MuiTypography-h4': {
            color: themeColor,
          },
          '.MuiTypography-body2': {
            color: themeColor,
          },
          '.MuiTypography-overline': {
            ...(props.theme === 'light' && {
              color: 'text.secondary',
            }),
          },
        }}
      >
        <EditorialEC {...makeEditorialProps(props)} />
      </Stack>
    </section>
  );
};

export default Editorial;
