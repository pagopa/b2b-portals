import React, { useLayoutEffect, useState } from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../types/Accordion/Accordion.types';
import { useTheme } from '@mui/material/styles';
import mixpanel from 'mixpanel-browser';

export const AccordionItem: React.FC<
  AccordionItemProps & { trackItemOpen: boolean }
> = ({ itemID, header, content, themeVariant, trackItemOpen }) => {
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
    window.location.hash = itemID;
  };

  const triggerMixpanelFAQEvent = () => {
    if (trackItemOpen && itemID) {
      try {
        if (!mixpanel.has_opted_out_tracking()) {
          mixpanel.track('FAQ', { 'FAQ Name': itemID });
        }
      } catch {
        // Mixpanel is not initialized
      }
    }
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
    setExpanded(!expanded);
    if (!expanded) {
      triggerMixpanelFAQEvent();
      appendItemIDToURLHash();
    }
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
