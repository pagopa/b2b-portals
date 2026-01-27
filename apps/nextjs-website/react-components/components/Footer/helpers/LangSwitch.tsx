import { useRef, useState } from 'react';
import { Menu, MenuItem, Stack, Button } from '@mui/material';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material';
import { LangSwitchProps } from '../../../types/Footer/Footer.types';

export function LangSwitch({ languages, activeLanguage }: LangSwitchProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const anchorEl = useRef(null);

  /* Currently linking to the other locale's homepage since we have
  no certainty that each page's slug is the same in both languages
  or that the same pages exist at all in each language */
  const goToLanguageLink = (href: string) => (window.location.href = href);

  return (
    <Stack
      display='flex'
      flexDirection='column'
      aria-label='cambia la lingua'
      alignItems={{ xs: 'center', sm: 'flex-start' }}
      width='100%'
    >
      <Button
        sx={{
          fontWeight: '600',
          letterSpacing: 0.3,
          color: 'text.primary',
          height: 'auto',
          display: 'flex',
          padding: 0,
          marginBottom: 1,
          '&:hover': {
            backgroundColor: 'transparent',
          },
          justifyContent: 'flex-start',
        }}
        variant='text'
        size='small'
        disableRipple
        aria-label='lingua'
        aria-haspopup='true'
        aria-expanded={menuOpen}
        onClick={toggleMenu}
        ref={anchorEl}
        endIcon={
          menuOpen ? (
            <KeyboardArrowDownRounded fontSize='small' />
          ) : (
            <KeyboardArrowUpRounded fontSize='small' />
          )
        }
      >
        {activeLanguage.value}
      </Button>
      {languages.length > 0 && anchorEl && (
        <Menu
          anchorEl={anchorEl.current}
          sx={{ display: 'flex' }}
          open={menuOpen}
          onClose={() => {
            setMenuOpen(false);
          }}
          MenuListProps={{ 'aria-labelledby': 'lang-menu-button' }}
        >
          {languages.map((language) => (
            <MenuItem
              aria-label={language.value}
              key={language.id}
              onClick={() => {
                goToLanguageLink(language.href);
                localStorage.setItem('storedLanguage', language.id);
              }}
            >
              {language.value}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Stack>
  );
}
