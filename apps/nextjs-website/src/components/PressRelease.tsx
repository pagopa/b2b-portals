'use client';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types/PressRelease/PressRelease.types';

export const makePressReleaseProps = ({
  eyelet,
  title,
  subtitle,
  body,
  ctaText,
  ctaHref,
  theme,
  ...rest
}: PressReleaseSection): PressReleaseProps => ({
  eyelet,
  title,
  subtitle,
  body,
  ctaText,
  ctaHref,
  theme,
  ...rest,
});

const PressReleaseComponent = (props: PressReleaseSection) => (
  <PressRelease {...makePressReleaseProps(props)} />
);

export default PressReleaseComponent;
