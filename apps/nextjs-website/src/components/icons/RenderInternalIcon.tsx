import Medium from './Medium';
import { InternalSocialIcon } from '@/lib/fetch/types/InternalIcons';

// Type of icon prop will be expanded when more internal icons are added
// For example (icon: InternalSocialIcon | InternalCardIcon | InternalFeatureIcon)

export const RenderInternalIcon = (_icon: InternalSocialIcon): JSX.Element => (
  // We will expand this component with a switch statement
  // once we add more internal icons (Akin to MUIIcon.tsx)
  <Medium />
);
