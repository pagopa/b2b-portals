import Image from 'next/image';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import appleBadgeBase64 from './BadgeImages/appleBadgeBase64';
import googleBadgeBase64 from './BadgeImages/googleBadgeBase64';
import { EditorialCtaProps } from '../../types/Editorial/Editorial.types';
import { CtaButtons } from '../common/Common';
import { useTheme, useMediaQuery } from '@mui/material';
import { CtaButtonProps } from '@react-components/types/common/Common.types';

export const Ctas = ({
  ctaButtons,
  storeButtons,
  theme,
}: EditorialCtaProps) => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));
  const { palette } = useTheme();

  if (storeButtons?.hrefGoogle || storeButtons?.hrefApple) {
    return (
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
    );
  }
  if (Array.isArray(ctaButtons) && ctaButtons.length > 0) {
    return (
      <Stack
        direction={isSmallScreen ? 'column' : 'row'}
        justifyContent='left'
        spacing={2}
      >
        {CtaButtons({
          ctaButtons: ctaButtons.map((button: CtaButtonProps) => ({
            ...button,
            sx: {
              width: {
                md: 'auto',
                xs: '100%',
                ...(button.variant === 'contained' && {
                  backgroundColor:
                    theme === 'dark'
                      ? palette.custom.white
                      : palette.custom.blueIO[500],
                  color:
                    theme === 'dark'
                      ? palette.custom.blueIO[500]
                      : palette.custom.white,
                }),
              },
            },
          })),
          theme,
        })}
      </Stack>
    );
  } else {
    return null;
  }
};
