import { useRef, useState } from 'react';
import { Menu, MenuItem, Typography, Box, Stack } from '@mui/material';
import { ButtonNaked } from './ButtonNaked';
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded } from '@mui/icons-material';
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
      <ButtonNaked
        sx={{
          color: 'text.primary',
          height: 'auto',
          display: 'flex',
        }}
        aria-label='lingua'
        aria-haspopup='true'
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <Box ref={anchorEl}>
          <Typography color='inherit' variant='subtitle2'>
            {activeLanguage.value}
          </Typography>
        </Box>

        {menuOpen ? (
          <KeyboardArrowDownRounded fontSize='small' />
        ) : (
          <KeyboardArrowUpRounded fontSize='small' />
        )}
      </ButtonNaked>
      {!!languages?.length && anchorEl && (
        <Menu
          anchorEl={anchorEl?.current}
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
