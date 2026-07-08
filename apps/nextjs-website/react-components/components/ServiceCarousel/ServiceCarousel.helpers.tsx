import {
  Box,
  IconButton,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { ServiceCardProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import Image from 'next/image';
import { ArrowForward, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { resolveThemeVariant } from '../../theme';
import { isValidExternalLink, LinkIcon } from '../common/Common';
import { ThemeVariant } from '../../types/common/Common.types';

interface CarouselDotsProps {
  themeVariant: ThemeVariant;
}

// Style Carousel Dots (unfortunately react-slick doesn't offer an easy way)
// Ignore TS error for position because we need to use !important
// to overwrite react-slick's absolute positioning
// @ts-ignore
export const CarouselDots = styled(Box)<CarouselDotsProps>(({
  theme,
  themeVariant,
}) => {
  const actionColor = resolveThemeVariant<string>('actionColor', themeVariant, {
    palette: theme.palette,
    theme: 'light',
  });

  return {
    ul: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '.75rem',
      padding: '0',
      margin: '2rem 0 0 0',
      li: {
        width: '.5rem !important',
        height: '.5rem !important',
        margin: '0 !important',
        button: {
          width: '.5rem',
          height: '.5rem',
          borderRadius: '.5rem',
          backgroundColor: theme.palette.grey[300],
          padding: '0',
          '::before': {
            display: 'none',
          },
          '&:focus': {
            outline: `3px solid ${theme.palette.primary.main}`,
            outlineOffset: `'2px'`,
          },
        },
        '&.slick-active button': {
          backgroundColor: `${actionColor} !important`,
        },
      },
    },
  };
});

export const ServiceCard = (
  card: ServiceCardProps,
  themeVariant: ThemeVariant,
  noLink = false,
) => {
  const { palette } = useTheme();

  const linkColor = resolveThemeVariant<string>('actionColor', themeVariant, {
    palette,
    theme: 'light',
  });

  return (
    <Stack
      sx={{
        display: 'flex !important',
        width: 'fit-content !important',
      }} // Prevent Slider from overwriting
      direction='row'
      gap={8}
      p={3}
      mr={4}
      alignItems='flex-end'
      height={272}
      bgcolor={palette.grey[50]}
      borderRadius={4}
      // Styles for mobile image
      position='relative'
      overflow='hidden'
      component='article'
      tabIndex={-1}
    >
      <Stack
        gap={1}
        width={{ xs: 216, sm: 264, md: 264 }} // 216 has been found by testing: a higher number breaks react-slick and makes the last slide wrap under the first one
        alignSelf='stretch'
      >
        <Typography component='h3' variant='h6' fontWeight={700}>
          {card.title}
        </Typography>
        {card.description && (
          <Typography variant='body2'>{card.description}</Typography>
        )}
        {!noLink && card.link && (
          <Typography mt='auto' color={linkColor} fontWeight={700}>
            <Link
              href={card.link.href}
              display='flex'
              flexDirection='row'
              alignItems='center'
              gap={1}
              width='fit-content'
              color='inherit'
              underline='hover'
              fontSize={16}
              {...(card.link.ariaLabel && {
                'aria-label': card.link.ariaLabel,
              })}
              {...(isValidExternalLink(card.link.href) && {
                target: '_blank',
              })}
            >
              {card.link.label}
              <LinkIcon
                sxExternalLinkIcon={{ ml: 0 }}
                showExternalLinkIcon={isValidExternalLink(card.link.href)}
                internalLinkIcon={
                  <ArrowForward color='inherit' sx={{ fontSize: 18 }} />
                }
                {...(isValidExternalLink(card.link.href) && {
                  externaLinkIconTarget: '_blank',
                })}
              />
            </Link>
          </Typography>
        )}
      </Stack>

      {card.image && (
        <Box
          height={{ xs: 80, sm: 80, md: 124 }}
          width={{ xs: 80, sm: 80, md: 124 }}
          position={{ xs: 'absolute', sm: 'absolute', md: 'relative' }}
          bottom={14}
          right={-12}
        >
          <Image src={card.image.url} alt='' fill={true} />
        </Box>
      )}
    </Stack>
  );
};

export const SliderArrowControl = ({
  direction,
  action,
  ariaLabel,
  themeVariant,
}: {
  direction: 'left' | 'right';
  action: (() => void) | undefined;
  ariaLabel: string;
  themeVariant: ThemeVariant;
}) => {
  const { palette } = useTheme();

  const arrowBackgroundColor = resolveThemeVariant<string>(
    'actionColor',
    themeVariant,
    { palette, theme: 'light' },
  );

  return (
    <IconButton
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: palette.primary.contrastText,
        bgcolor: arrowBackgroundColor,
        width: 32,
        height: 32,
        borderRadius: 16,
        '&:hover': {
          bgcolor: arrowBackgroundColor,
        },
        '&.Mui-focusVisible': { bgcolor: arrowBackgroundColor },
        ...(direction === 'right' && {
          position: 'absolute',
          top: 0,
          left: 40,
        }),
      }}
      disableRipple={true}
      onClick={action}
      aria-label={ariaLabel}
    >
      {direction === 'right' ? <ChevronRight /> : <ChevronLeft />}
    </IconButton>
  );
};
