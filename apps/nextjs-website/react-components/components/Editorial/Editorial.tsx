import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import ContainerRC from '../common/ContainerRC';
import { EditorialProps } from '../../types/Editorial/Editorial.types';
import { Content as EditorialContent } from './Content';
import { Ctas as EditorialCtas } from './Ctas';
import { Image as EditorialImage } from './Image';
import { useId } from 'react';
import {
  resolveByThemeVariant,
  variantSectionBackgroundColorMap,
} from '../../theme';
import { useTheme } from '@mui/material/styles';

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
    ariaLabelSection,
    titleTag,
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

  const { palette } = useTheme();
  const ctx = { palette, theme };

  const backgroundColor = resolveByThemeVariant(
    variantSectionBackgroundColorMap,
    themeVariant,
    ctx,
  );

  const columns = {
    wide: 6,
    center: 4,
  };
  const gridItemStyles = { ...styles.half };
  const eyeletId = useId();

  const arialabels = {
    ...(ariaLabelSection && { ariaLabel: ariaLabelSection }),
    ...(!ariaLabelSection && eyelet && { ariaLabelledBy: eyeletId }),
  };

  if (width === 'standard') {
    return (
      <ContainerRC
        size='xl'
        alignItems='center'
        background={backgroundColor}
        {...arialabels}
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
              {...(titleTag && { titleTag })}
              title={title}
              body={body}
              {...(eyelet && eyeletId && { eyelet, eyeletId })}
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
      {...arialabels}
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
            {...(titleTag && { titleTag })}
            title={title}
            body={body}
            {...(eyelet && eyeletId && { eyelet, eyeletId })}
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
