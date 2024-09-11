'use client';
import MarkdownRenderer from './MarkdownRenderer';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';

const makePressReleaseProps = ({
  eyelet,
  subtitle,
  body,
  ...rest
}: PressReleaseSection): PressReleaseProps => ({
  ...(eyelet && { eyelet }),
  ...(subtitle && { subtitle: MarkdownRenderer({ markdown: subtitle }) }),
  body: MarkdownRenderer({ markdown: body }),
  ...rest,
});

const PressRelease = (props: PressReleaseSection) => (
  <PressReleaseRC {...makePressReleaseProps(props)} />
);

export default PressRelease;
