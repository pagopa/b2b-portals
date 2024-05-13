import { Box, Stack } from '@mui/material';
import { FeatureStackItemProps } from '../../types/Feature/Feature.types';
import { EIcon } from '../common/EIcon';
import { Title } from '../common/Common';
import { TextColor, TextAlternativeColor } from '../common/Common.helpers';
import Subtitle from './Subtitle';

export const FeatureStackItem = ({ item, theme }: FeatureStackItemProps) => {
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
        <EIcon {...item?.stackIcon} />
      </Box>
      <Stack spacing={1} textAlign='center'>
        <Title
          variant='h6'
          component='p'
          textColor={textColor}
          title={item.title}
        />
        <>
          {item.link ? (
            <Subtitle
              theme={theme}
              subtitle={item.subtitle}
              textLink={item.link.text}
              url={item.link.url}
            />
          ) : null}
        </>
      </Stack>
    </Stack>
  );
};
