import Stack from '@mui/material/Stack/Stack';
import { PreHeaderProps } from '../../types/PreHeader/PreHeader.types';
import { CtaButtons } from '../common/Common';
import { theme } from '@pagopa/mui-italia';
import { usePathname } from 'next/navigation';

const colorMap = {
  textColor: theme.palette.text.primary,
  dividerColor: theme.palette.divider,
};

const PreHeader = ({
  leftCtas,
  rightCtas,
  includeSlugs,
  pressReleasesParentSlug = 'press-releases',
}: PreHeaderProps) => {
  const pathname = usePathname() ?? '';

  // Don't show Preheader for any press release
  if (pathname.includes(pressReleasesParentSlug)) {
    return null;
  }

  // Compare included slugs with current page slug (removing initial '/')
  // Only check includeSlugs if it contains at least 1 item, otherwise render PreHeader for all pages
  if (includeSlugs && includeSlugs.length > 0 && !includeSlugs.includes(pathname.slice(1))) {
    return null;
  }

  return (
    <Stack
      display='flex'
      flexDirection='row'
      bgcolor='background.paper'
      paddingX={3}
      justifyContent='space-between'
      flexWrap='wrap'
      position='relative'
      zIndex='1000'
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
                fontWeight: 700,
                minHeight: '48px',
                '&:hover': {
                  // Style needed to override default 'text' variant MUI Button styles
                  backgroundColor: 'transparent',
                  opacity: 0.8,
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
                fontWeight: 600,
                minHeight: '48px',
                '&:hover': {
                  // Style needed to override default 'text' variant MUI Button styles
                  backgroundColor: 'transparent',
                  opacity: 0.8,
                },
              },
            })),
            disableRipple: true,
          })}
        </Stack>
      )}
    </Stack>
  );
};

export default PreHeader;
