import Stack from '@mui/material/Stack/Stack';
import { PreHeaderProps } from '../../types/PreHeader/PreHeader.types';
import { CtaButtons } from '../common/Common';

const PreHeader = ({ leftCtas, rightCtas }: PreHeaderProps) => (
  <Stack
    display='flex'
    flexDirection='row'
    bgcolor='background.paper'
    paddingY={2}
    paddingX={{ xs: 2, sm: 4 }}
    justifyContent='space-between'
    flexWrap='wrap'
  >
    {leftCtas && (
      <Stack direction='row'>
        {CtaButtons({
          ctaButtons: [
            {
              ...leftCtas,
              variant: 'text',
              disableRipple: true,
              sx: { width: { md: 'auto', xs: '100%' } },
            },
          ],
          theme: 'light',
        })}
      </Stack>
    )}
    {rightCtas && (
      <Stack direction='row-reverse'>
        {CtaButtons({
          ctaButtons: [
            {
              ...rightCtas,
              variant: 'text',
              disableRipple: true,
              sx: { width: { md: 'auto', xs: '100%' } },
            },
          ],
          theme: 'light',
        })}
      </Stack>
    )}
  </Stack>
);

export default PreHeader;
