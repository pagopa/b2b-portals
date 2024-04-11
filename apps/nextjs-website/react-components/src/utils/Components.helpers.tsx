import React, { ReactElement, useState, useEffect } from 'react';
import { Button, Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { isJSX } from '../utils';
import { CtaButtonProps, Step } from './Components.types';

{
  /* COMMON ELEMENTS */
}

export const useBackgroundColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.dark : palette.background.paper;
};

export const useBackgroundColorAlternative = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.dark : palette.background.default;
};

export const useTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.text.primary;
};

export const useTextAlternativeColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark' ? palette.primary.contrastText : palette.primary.dark;
};

export const useExtraTextColor = (theme: 'dark' | 'light') => {
  const { palette } = useTheme();
  return theme === 'dark'
    ? palette.primary.contrastText
    : palette.text.secondary;
};

export const useButtonColor = (theme: 'dark' | 'light') =>
  theme === 'dark' ? 'negative' : 'primary';

const renderCtaButton = (
  button: CtaButtonProps,
  i: number,
  color: 'primary' | 'negative'
) => (
  <Button key={`${button.text}-${i}`} color={color} {...button}>
    {button.text}
  </Button>
);

const renderElementButton = (button: JSX.Element) => button;

export const RenderButtons = ({
  ctaButtons,
  theme,
}: {
  ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  theme: 'dark' | 'light';
}) => {
  const buttonColor = useButtonColor(theme);

  return ctaButtons.map((button, i) =>
    React.isValidElement(button)
      ? renderElementButton(button)
      : renderCtaButton(button as CtaButtonProps, i, buttonColor)
  );
};

export const RenderGenericTitle = ({
  title,
  color,
  variant = 'body1',
  component = 'p',
  textAlign = 'center',
}: {
  title: string | JSX.Element;
  color: string;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  textAlign?: TypographyProps['align'];
}) =>
  typeof title === 'string' ? (
    <Typography
      color={color}
      variant={variant}
      component={component}
      align={textAlign}
    >
      {title}
    </Typography>
  ) : (
    React.cloneElement(title, { color })
  );

const renderStringSubtitle = (
  subtitle: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1'
) => (
  <Typography variant={variant} style={{ color: textColor }} align={textAlign}>
    {subtitle}
  </Typography>
);

const renderElementSubtitle = (
  subtitle: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1'
) =>
  React.isValidElement(subtitle)
    ? React.cloneElement(
        subtitle as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        { style: { color: textColor }, align: textAlign, variant: variant }
      )
    : null;

export const RenderGenericSubtitle = ({
  subtitle,
  textColor,
  textAlign = 'center',
  variant = 'body1',
}: {
  subtitle: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
}) => {
  if (!subtitle) {
    return null;
  }

  return typeof subtitle === 'string'
    ? renderStringSubtitle(subtitle, textColor, textAlign, variant)
    : renderElementSubtitle(subtitle, textColor, textAlign, variant);
};

const renderStringBody = (
  body: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2'
) => (
  <Typography variant={variant} style={{ color: textColor }} align={textAlign}>
    {body}
  </Typography>
);

const renderElementBody = (
  body: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2'
) =>
  React.isValidElement(body)
    ? React.cloneElement(
        body as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        { style: { color: textColor }, align: textAlign, variant: variant }
      )
    : null;

export const RenderGenericBody = ({
  body,
  textColor,
  textAlign = 'inherit',
  variant = 'body2',
}: {
  body: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
}) => {
  if (!body) {
    return null;
  }

  return typeof body === 'string'
    ? renderStringBody(body, textColor, textAlign, variant)
    : renderElementBody(body, textColor, textAlign, variant);
};

{
  /* HERO ELEMENTS */
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

export const RenderHeroTitle = ({
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

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

{
  /* EDITORIAL ELEMENTS */
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

export const RenderEyelet = (eyeletColor: string, eyelet?: string) => {
  if (!eyelet) {
    return null;
  }

  return (
    <Typography variant='overline' color={eyeletColor}>
      {eyelet}
    </Typography>
  );
};

export const RenderEditorialTitle = (
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

{
  /* HOWTO ELEMENTS */
}

export const ArrowIcon = ({ color = 'none' }: { color?: string }) => (
  <svg
    aria-hidden='true'
    height='24'
    viewBox='0 0 44 24'
    width='44'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      clipRule='evenodd'
      d='m31.5429 1.04289c.3905-.39052 1.0237-.39052 1.4142 0l10.25 10.25001c.1953.1953.2929.4512.2929.7071s-.0976.5118-.2929.7071l-10.25 10.25c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l8.5429-8.5429h-38.5858c-.552284 0-1-.4477-1-1s.447716-1 1-1h38.5858l-8.5429-8.5429c-.3905-.39051-.3905-1.02369 0-1.41421z'
      fill={color}
      fillRule='evenodd'
    />
  </svg>
);

export const groupStepsByRows = (
  steps: ReadonlyArray<Step>,
  rowMaxSteps: number
): Step[][] => {
  const numSteps = steps.length;
  return new Array(Math.ceil(numSteps / rowMaxSteps))
    .fill(undefined)
    .map((_, i) => steps.slice(i * rowMaxSteps, i * rowMaxSteps + rowMaxSteps));
};

export const RenderHowToDescription = (
  description: string | JSX.Element,
  color: string
) =>
  typeof description === 'string' ? (
    <Typography color={color} variant='body2'>
      {description}
    </Typography>
  ) : (
    React.cloneElement(description, { color })
  );

export const RenderHowToStepNum = ({
  variant = 'body1',
  component = 'p',
  color,
  stepNum,
}: {
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  color: string;
  stepNum: number;
}) => (
  <Typography color={color} variant={variant} component={component}>
    {`0${stepNum}`}
  </Typography>
);
