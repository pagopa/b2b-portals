import Stack from '@mui/material/Stack/Stack';
import { PreHeaderProps } from '../../types/PreHeader/PreHeader.types';
import { CtaButtons } from '../common/Common';

const PreHeader = ({ leftCtas, rightCtas }: PreHeaderProps) => {

  return (
  <Stack
    display='flex'
    flexDirection='row'
    bgcolor='background.paper'
    paddingX={{ xs: 2, sm: 4 }}
    justifyContent='space-between'
    flexWrap='wrap'
    sx={ {borderBottom: '1px solid #E3E7EB' } }
  >
    {leftCtas && leftCtas.length > 0 && (
      <Stack direction='row'>
        {CtaButtons({
          ctaButtons: leftCtas.map((leftCtaButton) => ({
            ...leftCtaButton,
            variant: 'text',
            sx: {
              width: { md: 'auto', xs: '100%', padding: 0, fontSize: '0.875rem', lineHeight: 1.25, color: '#17324D' },
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          })),
          disableRipple: true,
          theme: 'light',
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
              width: { md: 'auto', xs: '100%', padding: 0, fontSize: '0.875rem', lineHeight: 1.25, color: '#17324D' },
              '&:hover': {
                backgroundColor: 'transparent',
              },
            },
          })),
          disableRipple: true,
          theme: 'light',
        })}
      </Stack>
    )}
  </Stack>
)};

export default PreHeader;
