import { useRef, useState } from 'react';
import { Menu, MenuItem, Stack, Button } from '@mui/material';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material';
import { LangSwitchProps } from '../../../types/Footer/Footer.types';

export function LangSwitch({
  languages,
  onLanguageChanged,
  activeLanguage,
}: LangSwitchProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((open) => !open);
  };

  const anchorEl = useRef(null);

  return (
    <Stack display='flex' flexDirection='column' aria-label='cambia la lingua'>
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
                onLanguageChanged(language);
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
