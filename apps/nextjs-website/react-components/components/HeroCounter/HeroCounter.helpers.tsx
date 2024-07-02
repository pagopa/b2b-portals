import { Stack } from '@mui/material';
import { HeroCounterTextProps } from '@react-components/types/HeroCounter/HeroCounter.types';
import { Subtitle, Title } from '../common/Common';
import { TextColor } from '../common/Common.helpers';

export const getMinHeight = (size: 'medium' | 'big' | 'small' | undefined) =>
  size === 'big' ? '720px' : size === 'medium' ? '480px' : '220px';

export const getOverlay = (useHoverlay: boolean, theme: string) =>
  useHoverlay
    ? theme === 'dark'
      ? 'linear-gradient(0deg, rgba(0, 98, 195, 0.65), rgba(0, 98, 195, 0.65)), '
      : 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), '
    : '';

export const HeroCounterTextContent = ({
  title,
  subtitle,
  theme,
  size,
}: HeroCounterTextProps) => {
  const textColor = TextColor(theme);

  return (
    <Stack
      justifyContent={size === 'small' ? 'center' : { md: 'center' }}
      alignItems={size === 'small' ? 'center' : 'inherit'}
      sx={{ minHeight: 'inherit' }}
      mt={{ xs: 9, lg: 0 }}
      component='section'
      spacing={2}
    >
      <Stack spacing={2} mb={size === 'small' ? 0 : { xs: 6, md: 4 }}>
        <Title
          variant='h1'
          textColor={textColor}
          title={title}
          textAlign={size === 'small' ? 'center' : 'left'}
          marginBottom={size === 'small' ? 0 : 2}
        />
        <Subtitle
          variant='body1'
          textColor={textColor}
          subtitle={subtitle}
          textAlign={size === 'small' ? 'center' : 'left'}
        />
      </Stack>
    </Stack>
  );
};
