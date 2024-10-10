'use client';
import { PreFooterAttributes } from '@/lib/fetch/preFooter';
import { PreFooter as PreFooterRC } from '@react-components/components';
import { PreFooterProps } from '@react-components/types';

const makePreFooterProps = ({
  storeButtons,
  background,
  ctaButtons,
  ...rest
}: PreFooterAttributes): PreFooterProps => ({
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

const PreFooter = (props: PreFooterAttributes) => (
  <PreFooterRC {...makePreFooterProps(props)} />
);

export default PreFooter;
