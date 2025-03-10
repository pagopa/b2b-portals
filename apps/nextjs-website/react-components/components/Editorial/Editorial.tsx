import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ContainerRC from '../common/ContainerRC';
import { EditorialProps } from '../../types/Editorial/Editorial.types';
import {
  SendBackgroundColor,
  IoBackgroundColor,
} from '../common/Common.helpers';
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
    themeVariant,
    ctaButtons,
    storeButtons,
    pattern = 'none',
    width = 'standard',
    reversed = false,
    sectionID,
  } = props;
  const backgroundColor =
    themeVariant === 'SEND'
      ? SendBackgroundColor(theme)
      : IoBackgroundColor(theme);
  const columns = {
    wide: 6,
    center: 4,
  };
  const gridItemStyles = { ...styles.half };

  if (width === 'standard') {
    return (
      <ContainerRC
        size='xl'
        alignItems='center'
        background={backgroundColor}
        direction={{
          xs: 'column-reverse',
          md: reversed ? 'row-reverse' : 'row',
        }}
        py={8}
        spacing={2}
        {...(sectionID && { sectionID })}
      >
        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

        <Grid item xs={12} md={4}>
          <Stack gap={4}>
            <EditorialContent
              theme={theme}
              themeVariant={themeVariant}
              title={title}
              body={body}
              {...(eyelet && { eyelet })}
            />
            <EditorialCtas
              theme={theme}
              themeVariant={themeVariant}
              {...(ctaButtons && { ctaButtons })}
              {...(storeButtons && { storeButtons })}
            />
          </Stack>
        </Grid>

        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />

        <Grid item xs={12} md={5}>
          <EditorialImage {...{ pattern, image, theme, mobileImage }} />
        </Grid>

        <Grid item md={1} sx={{ display: { xs: 'none', md: 'block' } }} />
      </ContainerRC>
    );
  }

  return (
    <ContainerRC
      size='xl'
      alignItems='center'
      background={backgroundColor}
      direction={{
        xs: 'column-reverse',
        md: reversed ? 'row-reverse' : 'row',
      }}
      py={8}
      spacing={2}
    >
      <Grid item md={columns[width]} sx={gridItemStyles}>
        <Stack gap={4}>
          <EditorialContent
            theme={theme}
            themeVariant={themeVariant}
            title={title}
            body={body}
            {...(eyelet && { eyelet })}
          />
          <EditorialCtas
            theme={theme}
            themeVariant={themeVariant}
            {...(ctaButtons && { ctaButtons })}
            {...(storeButtons && { storeButtons })}
          />
        </Stack>
      </Grid>
      <Grid item md={columns[width]}>
        <EditorialImage {...{ pattern, image, theme, mobileImage }} />
      </Grid>
    </ContainerRC>
  );
};

export default Editorial;
