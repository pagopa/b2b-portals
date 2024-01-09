// Only temporarily importing every icon. A task is planned to sub this for a restricted set of accepted icon names.
import * as MuiIcons from '@mui/icons-material';

export const isValidMuiIcon = (iconName?: string | null): boolean =>
  !!iconName && iconName in MuiIcons;

export const formatValidMuiIcon = (iconName?: string | null): string | null => {
  if (!iconName || !(iconName in MuiIcons)) {
    // Not using isValidMuiIcon because typescript doesn't register iconName as non-null if we do
    return null;
  }

  // Convert from camel case (anExample) or pascal case (AnExample) to snake case (an_example)
  return iconName
    .replace(/(?:^|\.?)([A-Z])/g, (_, y) => `_${y.toLowerCase()}`)
    .split(/^_/)
    .join('');
};
