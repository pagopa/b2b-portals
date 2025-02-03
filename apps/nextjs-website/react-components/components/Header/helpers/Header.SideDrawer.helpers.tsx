import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import ActionAreaCard from './Header.Card.helpers';
import { Button, Divider, Stack, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextAlternativeColor } from '@react-components/components/common/Common.helpers';
import {
  HeaderSideDrawerCtaCardProps,
  HeaderSideDrawerLinkCardProps,
} from '@react-components/types/Header/Header.types';

const drawerStyles = {
  '& .MuiDrawer-paperAnchorRight': {
    backgroundColor: '#f2f2f2',
    width: { xs: '100%', md: '25%' },
  },
};

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  anchor: Anchor;
  drawerMenuTitle: string;
  drawerMenuSubtitle?: string;
  theme: 'dark' | 'light';
  linkCards: HeaderSideDrawerLinkCardProps[];
  ctaCard: HeaderSideDrawerCtaCardProps;
}

export default function SideDrawer({
  isOpen,
  onClose,
  anchor,
  theme,
  drawerMenuTitle,
  drawerMenuSubtitle,
  linkCards,
  ctaCard,
}: SideDrawerProps) {
  const textColorAlternative = TextAlternativeColor(theme);

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose} sx={drawerStyles}>
      <Box
        sx={{
          padding: 2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        role='presentation'
        onClick={onClose}
      >
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          {drawerMenuSubtitle ? (
            <Stack>
              <Typography
                variant='body1'
                component='p'
                fontSize={22}
                fontWeight={600}
              >
                {drawerMenuTitle}
              </Typography>
              <Typography
                gutterBottom
                variant='body2'
                component='span'
              >
                {drawerMenuSubtitle}
              </Typography>
            </Stack>
          ) : (
            <Typography
              gutterBottom
              variant='body1'
              component='p'
              fontSize={22}
              fontWeight={600}
            >
              {drawerMenuTitle}
            </Typography>
          )}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider sx={{ marginBottom: 2 }} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '1em',
            backgroundColor: '#fff',
          }}
        >
          {linkCards.map((card, index) => (
            <ActionAreaCard
              key={index}
              title={card.title}
              subtitle={
                <Typography
                  component='div'
                  variant='body2'
                  color='text.secondary'
                >
                  {card.subtitle}
                </Typography>
              }
              buttonText={card.buttonText}
              href={card.href}
              icons={card.icons}
              theme={'light'}
            />
          ))}
        </div>
      </Box>
      <div style={{ padding: '1em', marginTop: 'auto' }}>
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '1em',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant='body1'
              component='div'
              style={{ fontWeight: '600' }}
            >
              {ctaCard.title}
            </Typography>
            <Button
              size='small'
              href={ctaCard.href}
              endIcon={<ArrowForwardIcon />}
              sx={{
                '& .MuiButtonBase-root': { color: textColorAlternative },
                '& .MuiSvgIcon-root': { fontSize: '20px' },
                color: textColorAlternative,
                fontSize: '16px',
                padding: 0,
              }}
            >
              {ctaCard.buttonText}
            </Button>
          </div>
          <Divider sx={{ marginBottom: 2, marginTop: 2 }} />
          <Typography gutterBottom variant='body2' component='div'>
            {ctaCard.subtitle}
          </Typography>
        </div>
      </div>
    </Drawer>
  );
}
