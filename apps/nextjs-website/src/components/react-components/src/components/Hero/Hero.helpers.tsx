import React from 'react';
import { Button, Typography } from '@mui/material';
import { CtaButton } from './Hero.types';

export const renderSubtitle = ({
  subtitle,
  textColor,
}: {
  subtitle: string | JSX.Element | undefined;
  textColor: string;
}) => {
  if (!subtitle) {
    return null;
  }
  if (React.isValidElement(subtitle)) {
    return subtitle;
  }
  return (
    <Typography variant='body1' color={textColor}>
      {subtitle}
    </Typography>
  );
};

export const renderButtons = ({
  ctaButtons,
}: {
  ctaButtons: ReadonlyArray<CtaButton | JSX.Element>;
}) =>
  ctaButtons.map((button, i) =>
    React.isValidElement(button) ? (
      button
    ) : (
      <Button
        key={`${(button as CtaButton).text}-${i}`}
        {...(button as CtaButton)}
      >
        {(button as CtaButton).text}
      </Button>
    )
  );

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

export const getBackgroundColor = (theme: string) =>
  theme === 'dark' ? 'primary.dark' : 'primary.paper';
