import type { Meta, StoryFn as StoryObj } from '@storybook/react';
import { Grid, Typography, Box } from '@mui/material';
import {
  BackgroundColor,
  BackgroundColorAlternative,
  ExtraBackgroundColor,
  TextColor,
  TextAlternativeColor,
  ExtraTextColor,
} from '@react-components/components/common/Common.helpers';

export const Default: StoryObj<{}> = () => {
  const getColors = (theme: 'dark' | 'light') => ({
    backgroundColor: BackgroundColor(theme),
    backgroundColorAlternative: BackgroundColorAlternative(theme),
    extraBackgroundColor: ExtraBackgroundColor(theme),
    textColor: TextColor(theme),
    textAlternativeColor: TextAlternativeColor(theme),
    extraTextColor: ExtraTextColor(theme),
  });

  return (
    <Grid container spacing={3}>
      {Object.entries(getColors('light')).map(
        ([colorName, lightColorValue]) => {
          const darkColorValue =
            getColors('dark')[colorName as keyof ReturnType<typeof getColors>];
          return (
            <Grid
              item
              xs={6}
              key={colorName}
              container
              direction='column'
              alignItems='center'
            >
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                mb={2}
                border={1}
              >
                <Box width={90} height={60} bgcolor={lightColorValue} />
                <Box width={90} height={60} bgcolor={darkColorValue} />
              </Box>
              <Typography variant='h6'>{colorName}</Typography>
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default {
  title: 'Example/ColorPalette',
  component: Default,
} as Meta;
