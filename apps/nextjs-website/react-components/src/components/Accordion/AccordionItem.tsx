import React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../utils/Components.types';
import { RenderGenericBody } from '../../utils/Components.helpers';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  content,
}) => {
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
        <RenderGenericBody variant='body2' body={content} />
      </AccordionDetails>
    </MUIAccordion>
  );
};