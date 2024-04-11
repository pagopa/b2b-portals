import { Box, Container, Grid, Stack } from '@mui/material';
import { AccordionItem } from './AccordionItem';
import {
  RenderGenericTitle,
  RenderGenericSubtitle,
  RenderGenericBody,
} from '../../utils/Components.helpers';
import { AccordionProps } from '../../utils/Components.types';

const Accordion = (props: AccordionProps) => {
  const {
    title,
    subtitle,
    description,
    accordionItems,
    theme,
    layout = 'left',
  } = props;
  const isDarkTheme = theme === 'dark';
  const bgcolor = isDarkTheme ? 'primary.main' : '#FAFAFA';
  const textColor = isDarkTheme ? 'white' : 'text.primary';

  const isCenterLayout = layout === 'center';
  const textAlignment = isCenterLayout ? 'center' : 'left';

  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} bgcolor={bgcolor} component='section'>
      <Container>
        <Grid spacing={{ xs: 5, md: isCenterLayout ? 7 : 16 }} container>
          <Grid item xs={12} md={isCenterLayout ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 5 }}>
              {/** Title */}

              <RenderGenericTitle
                variant='h4'
                color={textColor}
                title={title}
                textAlign={textAlignment}
              />

              {/** Subtitle */}

              {subtitle && (
                <>
                  <RenderGenericSubtitle
                    variant='h6'
                    textColor={textColor}
                    subtitle={subtitle}
                    textAlign={textAlignment}
                  />
                </>
              )}

              {/** Description */}
              {description && (
                <>
                  <RenderGenericBody
                    variant='body2'
                    textColor={textColor}
                    body={description}
                    textAlign={textAlignment}
                  />
                </>
              )}
            </Stack>
          </Grid>
        </Grid>
        <Grid
          item
          order={layout === 'right' ? -1 : 1}
          xs={12}
          md={isCenterLayout ? 12 : 8}
          mt={5}
        >
          {/** Accordions */}
          <Stack spacing={2}>
            {accordionItems.map((accordionItem, i) => (
              <AccordionItem key={i} {...accordionItem} />
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accordion;
