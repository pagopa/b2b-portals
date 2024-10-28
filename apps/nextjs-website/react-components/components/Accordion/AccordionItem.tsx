import React from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../types/Accordion/Accordion.types';
import { useTheme } from '@mui/material/styles';

export const AccordionItem: React.FC<
  AccordionItemProps & { themeVariant: 'IO' | 'SEND' }
> = ({ header, content, themeVariant }) => {
  const controlsId = React.useId() + '-controls';
  const headerId = React.useId() + '-header';
  const { palette } = useTheme();

  const linkColor =
    themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

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
        <Typography
          component='div'
          variant='body2'
          color={'text.primary'}
          sx={{
            '& a': {
              color: linkColor,
              textDecoration: 'underline',
              '&:hover': {
                color: linkColor,
              },
            },
          }}
        >
          {content}
        </Typography>
      </AccordionDetails>
    </MUIAccordion>
  );
};
