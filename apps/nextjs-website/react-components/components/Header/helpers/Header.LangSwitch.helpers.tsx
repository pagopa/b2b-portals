import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useRef, useState } from 'react';
import { LangSwitchProps } from '@react-components/types/Footer/Footer.types';
import Image from 'next/image';
import iconLanguage from '@react-components/assets/icons/icon-language-white.svg';
import iconChevron from '@react-components/assets/icons/icon-chevron-white.svg';
import { Locale } from '@react-components/types/common/Common.types';
interface Props extends LangSwitchProps {
  isMobile: boolean;
}
interface Labels {
  dropdownLabel: string;
  menuItemMobile: string;
  open: string;
  close: string;
}

export default function LangSwitch({
  isMobile,
  languages,
  activeLanguage,
}: Props) {
  const labels: Record<Locale, Labels> = {
    it: {
      dropdownLabel: 'Cambia la lingua',
      menuItemMobile: 'ITA',
      open: 'Apri',
      close: 'Chiudi',
    },
    en: {
      dropdownLabel: 'Change language',
      menuItemMobile: 'ENG',
      open: 'Open',
      close: 'Close',
    },
    fr: {
      dropdownLabel: 'Changer de langue',
      menuItemMobile: 'FRA',
      open: 'Ouvrir',
      close: 'Fermer',
    },
    de: {
      dropdownLabel: 'Sprache ändern',
      menuItemMobile: 'DEU',
      open: 'Offen',
      close: 'Schließen',
    },
    sl: {
      dropdownLabel: 'Spremeni jezik',
      menuItemMobile: 'SLO',
      open: 'Odprto',
      close: 'Zapri',
    },
  };
  const [open, setOpen] = useState(false);
  const currentDropdownLabel = isMobile
    ? labels[activeLanguage.id].menuItemMobile
    : `${labels[activeLanguage.id].dropdownLabel} (${labels[activeLanguage.id].menuItemMobile})`;

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
          height: 24,
          paddingInline: 1,
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'inherit !important',
          },
        }}
        onClick={toggleMenu}
        ref={anchorEl}
        variant='text'
        disableRipple
        aria-label={labels[activeLanguage.id].dropdownLabel}
        aria-haspopup='true'
        aria-expanded={open}
        {...(!isMobile && {
          startIcon: (
            <Image
              src={iconLanguage}
              alt={currentDropdownLabel}
              width={20}
              height={20}
            />
          ),
        })}
        endIcon={
          <Image
            src={iconChevron}
            alt={
              open
                ? labels[activeLanguage.id].close
                : labels[activeLanguage.id].open
            }
            width={12}
            height={12}
            style={{
              transition: 'transform 0.3s',
              transform: open ? 'rotate(0)' : 'rotate(180deg',
            }}
          />
        }
      >
        {currentDropdownLabel}
      </Button>
      {languages.length > 0 && anchorEl && (
        <Menu
          anchorEl={anchorEl.current}
          sx={{ display: 'flex', top: 12 }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          slotProps={{
            paper: {
              sx: {
                borderRadius: '0 0 4px 4px',
                overflow: 'initial',
                minWidth: { xs: 'auto', md: 170 },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 2,
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                  width: 20,
                  height: 20,
                  borderRadius: '4px',
                  bgcolor: 'background.paper',
                  zIndex: 0,
                },
              },
            },
          }}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          MenuListProps={{ 'aria-labelledby': 'lang-menu-button' }}
        >
          {languages.map((language) => (
            <MenuItem
              aria-label={language.value}
              selected={activeLanguage.id === language.id}
              key={language.id}
              lang={language.id}
              onClick={() => {
                localStorage.setItem('preferredLang', language.id);
                goToLanguageLink(language.href);
              }}
              sx={{
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: 'transparent !important',
                  color: '#0066CC !important',
                },
                '&.Mui-selected': {
                  backgroundColor: 'transparent !important',
                  color: '#0066CC !important',
                },
              }}
            >
              {isMobile ? labels[language.id].menuItemMobile : language.value}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}
