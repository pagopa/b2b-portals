import React, { ReactElement, useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { isJSX } from '../utils';
import { CtaButton } from './Components.types';

{
  /* COMMON PROPS */
}

export const useBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.dark : palette.background.paper;
};

export const useTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
};

export const useExtraTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.text.secondary;
};

export const useButtonColor = (theme: 'dark' | 'light') =>
  theme === 'dark' ? 'negative' : 'primary';

{
  /* HERO PROPS */
}

export const renderStringTitle = (
  title: string,
  textColor: string,
  size: 'small' | 'medium' | 'big' | undefined
) => (
  <Typography variant='h1' color={textColor} mb={size === 'small' ? 0 : 2}>
    {title}
  </Typography>
);

const renderElementTitle = (
  title: JSX.Element,
  textColor: string,
  _size: 'small' | 'medium' | 'big' | undefined
) =>
  React.isValidElement(title)
    ? React.cloneElement(
        title as ReactElement<{ style?: React.CSSProperties }>,
        { style: { color: textColor } }
      )
    : null;

export const renderHeroTitle = ({
  title,
  textColor,
  size,
}: {
  title: string | JSX.Element | undefined;
  textColor: string;
  size: 'small' | 'medium' | 'big' | undefined;
}) => {
  if (!title) {
    return null;
  }

  return typeof title === 'string'
    ? renderStringTitle(title, textColor, size)
    : renderElementTitle(title, textColor, size);
};

const renderStringSubtitle = (subtitle: string, textColor: string) => (
  <Typography variant='body1' style={{ color: textColor }}>
    {subtitle}
  </Typography>
);

const renderElementSubtitle = (subtitle: JSX.Element, textColor: string) =>
  React.isValidElement(subtitle)
    ? React.cloneElement(
        subtitle as ReactElement<{ style?: React.CSSProperties }>,
        { style: { color: textColor } }
      )
    : null;

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

  return typeof subtitle === 'string'
    ? renderStringSubtitle(subtitle, textColor)
    : renderElementSubtitle(subtitle, textColor);
};

const renderCtaButton = (button: CtaButton, i: number) => (
  <Button key={`${button.text}-${i}`} {...button}>
    {button.text}
  </Button>
);

const renderElementButton = (button: JSX.Element) => button;

export const renderButtons = ({
  ctaButtons,
}: {
  ctaButtons: ReadonlyArray<CtaButton | JSX.Element>;
}) =>
  ctaButtons.map((button, i) =>
    React.isValidElement(button)
      ? renderElementButton(button)
      : renderCtaButton(button as CtaButton, i)
  );

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

{
  /* EDITORIAL PROPS */
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        typeof window !== 'undefined' ? window.innerWidth <= 1024 : false
      );
      return undefined;
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        return undefined;
      };
    } else {
      return undefined;
    }
  }, []);

  return isMobile;
};

export const renderEyelet = (eyeletColor: string, eyelet?: string) => {
  if (!eyelet) {
    return null;
  }

  return (
    <Typography variant='overline' color={eyeletColor}>
      {eyelet}
    </Typography>
  );
};

export const renderEditorialTitle = (
  title: string | JSX.Element,
  textColor: string
) =>
  isJSX(title) ? (
    title
  ) : (
    <Typography color={textColor} variant='h4'>
      {title}
    </Typography>
  );

export const renderBody = (body: string | JSX.Element, textColor: string) =>
  isJSX(body) ? (
    React.cloneElement(body, { color: textColor })
  ) : (
    <Typography color={textColor} variant='body2'>
      {body}
    </Typography>
  );
