import { Grid, Stack, Button, Box } from '@mui/material';
import ContainerRC from '../common/ContainerRC';
import { StripeLinkProps } from '../../types/StripeLink/StripeLink.types';
import { Subtitle } from '../common/Common';
import {
  BackgroundColor,
  ExtraBackgroundColor,
  TextAlternativeColor,
  TextColor,
} from '../common/Common.helpers';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';

const StripeLink = ({ icon, subtitle, theme, buttonText, sectionID }: StripeLinkProps) => {
  const textAlternativeColor = TextAlternativeColor(theme);
  const textColorWhiteOnly = TextColor('dark');
  const backgroundColor = BackgroundColor(theme);
  const extraBackgroundColor = ExtraBackgroundColor(theme);

  return (
    <ContainerRC
      background={extraBackgroundColor}
      py={2}
      sx={{ justifyContent: { xs: 'start', md: 'start' } }}
      {...sectionID && { sectionID }}
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
              gap:'.5rem'
            }}
          >
            {iconURL && <Image src={iconURL} alt='' height={28} width={28} />}
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