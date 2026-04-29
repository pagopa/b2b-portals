import { Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';
import { useTheme } from '@mui/material/styles';
import { resolveByThemeVariant, variantActionColorMap } from '../../theme';

const Subtitle = ({ item, theme, themeVariant }: FeatureStackItemProps) => {
  const { palette } = useTheme();
  const textColor = TextColor(theme);

  const linkColor =
    theme === 'dark'
      ? palette.custom.white
      : resolveByThemeVariant(variantActionColorMap, themeVariant, {
          palette,
          theme,
        });

  return (
    <Stack spacing={3} justifyContent='center' alignItems='center'>
      <Body textColor={textColor} body={item.subtitle} />
      {item.link !== undefined && (
        <Stack
          spacing={1}
          justifyContent='center'
          alignItems='center'
          direction='row'
        >
          <Typography
            component='span'
            variant='body1'
            color={theme === 'light' ? 'text.primary' : linkColor}
          >
            <Link
              color={linkColor}
              href={item.link.href}
              underline='none'
              {...(item.link.ariaLabel && {
                'aria-label': item.link.ariaLabel,
              })}
              sx={{ fontWeight: 'bold' }}
            >
              {item.link.label}
            </Link>
          </Typography>

          <ArrowForwardIcon
            sx={{
              color: linkColor,
            }}
          />
        </Stack>
      )}
    </Stack>
  );
};

export default Subtitle;
