import { Box, Container, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Image from 'next/image';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as PreFooterContent } from './Content';
import { isJSX } from '../../types/common/Common.types';
import { PreFooterProps } from '@react-components/types/PreFooter/PreFooter';
import appleBadgeBase64 from './BadgeImages/appleBadgeBase64';
import googleBadgeBase64 from './BadgeImages/googleBadgeBase64';
import { useTheme, useMediaQuery } from '@mui/material';

const styles = {
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: { md: '64px 24px', xs: '32px 24px' },
  },
};

const PreFooter = (props: PreFooterProps) => {
  const { theme, title, decoration = <></>, storeButtons } = props;
  const backgroundColor = BackgroundColor(theme);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  return (
    <Box bgcolor={backgroundColor} component='section'>
      <Container>
        <Stack gap={2} sx={styles.main}>
          {decoration ? (
            isJSX(decoration) ? (
              decoration
            ) : (
              <img {...decoration} />
            )
          ) : null}
          <PreFooterContent {...{ title, theme }} />
          {storeButtons?.hrefGoogle || storeButtons?.hrefApple ? (
            <Stack
              justifyContent='left'
              alignItems='baseline'
              spacing={2}
              direction={isSmallScreen ? 'column' : 'row'}
            >
              {storeButtons.hrefGoogle && (
                <Button
                  sx={{
                    padding: '0px',
                    marginLeft: '0px',
                    '@media screen and (min-width: 420px)': {
                      marginLeft: '16px',
                    },
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
                    margin: '0px',
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
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
};

export default PreFooter;

