'use client';
import { PreHeader as PreHeaderRC } from '@react-components/components';
import { PreHeaderProps } from '@react-components/types';
import { PreHeader } from '@/lib/fetch/preHeader';
import Icon from '@/components/Icon';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

// Add styles, SEO related values and extra JS parameters for singular components
// Styling 'naked' variant for PreHeader using 'text' variant as a base
// (since editorial-components does not accept 'naked' variant)
const makeCtas = (
  ctaButtons: PreHeader['data']['attributes']['leftCtas']
): CtaButtonProps[] =>
  ctaButtons.map((ctaBtn) => ({
    ...ctaBtn,
    target: '_blank',
    rel: 'noopener noreferrer',
    variant: 'text',
    ...(ctaBtn.icon && { startIcon: Icon(ctaBtn.icon) }),
  }));

const makePreHeaderProps = (
  props: PreHeader['data']['attributes']
): PreHeaderProps => ({
  leftCtas: makeCtas(props.leftCtas),
  rightCtas: makeCtas(props.rightCtas),
});

const PreHeader = (preHeaderData: PreHeader['data']['attributes']) => (
  <PreHeaderRC {...makePreHeaderProps(preHeaderData)} />
);

export default PreHeader;
