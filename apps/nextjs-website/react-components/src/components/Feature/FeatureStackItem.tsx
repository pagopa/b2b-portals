import { Box, Stack, Typography } from '@mui/material';
import { FeatureStackItemProps } from '../../utils/Components.types';
import { EIcon } from '../EIcon';
import {
  RenderGenericTitle,
  useTextColor,
  useTextAlternativeColor,
} from '../../utils/Components.helpers';
import Subtitle from './Subtitle';

export const FeatureStackItem = ({ item, theme }: FeatureStackItemProps) => {
  const textColor = useTextColor(theme);
  const textColorAlternative = useTextAlternativeColor(theme);

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
        <RenderGenericTitle
          variant='h6'
          component='p'
          color={textColor}
          title={item.title}
        />
        <>
          {!item.link ? (
            <Typography variant='body2' color={textColor}>
              {item.subtitle}
            </Typography>
          ) : (
            <Subtitle
              theme={theme}
              subtitle={item.subtitle}
              textLink={item.link.text}
              url={item.link.url}
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
