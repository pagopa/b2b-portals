import React, { useMemo } from 'react';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { PreFooter } from '@react-components/components';

export interface StorybookPreFooterProps extends PreFooterProps {
  showStoreButtons?: boolean;
  showCtaButtons?: boolean;
}

export const StorybookPreFooter = ({
  showStoreButtons,
  showCtaButtons,
  background,
  theme,
  ...props
}: StorybookPreFooterProps) => {
  const ctaButtons = useMemo(() => {
    return showCtaButtons
      ? ([
          { text: 'Scopri di più', href: '#', variant: 'contained' },
          { text: 'Inizia ora', href: '#', variant: 'contained' },
        ] satisfies CtaButtonProps[])
      : undefined;
  }, [showCtaButtons]);

  const storeButtons = useMemo(() => {
    return showStoreButtons
      ? {
          hrefGoogle: 'https://play.google.com',
          hrefApple: 'https://apple.com',
        }
      : undefined;
  }, [showStoreButtons]);

  const backgroundToUse =
    background && background.trim() !== '' ? background : undefined;

  return (
    <PreFooter
      {...props}
      theme={theme}
      {...(backgroundToUse ? { background: backgroundToUse } : {})}
      {...(ctaButtons ? { ctaButtons } : {})}
      {...(storeButtons ? { storeButtons } : {})}
    />
  );
};
