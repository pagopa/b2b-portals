import { theme } from '@pagopa/mui-italia';
import { DefaultVariant, FlatVariant } from './partials';
import { SvgIcon } from '@mui/material';

type LogoPACompanyColors = 'default' | 'light' | 'dark';
type LogoPACompanyVariants = 'default' | 'flat';

interface LogoPagoPACompanyProps {
  /** Provides a human-readable title for the element that contains it. */
  title?: string;
  /** Width of the component. Height is set automatically. */
  size?: number;
  /** The color of the component. */
  color?: LogoPACompanyColors;
  variant?: LogoPACompanyVariants;
}

const colorMap = {
  default: theme.palette.secondary.main,
  dark: theme.palette.common.black,
  light: theme.palette.common.white,
};

export const LogoPagoPACompany = ({
  title = 'PagoPA',
  size = 120,
  color = 'default',
  variant = 'default',
}: LogoPagoPACompanyProps): JSX.Element => (
  <SvgIcon
    viewBox="0 0 119 33"
    focusable="false"
    aria-labelledby="logo-pagoPA-company-titleID"
    role="img"
    sx={{
      width: size,
      height: 'auto',
      fill: colorMap[color],
      display: 'inline-block',
      userSelect: 'none',
    }}
  >
    {variant === 'default' ? <DefaultVariant /> : <FlatVariant />}

    <title id="logo-pagopa-company-title">{title}</title>
  </SvgIcon>
);
