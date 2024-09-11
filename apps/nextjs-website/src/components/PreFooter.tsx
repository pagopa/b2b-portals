'use client';
import { PreFooterSection } from '@/lib/fetch/types/PageSection';
import { PreFooter as PreFooterRC } from '@react-components/components';
import { PreFooterProps } from '@react-components/types';

const makePreFooterProps = ({
  storeButtons,
  background,
  ctaButtons,
  ...rest
}: PreFooterSection): PreFooterProps => ({
  ...(background.data && { background: background.data.attributes.url }),
  ...(storeButtons && {
    storeButtons: {
      ...(storeButtons.hrefGoogle && { hrefGoogle: storeButtons.hrefGoogle }),
      ...(storeButtons.hrefApple && { hrefApple: storeButtons.hrefApple }),
    },
  }),
  ...(ctaButtons.length > 0 && { ctaButtons }),
  ...rest,
});

const PreFooter = (props: PreFooterSection) => (
  <PreFooterRC {...makePreFooterProps(props)} />
);

export default PreFooter;
