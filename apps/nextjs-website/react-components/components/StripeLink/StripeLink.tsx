import { Grid, Stack } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { EIcon } from '../common/EIcon';
import { StripeLinkProps } from '../../types/StripeLink/StripeLink.types';
import { CtaButtons, Subtitle } from '../common/Common';
import { BackgroundColor, TextColor } from '../common/Common.helpers';

const StripeLink = ({ icon, subtitle, theme, buttonText }: StripeLinkProps) => {
  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColor(theme);

  return (
    <ContainerRC background={backgroundColor} py={2}>
      <Grid item>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent={{ md: 'flex-start' }}
          spacing={3}
          alignItems={{ md: 'center', xs: 'flex-start' }}
        >
          <EIcon
            {...icon}
            sx={{
              display: { md: 'flex', xs: 'none' },
              visibility: { md: 'visible', xs: 'hidden' },
            }}
          />
          <Subtitle
            variant='body2'
            textColor={textColor}
            subtitle={subtitle}
            textAlign='left'
          />
          {buttonText && buttonText.length > 0 && CtaButtons({
            ctaButtons: buttonText.map((button) => ({
              ...button,
              sx: {
                width: { md: 'auto', xs: '100%' },
              },
            })),
            theme,
          })}
        </Stack>
      </Grid>
    </ContainerRC>
  );
};

export default StripeLink;
