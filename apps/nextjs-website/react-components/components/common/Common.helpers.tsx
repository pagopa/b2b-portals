import React, { ReactElement } from 'react';
import { Button, Typography, TypographyProps } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CtaButtonProps } from '../../types/common/Common.types';

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

const CtaButton = (
  button: CtaButtonProps,
  i: number,
  color: 'primary' | 'negative'
) => (
  <Button
    key={`${button.text}-${i}`}
    color={color}
    variant={button.variant || 'contained'}
    {...button}
  >
    {button.text}
  </Button>
);

const ElementButton = (button: JSX.Element) => button;

export const CtaButtons = ({
  ctaButtons,
  theme,
}: {
  ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  theme: 'dark' | 'light';
}) => {
  const buttonColor = useButtonColor(theme);

  return ctaButtons.map((button, i) =>
    React.isValidElement(button)
      ? ElementButton(button)
      : CtaButton(button as CtaButtonProps, i, buttonColor)
  );
};

const StringTitle = (
  title: string,
  textColor: string,
  variant: TypographyProps['variant'] = 'body1',
  component: TypographyProps['component'] = 'p',
  textAlign: TypographyProps['align'] = 'center',
  marginBottom: number | string = 0
) => (
  <Typography
    color={textColor}
    variant={variant}
    component={component}
    align={textAlign}
    style={{ marginBottom }}
  >
    {title}
  </Typography>
);

const ElementTitle = (
  title: JSX.Element,
  textColor: string,
  variant: TypographyProps['variant'] = 'body1',
  component: TypographyProps['component'] = 'p',
  textAlign: TypographyProps['align'] = 'center',
  marginBottom: number | string = 0
) =>
  React.isValidElement(title)
    ? React.cloneElement(
        title as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        {
          variant,
          component,
          align: textAlign,
          style: { color: textColor, marginBottom },
        }
      )
      : null;

export const Title = ({
  title,
  textColor,
  variant = 'body1',
  component = 'p',
  textAlign = 'center',
  marginBottom = 0,
}: {
  title: string | JSX.Element;
  textColor: string;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  textAlign?: TypographyProps['align'];
  marginBottom?: number | string;
}) => {
  return typeof title === 'string'
    ? StringTitle(title, textColor, variant, component, textAlign, marginBottom)
    : ElementTitle(
        title,
        textColor,
        variant,
        component,
        textAlign,
        marginBottom
      );
};

const StringSubtitle = (
  subtitle: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1',
  marginBottom: number | string = 0
) => (
  <Typography
    variant={variant}
    style={{ color: textColor, marginBottom }}
    align={textAlign}
  >
    {subtitle}
  </Typography>
);

const ElementSubtitle = (
  subtitle: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1',
  marginBottom: number | string = 0
) =>
  React.isValidElement(subtitle)
    ? React.cloneElement(
        subtitle as ReactElement<
          TypographyProps & { style?: React.CSSProperties }
        >,
        {
          style: { color: textColor, marginBottom },
          align: textAlign,
          variant: variant,
        }
      )
      : null;

export const Subtitle = ({
  subtitle,
  textColor,
  textAlign = 'center',
  variant = 'body1',
  marginBottom = 0,
}: {
  subtitle: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
  marginBottom?: number | string;
}) => {
  if (!subtitle) {
    return null;
  }

  return typeof subtitle === 'string'
    ? StringSubtitle(subtitle, textColor, textAlign, variant, marginBottom)
    : ElementSubtitle(subtitle, textColor, textAlign, variant, marginBottom);
};

const StringBody = (
  body: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2',
  marginBottom: number | string = 0
) => (
  <Typography
    variant={variant}
    style={{ color: textColor, marginBottom }}
    align={textAlign}
  >
    {body}
  </Typography>
);

const ElementBody = (
  body: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2',
  marginBottom: number | string = 0
) =>
  React.isValidElement(body)
    ? React.cloneElement(
        body as ReactElement<TypographyProps & { style?: React.CSSProperties }>,
        {
          style: { color: textColor, marginBottom },
          align: textAlign,
          variant: variant,
        }
      )
    : null;

export const Body = ({
  body,
  textColor,
  textAlign = 'inherit',
  variant = 'body2',
  marginBottom = 0,
}: {
  body: string | JSX.Element | undefined;
  textColor?: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
  marginBottom?: number | string;
}) => {
  const theme = useTheme();
  const defaultTextColor = textColor || theme.palette.text.primary;

  if (!body) {
    return null;
  }

  return typeof body === 'string'
    ? StringBody(body, defaultTextColor, textAlign, variant, marginBottom)
    : ElementBody(body, defaultTextColor, textAlign, variant, marginBottom);
};
