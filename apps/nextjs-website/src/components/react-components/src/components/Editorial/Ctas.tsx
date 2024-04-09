import Image from 'next/image';
import Button, { type ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import appleBadge from '../../../../../../public/editorial-images/app-store-badge.png';
import googleBadge from '../../../../../../public/editorial-images/google-play-badge.png';
import {
  CtaButtonProps,
  CtaEditorialButton,
  EditorialCtaProps,
} from '../../utils/Components.types';
import { useButtonColor } from '../../utils/Components.helpers';

const isButtonProps = (button: CtaEditorialButton): button is CtaButtonProps =>
  typeof button === 'object' && 'text' in button;

export const Ctas = ({
  ctaButtons,
  storeButtons,
  theme,
}: EditorialCtaProps) => {
  const color = useButtonColor(theme);

  const buttonsTheme: ButtonProps[] = [
    {
      color,
      variant: 'contained',
    },
    {
      color,
      variant: 'outlined',
    },
  ];

  if (storeButtons?.hrefGoogle || storeButtons?.hrefApple) {
    return (
      <Stack
        sx={{
          flexDirection: 'column',
          '@media screen and (min-width: 420px)': {
            flexDirection: 'row-reverse',
          },
        }}
        justifyContent='left'
        spacing={2}
        alignItems='baseline'
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
              src={googleBadge}
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
              src={appleBadge}
              alt='Download on App store'
              height={0}
              width={0}
              style={{ height: '3em', width: 'auto' }}
            />
          </Button>
        )}
      </Stack>
    );
  } else if (Array.isArray(ctaButtons) && ctaButtons.length > 0) {
    return (
      <Stack
        direction={{ md: 'row-reverse', xs: 'row' }}
        justifyContent='left'
        spacing={2}
      >
        {ctaButtons.map((button: CtaEditorialButton, i) =>
          isButtonProps(button) ? (
            <Button
              sx={{ width: { md: 'auto', xs: '100%' } }}
              key={`${button.text}-${i}`}
              {...buttonsTheme[i]}
              {...button}
            >
              {button.text}
            </Button>
          ) : (
            button
          )
        )}
      </Stack>
    );
  } else {
    return null;
  }
};
