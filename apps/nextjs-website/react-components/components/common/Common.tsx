import React, { ReactElement } from 'react';
import { Button, Typography, TypographyProps } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import {
  CtaButtonProps,
} from '../../types/common/Common.types';
import { Box } from '@mui/material';


export const CtaButtons = ({
  ctaButtons,
  theme = 'light',
  themeVariant = 'IO',
  disableRipple = false,
}: {
  ctaButtons: ReadonlyArray<CtaButtonProps | JSX.Element>;
  theme?: 'dark' | 'light';
  themeVariant?: 'IO' | 'SEND';
  disableRipple?: boolean;
}) => {
  const { palette } = useTheme();

  const isCtaButtonProps = (
    button: CtaButtonProps | JSX.Element,
  ): button is CtaButtonProps => {
    return (button as CtaButtonProps).text !== undefined;
  };

  return ctaButtons.map((button, i) =>
    React.isValidElement(button)
      ? button
      : isCtaButtonProps(button) && (
          <Button
            key={`${button.text}-${i}`}
            color={theme === 'dark' ? 'negative' : 'primary'}
            variant={button.variant || 'contained'}
            disableRipple={disableRipple}
            style={{
              ...(button.variant === 'contained' && {
                backgroundColor:
                  theme === 'dark'
                    ? palette.custom.white
                    : themeVariant === 'SEND'
                      ? palette.primary.main
                      : palette.custom.blueIO[500],
                color:
                  theme === 'dark'
                    ? themeVariant === 'SEND'
                      ? palette.primary.main
                      : palette.custom.blueIO[500]
                    : palette.custom.white,
              }),

              ...(button.variant === 'outlined' && {
                borderColor:
                  theme === 'dark'
                    ? palette.custom.matteWhiteBorder
                    : themeVariant === 'SEND'
                      ? palette.primary.main
                      : palette.custom.blueIO[500],
                color:
                  theme === 'dark'
                    ? palette.custom.white
                    : themeVariant === 'SEND'
                      ? palette.primary.main
                      : palette.custom.blueIO[500],
              }),
            }}
            {...button}
          >
            {button.text}
          </Button>
        ),
  );
};

const StringTitle = (
  title: string,
  textColor: string,
  variant: TypographyProps['variant'] = 'body1',
  component: TypographyProps['component'] = 'p',
  textAlign: TypographyProps['align'] = 'center',
  marginTop: number | string = 0,
  marginBottom: number | string = 0,
) => (
  <Typography
    color={textColor}
    variant={variant}
    component={component}
    align={textAlign}
    style={{ marginTop, marginBottom }}
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
  marginTop: number | string = 0,
  marginBottom: number | string = 0,
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
          style: { color: textColor, marginTop, marginBottom },
        },
      )
    : null;

export const Title = ({
  title,
  textColor,
  variant = 'body1',
  component = 'p',
  textAlign = 'center',
  marginTop = 0,
  marginBottom = 0,
}: {
  title: string | JSX.Element;
  textColor: string;
  variant?: TypographyProps['variant'];
  component?: TypographyProps['component'];
  textAlign?: TypographyProps['align'];
  marginTop?: number | string;
  marginBottom?: number | string;
}) => {
  return typeof title === 'string'
    ? StringTitle(
        title,
        textColor,
        variant,
        component,
        textAlign,
        marginTop,
        marginBottom,
      )
    : ElementTitle(
        title,
        textColor,
        variant,
        component,
        textAlign,
        marginTop,
        marginBottom,
      );
};

const StringSubtitle = (
  subtitle: string,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body1',
  marginBottom: number | string = 0,
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
  marginBottom: number | string = 0,
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
        },
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
  marginBottom: number | string = 0,
) => (
  <Typography
    variant={variant}
    style={{ color: textColor, marginBottom }}
    align={textAlign}
    sx={{
      a: {
        color: textColor,
        '&:hover': {
          color: textColor,
        },
      },
    }}
  >
    {body}
  </Typography>
);

const ElementBody = (
  body: JSX.Element,
  textColor: string,
  textAlign: TypographyProps['align'] = 'inherit',
  variant: TypographyProps['variant'] = 'body2',
  marginBottom: number | string = 0,
) =>
  React.isValidElement(body) ? (
    <Box
      sx={{
        a: {
          color: textColor,
          '&:hover': {
            color: textColor,
          },
        },
      }}
    >
      {React.cloneElement(
        body as ReactElement<TypographyProps & { style?: React.CSSProperties }>,
        {
          style: { color: textColor, marginBottom },
          align: textAlign,
          variant: variant,
        },
      )}
    </Box>
  ) : null;

export const Body = ({
  body,
  textColor,
  textAlign = 'inherit',
  variant = 'body2',
  marginBottom = 0,
}: {
  body: string | JSX.Element | undefined;
  textColor: string;
  textAlign?: TypographyProps['align'];
  variant?: TypographyProps['variant'];
  marginBottom?: number | string;
}) => {
  if (!body) {
    return null;
  }

  return typeof body === 'string'
    ? StringBody(body, textColor, textAlign, variant, marginBottom)
    : ElementBody(body, textColor, textAlign, variant, marginBottom);
};

export const getButtonStyles = (
  theme: 'light' | 'dark',
  themeVariant: 'SEND' | 'IO',
  sectionId: number,
  currentSectionId: number,
  palette: Theme['palette'],
) => {
  const isSelected = sectionId === currentSectionId;

  return {
    backgroundColor: isSelected
      ? theme === 'light'
        ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
        : palette.background.paper
      : 'transparent',
    color: isSelected
      ? theme === 'light'
        ? themeVariant === 'SEND'
          ? palette.primary.main
          : palette.custom.primaryColorDark
        : themeVariant === 'SEND'
          ? palette.primary.main
          : palette.custom.primaryColorDark
      : theme === 'light'
        ? themeVariant === 'SEND'
          ? palette.primary.main
          : palette.custom.primaryColorDark
        : palette.primary.contrastText,
    borderColor:
      theme === 'light'
        ? themeVariant === 'SEND'
          ? palette.primary.main
          : palette.custom.primaryColorDark
        : palette.background.paper,
    '&:hover': {
      backgroundColor:
        theme === 'light'
          ? palette.custom.editorialSwitchButtonsBackgroundLightBlue
          : palette.background.paper,
      color:
        theme === 'light'
          ? themeVariant === 'SEND'
            ? palette.primary.main
            : palette.custom.primaryColorDark
          : themeVariant === 'SEND'
            ? palette.primary.main
            : palette.custom.primaryColorDark,
      borderColor:
        theme === 'light'
          ? themeVariant === 'SEND'
            ? palette.primary.main
            : palette.custom.primaryColorDark
          : palette.background.paper,
    },
  };
};
