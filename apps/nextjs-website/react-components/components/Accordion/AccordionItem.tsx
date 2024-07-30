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
  const textColor = TextColor(theme);

  return (
    <MUIAccordion
      disableGutters
      // Removes MUI accordion's top border
      id={header.toLowerCase().replace(/\s+/g, '-')} // ID generato
      sx={{
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${header}-content`}
        id={`${header}-header`}
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
