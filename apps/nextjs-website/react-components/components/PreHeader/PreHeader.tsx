import Stack from '@mui/material/Stack/Stack';
import { PreHeaderProps } from '../../types/PreHeader/PreHeader.types';
import { CtaButtons } from '../common/Common';
import { theme } from '@pagopa/mui-italia';

const colorMap = {
  textColor: theme.palette.text.primary,
  dividerColor: theme.palette.background.default,
};

const PreHeader = ({ leftCtas, rightCtas }: PreHeaderProps) => (
  <Stack
    display='flex'
    flexDirection='row'
    bgcolor='background.paper'
    paddingX={{ xs: 2, sm: 4 }}
    justifyContent='space-between'
    flexWrap='wrap'
    sx={{ borderBottom: `1px solid ${colorMap.dividerColor}` }}
  >
    {leftCtas && leftCtas.length > 0 && (
      <Stack direction='row'>
        {CtaButtons({
          ctaButtons: leftCtas.map((leftCtaButton) => ({
            ...leftCtaButton,
            variant: 'text',
            sx: {
              width: { md: 'auto', xs: '100%' },
              padding: 0,
              fontSize: '0.875rem',
              lineHeight: 1.25,
              color: colorMap.textColor,
              '&:hover': {
                // Style needed to override default 'text' variant MUI Button styles
                backgroundColor: 'transparent',
              },
            },
          })),
          disableRipple: true,
        })}
      </Stack>
    )}
    {rightCtas && rightCtas.length > 0 && (
      <Stack direction='row-reverse'>
        {CtaButtons({
          ctaButtons: rightCtas.map((rightCtaButton) => ({
            ...rightCtaButton,
            variant: 'text',
            sx: {
              width: { md: 'auto', xs: '100%' },
              padding: 0,
              fontSize: '0.875rem',
              lineHeight: 1.25,
              color: colorMap.textColor,
              '&:hover': {
                // Style needed to override default 'text' variant MUI Button styles
                backgroundColor: 'transparent',
              },
            },
          })),
          disableRipple: true,
        })}
      </Stack>
    )}
  </Stack>
);

export default PreHeader;
