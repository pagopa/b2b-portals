'use client';
import { PressReleaseSection } from '@/lib/fetch/types/PageSection';
import { PressRelease as PressReleaseRC } from '@react-components/components';
import { PressReleaseProps } from '@react-components/types';

const makePressReleaseProps = ({
  eyelet,
  title,
  subtitle,
  body,
  ctaText,
  ctaHref,
  sectionID,
}: PressReleaseSection): PressReleaseProps => ({
  title,
  eyelet: eyelet || '',
  subtitle: subtitle || '',
  body,
  ctaText: ctaText || '',
  ctaHref: ctaHref || '',
  sectionID: sectionID || '',
});

const PressRelease = (props: PressReleaseSection) => (
  <PressReleaseRC {...makePressReleaseProps(props)} />
);

export default PressRelease;
