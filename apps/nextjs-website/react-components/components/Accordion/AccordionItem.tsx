import React, { useLayoutEffect, useState } from 'react';
import MUIAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { AccordionItemProps } from '../../types/Accordion/Accordion.types';
import { useTheme } from '@mui/material/styles';
import mixpanel from 'mixpanel-browser';
import { resolveThemeVariant } from '../../theme';

export const AccordionItem: React.FC<
  AccordionItemProps & { trackItemOpen: boolean }
> = ({ itemID, header, content, themeVariant, theme, trackItemOpen }) => {
  const controlsId = React.useId() + '-controls';
  const headerId = React.useId() + '-header';
  const { palette } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const ctx = { palette, theme };

  const linkColor = resolveThemeVariant<string>(
    'accentColor',
    themeVariant,
    ctx,
  );

  const focusOutlineColor = resolveThemeVariant<string>(
    'focusOutlineColor',
    themeVariant,
    ctx,
  );

  const focusBackgroundColor = resolveThemeVariant<string>(
    'focusBackgroundColor',
    themeVariant,
    ctx,
  );

  const backgroundColor = resolveThemeVariant<string>(
    'accordionItemBackgroundColor',
    themeVariant,
    ctx,
  );

  const borderColor = resolveThemeVariant<string>(
    'borderColor',
    themeVariant,
    ctx,
  );

  const borderRadius = resolveThemeVariant<string>(
    'accordionItemBorderRadius',
    themeVariant,
    ctx,
  );

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
    const handleHashChange = () => {
      if (itemID && window.location.hash === `#${itemID}`) {
        const targetItem = document.getElementById(itemID);
        if (targetItem) {
          setExpanded(true);
          targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [itemID]);

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
      elevation={0}
      expanded={expanded}
      onChange={handleChange}
      id={itemID}
      sx={{
        '&.Mui-expanded, &:first-of-type, &:last-of-type': {
          borderRadius,
        },
        '&:before': {
          display: 'none',
        },
        backgroundColor,
        border: `1px solid ${borderColor}`,
        borderRadius,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={controlsId}
        id={headerId}
        sx={{
          '&.Mui-focusVisible': {
            outline: `3px solid ${focusOutlineColor}`,
            backgroundColor: focusBackgroundColor,
            borderRadius: '8px',
          },
        }}
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
