'use client';
import { Locale } from '@/lib/fetch/siteWideSEO';
import { GlobalsWrapper as GlobalsWrapperRC } from '@react-components/components';

interface GlobalsWrapperProps {
  locale: Locale;
  children: JSX.Element;
}

const GlobalsWrapper = ({ ...props }: GlobalsWrapperProps) => (
  <GlobalsWrapperRC {...props} />
);

export default GlobalsWrapper;
