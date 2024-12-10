import React, { useLayoutEffect, useState } from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../types/Accordion/Accordion.types';
import { useTheme } from '@mui/material/styles';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  itemID,
  header,
  content,
  themeVariant,
}) => {
  const controlsId = React.useId() + '-controls';
  const headerId = React.useId() + '-header';
  const { palette } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const linkColor =
    themeVariant === 'SEND'
      ? palette.primary.main
      : palette.custom.primaryColorDark;

  const appendItemIDToURLHash = () => {
    if (!itemID) return;
    const url = new URL(window.location.href);
    url.hash = itemID;
    window.history.replaceState(null, '', url.toString());
  };

  useLayoutEffect(() => {
    if (itemID && window.location.hash === `#${itemID}`) {
      const targetItem = document.getElementById(itemID);

      if (targetItem) {
        setExpanded(true);
        targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, []);

  const handleChange = () => {
    if (!expanded) {
      appendItemIDToURLHash();
    }
    setExpanded(!expanded);
  };

  return (
    <MUIAccordion
      disableGutters
      expanded={expanded}
      onChange={handleChange}
      id={itemID}
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
