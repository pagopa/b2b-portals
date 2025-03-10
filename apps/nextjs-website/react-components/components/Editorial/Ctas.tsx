import Stack from '@mui/material/Stack';
import { EditorialCtaProps } from '../../types/Editorial/Editorial.types';
import { CtaButtons } from '../common/Common';
import { useTheme, useMediaQuery } from '@mui/material';
import { CtaButtonProps } from '@react-components/types/common/Common.types';
import { AppStoreButton, GooglePlayButton } from '../common/StoreButtons';

export const Ctas = ({
  ctaButtons,
  storeButtons,
  theme,
  themeVariant,
}: EditorialCtaProps) => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down('sm'));

  if (storeButtons?.hrefGoogle || storeButtons?.hrefApple) {
    return (
      <Stack
        justifyContent='left'
        alignItems='baseline'
        spacing={2}
        direction={isSmallScreen ? 'column' : 'row'}
      >
        {storeButtons.hrefGoogle && (
          <GooglePlayButton
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
            badge
          />
        )}
        {storeButtons.hrefApple && (
          <AppStoreButton
            sx={{
              padding: '0px',
              margin: '0px',
              justifyContent: 'start',
            }}
            key='apple'
            href={storeButtons.hrefApple}
            badge
          />
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
              },
            },
          })),
          theme,
          themeVariant,
        })}
      </Stack>
    );
  } else {
    return null;
  }
};
