import React, { useEffect, useMemo, useState } from 'react';
import { PreFooter } from '@react-components/components';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

export interface StorybookPreFooterProps
  extends Omit<PreFooterProps, 'background'> {
  ctaVariant?: 'none' | 'store' | 'cta';
  background?: string | File | File[];
  showBackground?: boolean;
}

export const StorybookPreFooter: React.FC<StorybookPreFooterProps> = ({
  ctaVariant,
  background,
  showBackground,
  theme,
  title,
  layout,
  ...props
}) => {
  const [backgroundUrl, setBackgroundUrl] = useState<string | undefined>();

  const effectiveCtaVariant = ctaVariant ?? 'none';
  const effectiveShowBackground = showBackground ?? true;

  const showStoreButtons = effectiveCtaVariant === 'store';
  const showCtaButtons = effectiveCtaVariant === 'cta';

  const ctaButtons = useMemo(() => {
    if (!showCtaButtons) return undefined;
    return [
      { text: 'Scopri di più', href: '#', variant: 'contained' },
      { text: 'Inizia ora', href: '#', variant: 'contained' },
    ] as CtaButtonProps[];
  }, [showCtaButtons]);

  const storeButtons = useMemo(() => {
    if (!showStoreButtons) return undefined;
    return {
      hrefGoogle: 'https://play.google.com',
      hrefApple: 'https://apple.com',
    };
  }, [showStoreButtons]);

  useEffect(() => {
    let cleanup: (() => void) | undefined;

    if (!effectiveShowBackground) {
      setBackgroundUrl(undefined);
      return;
    }

    let customImage: string | undefined;
    const backgroundFile = Array.isArray(background)
      ? background[0]
      : background;

    if (backgroundFile instanceof File) {
      const fileUrl = URL.createObjectURL(backgroundFile);
      customImage = fileUrl;
      cleanup = () => URL.revokeObjectURL(fileUrl);
    } else if (
      typeof backgroundFile === 'string' &&
      backgroundFile.trim() !== ''
    ) {
      customImage = backgroundFile;
    }

    setBackgroundUrl(
      customImage ?? 'https://assets.innovazione.gov.it/1610704590-io.png'
    );

    return cleanup;
  }, [background, effectiveShowBackground]);

  const finalProps: PreFooterProps = {
    ...props,
    theme: theme!,
    layout: layout!,
    title: title!,
    background: effectiveShowBackground ? (backgroundUrl ?? '') : '',
    ...(effectiveCtaVariant === 'cta' && { ctaButtons: ctaButtons! }),
    ...(effectiveCtaVariant === 'store' && { storeButtons: storeButtons! }),
  };

  return <PreFooter key={effectiveCtaVariant} {...finalProps} />;
};
