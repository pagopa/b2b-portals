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
};

const Editorial = (props: EditorialProps) => {
  const {
    image,
    mobileImage,
    eyelet,
    title,
    body,
    theme,
    ctaButtons,
    storeButtons,
    pattern = 'none',
    width = 'standard',
    reversed = false,
    sectionID,
  } = props;

  const isMobile = useIsMobile();
  const backgroundColor = BackgroundColor(theme);

  if (width === 'standard') {
    return (
      <ContainerRC
        size='xl'
        alignItems='center'
        background={backgroundColor}
        direction={isMobile ? 'column' : reversed ? 'row-reverse' : 'row'}
        py={8}
        spacing={2}
        {...(sectionID && { sectionID })}
      >
        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

        {isMobile && (
          <Grid item xs={12} sx={{ mb: isMobile ? 4 : 0 }}>
            <EditorialImage {...{ pattern, image, theme, mobileImage }} />
          </Grid>
        )}

        <Grid item xs={12} md={4}>
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

        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

        {!isMobile && (
          <Grid item xs={12} md={5}>
            <EditorialImage {...{ pattern, image, theme, mobileImage }} />
          </Grid>
        )}

        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />
      </ContainerRC>
    );
  }

  const columns = {
    wide: 6,
    center: 4,
  };

  const containerDirection = isMobile
    ? 'column'
    : reversed
      ? 'row-reverse'
      : 'row';

  const gridItemStyles = { ...styles.half };

  return (
    <ContainerRC
      size='xl'
      alignItems='center'
      background={backgroundColor}
      direction={containerDirection}
      py={8}
      spacing={2}
    >
      {isMobile && (
        <Grid item xs={12} sx={{ mb: 4 }}>
          <EditorialImage {...{ pattern, image, theme, mobileImage }} />
        </Grid>
      )}

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

      {!isMobile && (
        <Grid item md={columns[width]}>
          <EditorialImage {...{ pattern, image, theme, mobileImage }} />
        </Grid>
      )}
    </ContainerRC>
  );
};

export default Editorial;
