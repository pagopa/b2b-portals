import {
  Box,
  Link,
  Stack,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import { ServiceCardProps } from '../../types/ServiceCarousel/ServiceCarousel.types';
import Image from 'next/image';
import { ArrowForward, ChevronLeft, ChevronRight } from '@mui/icons-material';

// Style Carousel Dots (unfortunately react-slick doesn't offer an easy way)
// Ignore TS error for position because we need to use !important
// to overwrite react-slick's absolute positioning
// @ts-ignore
export const CarouselDots = styled(Box)(({ theme }) => ({
  position: 'static !important',
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
      },
      '&.slick-active button': {
        backgroundColor: theme.palette.custom.blueIO[500] + ' !important',
      },
    },
  },
}));

export const ServiceCard = (card: ServiceCardProps) => {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        display: 'flex !important',
        width: 'fit-content !important',
      }} // Prevent Slider from overwriting
      direction={'row'}
      gap={8}
      p={3}
      mr={4}
      alignItems={'flex-end'}
      height={272}
      bgcolor={palette.grey[50]}
      borderRadius={4}
      // Styles for mobile image
      position="relative"
      overflow="hidden"
    >
      <Stack
        gap={1}
        width={{ xs: 216, sm: 264, md: 264 }} // 216 has been found by testing: a higher number breaks react-slick and makes the last slide wrap under the first one
        alignSelf={'stretch'}
      >
        <Typography variant="h6">{card.title}</Typography>
        {card.description && (
          <Typography variant="body2">{card.description}</Typography>
        )}
        <Typography
          mt="auto"
          color={palette.custom.blueIO[500]}
          fontWeight={700}
        >
          <Link
            href={card.link.href}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            width="fit-content"
            color="inherit"
            underline="hover"
            fontSize={16}
          >
            {card.link.label}
            <ArrowForward color="inherit" sx={{ fontSize: 18 }} />
          </Link>
        </Typography>
      </Stack>

      {card.imageURL && (
        <Box
          height={{ xs: 80, sm: 80, md: 124 }}
          width={{ xs: 80, sm: 80, md: 124 }}
          position={{ xs: 'absolute', sm: 'absolute', md: 'relative' }}
          bottom={14}
          right={-12}
        >
          <Image src={card.imageURL} alt="" fill={true} />
        </Box>
      )}
    </Stack>
  );
};

export const SliderArrowControl = ({
  direction,
  action,
}: {
  direction: 'left' | 'right';
  action: (() => void) | undefined;
}) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{ display: 'grid', placeItems: 'center', cursor: 'pointer' }}
      bgcolor={palette.custom.blueIO[500]}
      width={32}
      height={32}
      borderRadius={16}
      color={palette.primary.contrastText}
      role={'button'}
      onClick={action}
    >
      {direction === 'right' ? <ChevronRight /> : <ChevronLeft />}
    </Box>
  );
};
