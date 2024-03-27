'use client';
import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MarkdownRenderer from './MarkdownRenderer';
import { AccordionSection } from '@/lib/fetch/types/PageSection';

interface AccordionItemProps {
  header: string;
  content: string | JSX.Element;
}

const AccordionItem = ({ header, content }: AccordionItemProps) => {
  const controlsId = React.useId() + '-controls';
  const headerId = React.useId() + '-header';

  return (
    <MUIAccordion
      disableGutters
      // Removes MUI accordion's top border
      sx={{
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={controlsId}
        id={headerId}
      >
        <Typography sx={{ my: 1.2 }} fontWeight={600}>
          {header}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {typeof content === 'string' ? (
          <Typography variant='body2'>{content}</Typography>
        ) : (
          content
        )}
      </AccordionDetails>
    </MUIAccordion>
  );
};

const Accordion = (props: AccordionSection) => {
  const {
    accordionItems,
    description,
    layout,
    sectionID,
    subtitle,
    theme,
    title,
  } = props;

  const renderedDescription = description
    ? MarkdownRenderer({ markdown: description, variant: 'body2', theme })
    : null;
  const renderedAccordionItems = accordionItems.map(({ header, content }) => ({
    header,
    content: MarkdownRenderer({ markdown: content, variant: 'body2' }),
  }));

  const isDarkTheme = theme === 'dark';
  const isCenterLayout = layout === 'center';

  const bgColor = isDarkTheme ? 'primary.main' : 'custom.bgColorLightGray';
  const textAlignment = isCenterLayout ? 'center' : 'left';
  const textColor = isDarkTheme ? 'white' : 'text.primary';

  return (
    <Box
      sx={{ py: { xs: 4, md: 10 } }}
      bgcolor={bgColor}
      component='section'
      id={sectionID || undefined}
    >
      <Container>
        <Grid spacing={{ xs: 5, md: isCenterLayout ? 7 : 16 }} container>
          <Grid item xs={12} md={isCenterLayout ? 12 : 4}>
            <Stack px={{ xs: 1, md: 0 }} spacing={{ xs: 2, md: 5 }}>
              {/** Title */}
              <Typography
                textAlign={textAlignment}
                color={textColor}
                variant='h4'
              >
                {title}
              </Typography>

              {/** Subtitle */}
              {subtitle && (
                <Typography
                  textAlign={textAlignment}
                  color={textColor}
                  variant='h6'
                >
                  {subtitle}
                </Typography>
              )}

              {/** Description */}
              {renderedDescription && (
                <Box textAlign={textAlignment} color={textColor}>
                  {renderedDescription}
                </Box>
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
            {renderedAccordionItems.map((accordionItem, i) => (
              <AccordionItem key={i} {...accordionItem} />
            ))}
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
};

export default Accordion;
