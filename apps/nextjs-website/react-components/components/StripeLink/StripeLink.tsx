import { Grid, Stack, Button, Box } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { EIcon } from '../common/EIcon';
import { StripeLinkProps } from '../../types/StripeLink/StripeLink.types';
import { Subtitle } from '../common/Common';
import {
  BackgroundColor,
  ExtraBackgroundColor,
  TextAlternativeColor,
  TextColor,
} from '../common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StripeLink = ({ icon, subtitle, theme, buttonText }: StripeLinkProps) => {
  const textAlternativeColor = TextAlternativeColor(theme);
  const textColorWhiteOnly = TextColor('dark');
  const backgroundColor = BackgroundColor(theme);
  const extraBackgroundColor = ExtraBackgroundColor(theme);

  return (
    <ContainerRC
      background={extraBackgroundColor}
      py={2}
      sx={{ justifyContent: { xs: 'start', md: 'start' } }}
    >
      <Grid item>
        <Stack
          direction={{ md: 'row', xs: 'column' }}
          justifyContent={{ md: 'flex-start' }}
          spacing={3}
          alignItems={{ md: 'center', xs: 'flex-start' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              width: 'auto',
              alignItems: 'center',
            }}
          >
            <EIcon
              {...icon}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                color: textColorWhiteOnly,
                mr: 1,
              }}
            />
            <Subtitle
              variant='body2'
              textColor={textColorWhiteOnly}
              subtitle={subtitle}
              textAlign='left'
            />
          </Box>

          {buttonText && (
            <Button
              variant='contained'
              size='small'
              sx={{
                backgroundColor: backgroundColor,
                color: textAlternativeColor,
                ':hover': { backgroundColor: backgroundColor },
              }}
              endIcon={<ArrowForwardIcon color='inherit'></ArrowForwardIcon>}
            >
              {buttonText}
            </Button>
          )}
        </Stack>
      </Grid>
    </ContainerRC>
  );
};

export default StripeLink;