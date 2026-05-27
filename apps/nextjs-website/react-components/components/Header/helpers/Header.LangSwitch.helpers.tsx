import { Box, Button, Link, Menu, MenuItem } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRef, useState } from 'react';
import { LangSwitchProps } from '@react-components/types/Footer/Footer.types';
import LanguageIcon from '@mui/icons-material/Language';
interface Props extends LangSwitchProps {
  isMobile: boolean;
}
export default function LangSwitch({
  isMobile,
  languages,
  activeLanguage,
}: Props) {
  const labels = {
    it: {
      dropdownLabel: 'Cambia la lingua',
      optionLabel: 'ITA',
      optionValue: 'it',
    },
    en: {
      dropdownLabel: 'Change language',
      optionLabel: 'ENG',
      optionValue: 'en',
    },
    fr: {
      dropdownLabel: 'Changer de langue',
      optionLabel: 'FRA',
      optionValue: 'fr',
    },
    de: {
      dropdownLabel: 'Sprache ändern',
      optionLabel: 'DEU',
      optionValue: 'de',
    },
    sl: {
      dropdownLabel: 'Spremeni jezik',
      optionLabel: 'SLO',
      optionValue: 'sl',
    },
  };
  const [open, setOpen] = useState(false);
  const currentDropdownLabel = isMobile
    ? labels[activeLanguage.id].optionLabel
    : `${labels[activeLanguage.id].dropdownLabel} (${labels[activeLanguage.id].optionLabel})`;

  const toggleMenu = () => setOpen((prev) => !prev);
  const anchorEl = useRef(null);
  const goToLanguageLink = (href: string) => (window.location.href = href);

  return (
    <Box sx={{ ml: 'auto' }}>
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          textDecoration: 'none',
          cursor: 'pointer',
          fontSize: 14,
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'inherit !important',
          },
        }}
        onClick={toggleMenu}
        ref={anchorEl}
        variant='text'
        disableRipple
        {...(!isMobile && { startIcon: <LanguageIcon /> })}
        endIcon={
          <ExpandMoreIcon
            sx={{ ...(open && { transform: 'rotate(180deg)' }) }}
          />
        }
      >
        {currentDropdownLabel}
      </Button>
      {languages.length > 0 && anchorEl && (
        <Menu
          anchorEl={anchorEl.current}
          sx={{ display: 'flex' }}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          MenuListProps={{ 'aria-labelledby': 'lang-menu-button' }}
        >
          {languages.map((language) => (
            <MenuItem
              aria-label={language.value}
              key={language.id}
              lang={language.id}
              onClick={() => {
                localStorage.setItem('preferredLang', language.id);
                goToLanguageLink(language.href);
              }}
            >
              {language.value}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
