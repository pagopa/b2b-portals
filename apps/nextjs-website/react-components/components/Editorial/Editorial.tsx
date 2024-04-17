import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ContainerRC from '../common/ContainerRC';
import { EditorialProps } from '../../types/Editorial/Editorial.types';
import { useIsMobile } from './Editorial.helpers';
import { BackgroundColor } from '../common/Common.helpers';
import { Content as EditorialContent } from './Content';
import { Ctas as EditorialCtas } from './Ctas';
import { Image as EditorialImage } from './Image';

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

const Editorial = (props: EditorialProps) => {
  const {
    image,
    eyelet,
    title,
    body,
    theme,
    ctaButtons,
    storeButtons,
    pattern = 'none',
    width = 'standard',
    reversed = false,
  } = props;

  const isMobile = useIsMobile();
  const backgroundColor = BackgroundColor(theme);

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
    <ContainerRC
      alignItems='center'
      background={backgroundColor}
      direction={containerDirection}
      py={8}
      spacing={2}
    >
      <Grid item md={columns[width]} sx={gridItemStyles}>
        <Stack gap={4}>
          <EditorialContent
            theme={theme}
            title={title}
            body={body}
            {...(eyelet && { eyelet })}
          />
          <EditorialCtas
            theme={theme}
            {...(ctaButtons && { ctaButtons })}
            {...(storeButtons && { storeButtons })}
          />
        </Stack>
      </Grid>
      <Grid item md={columns[width]}>
        <EditorialImage {...{ pattern, image, theme }} />
      </Grid>
    </ContainerRC>
  );
};

export default Editorial;
