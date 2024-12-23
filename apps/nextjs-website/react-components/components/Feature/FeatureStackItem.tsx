import { Box, Stack } from '@mui/material';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';
import { Title } from '../common/Common';
import { TextColor, TextAlternativeColor } from '../common/Common.helpers';
import Subtitle from './Subtitle';
import Image from 'next/image';

export const FeatureStackItem = ({
  item,
  theme,
  themeVariant,
}: FeatureStackItemProps) => {
  const textColor = TextColor(theme);
  const textColorAlternative = TextAlternativeColor(theme);

  return (
    <Stack
      component='article'
      alignContent='center'
      justifyContent='flex-start'
      alignItems='center'
      spacing={{ xs: 1, md: 3 }}
      sx={{
        flex: 1,
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <Box
        mx='auto'
        sx={{
          svg: {
            height: '64px',
            width: '64px',
          },
        }}
        color={textColorAlternative}
      >
        <Image src={item.iconURL} alt='' height={64} width={64} />
      </Box>
      <Stack spacing={1} textAlign='center'>
        <Title
          variant='h6'
          component='p'
          textColor={textColor}
          title={item.title}
        />
        <Subtitle theme={theme} item={item} themeVariant={themeVariant} />
      </Stack>
    </Stack>
  );
};
