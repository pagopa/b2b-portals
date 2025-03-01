import { theme } from '@pagopa/mui-italia';
import { SvgIcon } from '@mui/material';
import { SvgFilled, SvgOutline, SvgColorDark, SvgColorLight } from './partials';

type NextGenerationEUVariants = 'filled' | 'outline' | 'color';
type NextGenerationEUColors = 'light' | 'dark' | 'pantone';

interface FundedByNextGenerationEUProps {
  /** Provides a human-readable title for the element that contains it. */
  title?: string;
  /** Width of the component. Height is set automatically. */
  size?: number;
  /** The variant to use. If the color variant is set,
   * the color property is ignored. */
  variant?: NextGenerationEUVariants;
  /** The color of the component. */
  color?: NextGenerationEUColors;
}

const colorMap = {
  dark: theme.palette.text.primary,
  light: theme.palette.common.white,
  pantone: theme.palette.europeanUnion.main,
};

const variantMap = {
  outline: <SvgOutline />,
  filled: <SvgFilled />,
};

const variantColorMap = {
  dark: <SvgColorDark />,
  light: <SvgColorLight />,
  pantone: <SvgColorDark />,
};

export const FundedByNextGenerationEU = ({
  title = "Finanziato dall'Unione Europea · NextGenerationEU",
  size = 200,
  color = 'dark',
  variant = 'outline',
}: FundedByNextGenerationEUProps): JSX.Element => (
  <SvgIcon
    viewBox='0 0 1174 270'
    focusable='false'
    role='img'
    aria-labelledby='logo-next-genEU-titleID'
    sx={{
      width: size,
      height: 'auto',
      /* If the color variant is set,
      the following property is ignored */
      fill: colorMap[color],
      display: 'inline-block',
      userSelect: 'none',
    }}
  >
    {variant === 'color' ? variantColorMap[color] : variantMap[variant]}
    <title id='logo-next-gen-eu-title'>{title}</title>
  </SvgIcon>
);
