import { Box, Container, Grid, Stack } from '@mui/material';
import { AccordionItem } from './AccordionItem';
import { Title, Subtitle, Body } from '../common/Common';
import { AccordionProps } from '../../types/Accordion/Accordion.types';
import {
  BackgroundColorAlternative,
  TextColor,
} from '../common/Common.helpers';

const Accordion = (props: AccordionProps) => {
  const {
    title,
    subtitle,
    description,
    accordionItems,
    theme,
    layout = 'left',
  } = props;

  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColorAlternative(theme);
  const isCenterLayout = layout === 'center';
  const textAlignment = isCenterLayout ? 'center' : 'left';

  return (
    <Box
      sx={{ py: { xs: 4, md: 10 } }}
      bgcolor={backgroundColor}
      component='section'
    >
      <Container>
        <Grid spacing={{ xs: 5, md: isCenterLayout ? 7 : 16 }} container>
          <Grid item xs={12} md={isCenterLayout ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 5 }}>
              {/** Title */}

              <Title
                variant='h4'
                textColor={textColor}
                title={title}
                textAlign={textAlignment}
              />

              {/** Subtitle */}

              {subtitle && (
                <Subtitle
                  variant='h6'
                  textColor={textColor}
                  subtitle={subtitle}
                  textAlign={textAlignment}
                />
              )}

              {/** Description */}
              {description && (
                <Body
                  variant='body2'
                  textColor={textColor}
                  body={description}
                  textAlign={textAlignment}
                />
              )}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={isCenterLayout ? 12 : 8}
            mt={5}
            sx={{ order: layout === 'right' ? -1 : 1 }}
          >
            {/** Accordions */}
            <Stack spacing={2}>
              {accordionItems.map((accordionItem, i) => (
                <AccordionItem key={i} {...accordionItem} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accordion;
