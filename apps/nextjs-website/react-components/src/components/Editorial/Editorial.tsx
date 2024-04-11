import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import EContainer from '../EContainer';
import { EditorialProps } from '../../utils/Components.types';
import {
  useIsMobile,
  useBackgroundColor,
} from '../../utils/Components.helpers';
import { Content as EditorialContent } from './Content';
import { Ctas as EditorialCtas } from './Ctas';
import { Image as EditorialImage } from './Image';

const Editorial = (props: EditorialProps) => {
  const {
    image,
    eyelet = '',
    title,
    body,
    theme,
    ctaButtons = [],
    storeButtons = {},
    pattern = 'none',
    width = 'standard',
    reversed = false,
  } = props;

  const isMobile = useIsMobile();
  const backgroundColor = useBackgroundColor(theme);

  const columns = {
    wide: 6,
    standard: 5,
    center: 4,
  };

  const containerDirection = isMobile
    ? reversed
      ? 'column-reverse'
      : 'column'
    : reversed
    ? 'row-reverse'
    : 'row';

  const gridItemStyles =
    width === 'standard' ? { ...styles.half, ...styles.offset } : styles.half;

  return (
    <EContainer
      alignItems='center'
      background={backgroundColor}
      direction={containerDirection}
      py={8}
      spacing={2}
    >
      <Grid item md={columns[width]} sx={gridItemStyles}>
        <Stack gap={4}>
          <EditorialContent {...{ eyelet, body, title, theme }} />
          <EditorialCtas {...{ ctaButtons, storeButtons, theme }} />
        </Stack>
      </Grid>
      <Grid item md={columns[width]}>
        <EditorialImage {...{ pattern, image, theme }} />
      </Grid>
    </EContainer>
  );
};

export default Editorial;

const styles = {
  half: {
    display: 'grid',
    justifyContent: 'center',
  },
  offset: {
    marginLeft: '8.33%',
    paddingRight: '4.15%',
  },
};
