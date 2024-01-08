'use client';
import { Editorial as EditorialEC } from '@pagopa/pagopa-editorial-components';
import { EditorialProps } from '@pagopa/pagopa-editorial-components/dist/components/Editorial';
import MarkdownRenderer from './MarkdownRenderer';
import { EditorialSection } from '@/lib/fetch/types/PageSection';

const makeEditorialProps = ({
  eyelet,
  body,
  image,
  ...rest
}: EditorialSection): EditorialProps => ({
  ...(eyelet && { eyelet }),
  body: MarkdownRenderer({ markdown: body, variant: 'body2' }),
  image: <img src={image?.url} alt={image?.alternativeText ?? ''} />,
  ...rest,
});

const Editorial = (props: EditorialSection) => (
  <section id={props.sectionID || undefined}>
    <EditorialEC {...makeEditorialProps(props)} />
  </section>
);

export default Editorial;
