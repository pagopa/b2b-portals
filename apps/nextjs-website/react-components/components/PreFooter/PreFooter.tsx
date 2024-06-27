import { Box, Container, Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { BackgroundColor } from '../common/Common.helpers';
import { isJSX } from '../../types/common/Common.types';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import { useTheme, useMediaQuery } from '@mui/material';
import googleBadgeBase64 from './BadgeImages/googleBadgeBase64';
import appleBadgeBase64 from './BadgeImages/appleBadgeBase64';

const styles = {
  main: (isSmallScreen: boolean) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isSmallScreen ? 'column' : 'row', 
    padding: { md: '64px 24px', xs: '32px 24px' },
  }),
  backgroundImage: (isSmallScreen: boolean, theme: 'light' | 'dark') => ({
    backgroundColor: theme === 'dark' ? '#031344' : BackgroundColor(theme),
    backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/ae80/98d2/364735b02ccaf9e7f95fd6af6989f154?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ohlkbH8BdmJlKp2p6st585VhvjuedEEU9TXArCHlshf9IeSMGvvkjpFlyT1CFUfpgIk8g5IJZrCehDTGfqeqkir8OgblfzX1htJ~FvPCX2V8W-zA3MGgPipQAe46FVAyJNUMPVaI0SWYLDCTUq-UTXgStL-KIkaszBwyGq1-UKk0zBSF4kDAXSzwQJOfbw7OdAcNcVjg8ecZtMx1XMuzle2kOjtXgDc0z7lLRkxiZn558CSMqf-GdvlfRRwChYlFTFm2u~XYUs-H-2~Vocjjn7prAtudZCmPCjVhHa8Qg6locTt7jPIkUgX7xcYNut6Qsi1i9hRnWEDzZPFWBhWOEw__)',
    backgroundSize: isSmallScreen ? 'cover' : '30%',
    backgroundPosition: isSmallScreen ? 'center' : 'right',
    backgroundRepeat: 'no-repeat',
  }),
};

const PreFooter = (props: PreFooterProps) => {
  const { theme, title, decoration = <></>, storeButtons } = props;
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return (
    <Box component='section' sx={styles.backgroundImage(isSmallScreen, theme)}>
      <Container>
        <Box sx={styles.main(isSmallScreen)}>
          {decoration ? (
            isJSX(decoration) ? (
              decoration
            ) : (
              <img {...decoration} />
            )
          ) : null}
          <Typography variant='h4' color={theme === 'dark' ? 'white' : 'black'} mb={isSmallScreen ? 2 : 'unset'}>{title}</Typography>
          {storeButtons?.hrefGoogle || storeButtons?.hrefApple ? (
            <Stack
              justifyContent='center'
              alignItems='center'
              spacing={2}
              direction={isSmallScreen ? 'column' : 'row'}
              sx={{ marginLeft: isSmallScreen ? 0 : 2 }} 
            >
              {storeButtons.hrefGoogle && (
                <Button
                  sx={{
                    padding: '0px',
                    marginLeft: isSmallScreen ? '0px' : '16px',
                    justifyContent: 'start',
                  }}
                  key='google'
                  href={storeButtons.hrefGoogle}
                >
                  <Image
                    src={googleBadgeBase64}
                    alt='Download on Google Play'
                    height={0}
                    width={0}
                    style={{ height: '3em', width: 'auto' }}
                  />
                </Button>
              )}
              {storeButtons.hrefApple && (
                <Button
                  sx={{
                    padding: '0px',
                    marginLeft: isSmallScreen ? '0px' : '16px',
                    justifyContent: 'start',
                  }}
                  key='apple'
                  href={storeButtons.hrefApple}
                >
                  <Image
                    src={appleBadgeBase64}
                    alt='Download on App store'
                    height={0}
                    width={0}
                    style={{ height: '3em', width: 'auto' }}
                  />
                </Button>
              )}
            </Stack>
          ) : (
            <Stack
              justifyContent='center'
              alignItems='center'
              spacing={2}
              direction={isSmallScreen ? 'column' : 'row'}
              sx={{ marginLeft: isSmallScreen ? 0 : 2 }}
            >
              <Button variant='contained' color='primary'>Button 1</Button>
              <Button variant='contained' color='primary'>Button 2</Button>
            </Stack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default PreFooter;
