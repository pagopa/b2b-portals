import React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../types/Accordion/Accordion.types';
import { Body } from '../common/Common';
import { TextColor } from '../common/Common.helpers';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  header,
  content,
  theme,
}) => {
  const controlsId = React.useId() + '-controls';
  const headerId = React.useId() + '-header';
  const textColor = TextColor(theme);

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
        <Body variant='body2' body={content} textColor={textColor} />
      </AccordionDetails>
    </MUIAccordion>
  );
};
