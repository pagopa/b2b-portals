import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ActionAreaCard from './Header.Card.helpers';
import { Divider } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';

const cardData = [
  {
    title: 'Lizard',
    subtitle:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    stackIcon: PeopleIcon,
    buttonText: 'Learn More',
    href: '/',
  },
  {
    title: 'Lizard',
    subtitle:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    stackIcon: BusinessIcon,
    buttonText: 'Learn More',
    href: '/',
  },
];

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface DesktopDrawerProps {
  isOpen: boolean;
  onClose: (anchor: Anchor) => void;
  anchor: Anchor; // Added anchor prop
}

export default function DesktopDrawer({
  isOpen,
  onClose,
  anchor,
}: DesktopDrawerProps) {
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width:
          anchor === 'top' || anchor === 'bottom'
            ? 'auto'
            : 250 || anchor === 'right'
              ? 'auto'
              : 450,
        padding: 2,
      }}
      role='presentation'
      onClick={() => onClose(anchor)}
      onKeyDown={() => onClose(anchor)}
    >
      <Divider sx={{ marginBottom: 2 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
        {cardData.map((card, index) => (
          <ActionAreaCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            buttonText={card.buttonText}
            href={card.href}
            stackIcon={card.stackIcon}
            theme={'light'}
          />
        ))}
      </div>
    </Box>
  );

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={() => onClose(anchor)}>
      {list(anchor)}
    </Drawer>
  );
}
