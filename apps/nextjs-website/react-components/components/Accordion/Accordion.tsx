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
    layout = 'center',
    textAlignment = layout === 'center' ? 'center' : 'left',
    sectionID,
  } = props;

  const textColor = TextColor(theme);
  const backgroundColor = BackgroundColorAlternative(theme);

  return (
    <Box
      sx={{ py: { xs: 4, md: 10 } }}
      bgcolor={backgroundColor}
      component='section'
      {...(sectionID && { id: sectionID })}
    >
      <Container>
        <Grid container spacing={4} alignItems='flex-start'>
          <Grid item xs={12} md={layout === 'center' ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 4 }}>
              <Title
                variant='h4'
                textColor={textColor}
                title={title}
                textAlign={textAlignment}
              />
              {subtitle && (
                <Subtitle
                  variant='h6'
                  textColor={textColor}
                  subtitle={subtitle}
                  textAlign={textAlignment}
                />
              )}
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
          <Grid item xs={12} md={layout === 'center' ? 12 : 8}>
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
